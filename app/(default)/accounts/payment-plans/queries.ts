import { gql, useLazyQuery, useQuery } from "@apollo/client";
// import clientAccount from 'apps/accounts/app/utils/clientAccount';
import {
  GetAllPayPlanTemplates,
  GetAllPayPlanTemplatesVariables,
} from "./types/GetAllPayPlanTemplates";
// import { GetSpecificPayPlanTemplate, GetSpecificPayPlanTemplateVariables } from './types/GetSpecificPayPlanTemplate';

/**
 * type PayPlanTemplate {
_id: ID!
deleteStatus: Boolean
deleteAt: DateTime
createdAt: DateTime
updatedAt: DateTime
planName: String
planDescription: String
planDetails: [PlanDetail!]
}
 */

const paymentPlanTemplateFragment = gql`
  fragment PayPlanTemplate on PayPlanTemplate {
    planName
    planDescription
    useUpfront
    _id
    createdAt
    planDetails {
      pName
      pValue
    }
  }
`;
/**
 * type PayPlanTemplateEdge {
cursor: String
node: PayPlanTemplate
}
 */

const paymentPlanTemplateEdgeFragment = gql`
  ${paymentPlanTemplateFragment}
  fragment PayPlanTemplateEdge on PayPlanTemplateEdge {
    cursor
    node {
      ...PayPlanTemplate
    }
  }
`;
/**
 * type PayPlanTemplatePageInfo {
startCursor: String
endCursor: String
hasPreviousPage: Boolean!
hasNextPage: Boolean!
}
 */
const payPlanTemplatePageInfoFragment = gql`
  fragment PayPlanTemplatePageInfo on PayPlanTemplatePageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
/**
 * type PayPlanTemplateConnection {
edges: [PayPlanTemplateEdge!]
pageInfo: PayPlanTemplatePageInfo
}
 */
const paymentPlanTemplateConnectionFragment = gql`
  ${paymentPlanTemplateEdgeFragment}
  ${payPlanTemplatePageInfoFragment}
  fragment PayPlanTemplateConnection on PayPlanTemplateConnection {
    edges {
      ...PayPlanTemplateEdge
    }
    pageInfo {
      ...PayPlanTemplatePageInfo
    }
  }
`;
/**
 * type PageData {
count: Int!
limit: Int!
offset: Int!
}
 */
const pageDataFragment = gql`
  fragment PageData on PageData {
    count
  }
`;
/**
 * type GetAllPayPlansResponse {
page: PayPlanTemplateConnection!
pageData: PageData
}
 */
const getAllPayPlansResponse = gql`
  ${pageDataFragment}
  ${paymentPlanTemplateConnectionFragment}
  fragment GetAllPayPlansResponse on GetAllPayPlansResponse {
    page {
      ...PayPlanTemplateConnection
    }
    pageData {
      ...PageData
    }
  }
`;
/**
 * getAllPayPlanTemplates(
before: String
after: String
first: Int
last: Int
): GetAllPayPlansResponse!
 */
const getAllPayPlanTemplatesQuery = gql`
  ${getAllPayPlansResponse}
  query GetAllPayPlanTemplates(
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    getAllPayPlanTemplates(
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      ...GetAllPayPlansResponse
    }
  }
`;

/**
 * Query.getSpecificPayPlanTemplate(
id: ID!
): PayPlanTemplate
 */
const getSpecificPayPlanTemplateQuery = gql`
  ${paymentPlanTemplateFragment}
  query GetSpecificPayPlanTemplate($id: ID!) {
    getSpecificPayPlanTemplate(id: $id) {
      ...PayPlanTemplate
    }
  }
`;

export const useGetAllPayPlanTemplates = () => {
  return useQuery<GetAllPayPlanTemplates, GetAllPayPlanTemplatesVariables>(
    getAllPayPlanTemplatesQuery
  );
};

export const useLazyGetAllPayPlanTemplatesQuery = () => {
  return useLazyQuery<GetAllPayPlanTemplates, GetAllPayPlanTemplatesVariables>(
    getAllPayPlanTemplatesQuery
  );
};

export const useGetSpecificPayPlanTemplate = () => {
  return useLazyQuery<GetAllPayPlanTemplates, GetAllPayPlanTemplatesVariables>(
    getSpecificPayPlanTemplateQuery
  );
};
