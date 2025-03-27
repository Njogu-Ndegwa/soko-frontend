import { gql, useLazyQuery, useQuery } from '@apollo/client';
// import clientSimulator from 'utils/clientSimulator';
// // import {
// //   GetAllMessageGroups,
// //   GetAllMessageGroupsVariables
// // } from './types/GetAllMessageGroups';
// import { 
//   GetAllMessageTemplates, 
//   GetAllMessageTemplatesVariables 
// } from './types/GetAllMessageTemplates';
// import { 
//   GetSpecificMessageTemplate,
//   GetSpecificMessageTemplateVariables
//  } from './types/GetSpecificMessageTemplate';


/**
 * type MessageTemplate {
_id: ID!
deleteStatus: Boolean
deleteAt: DateTime
createdAt: DateTime
updatedAt: DateTime
name: String!
messageBody: String!
description: String
intent: IntentsEnum!
distributor: Distributor
}
 */


export const messageTemplateFragment = gql`
  fragment MessageTemplate on MessageTemplate {
    name
    messageBody
    description
    intent
    messageCourier
    distributor {
      _id
      name
    }
    _id
    createdAt
  }
`;

/**
 * type MessageTemplateEdge {
cursor: String
node: MessageGroup
}
 */
export const messageTemplateEdgeFragment = gql`
  ${messageTemplateFragment}
  fragment MessageTemplateEdge on MessageTemplateEdge {
    cursor
    node {
      ...MessageTemplate
    }
  }
`;
/**
 * type MessageTemplatePageInfo {
startCursor: String
endCursor: String
hasPreviousPage: Boolean!
hasNextPage: Boolean!
}
 */
export const messageTemplatePageInfoFragment = gql`
  fragment MessageTemplatePageInfo on MessageTemplatePageInfo {
    startCursor
    endCursor
    hasPreviousPage
    hasNextPage
  }
`;
/**
 * type PageData {
count: Int!
limit: Int!
offset: Int!
}
 */
export const pageDataFragment = gql`
  fragment PageData on PageData {
    count
    limit
    offset
  }
`;


/**
 * type MessageGroupConnection {
edges: [MessageGroupEdge!]
pageInfo: MessageGroupPageInfo
}
 */

export const messageTemplateConnectionFragment = gql`
  ${messageTemplateEdgeFragment}
  ${messageTemplatePageInfoFragment}
  fragment MessageTemplateConnection on MessageTemplateConnection {
    edges {
      ...MessageTemplateEdge
    }
    pageInfo {
      ...MessageTemplatePageInfo
    }
  }
`;

/**
 * type GetAllMessageGroupResponse {
page: MessageGroupConnection!
pageData: PageData
}
 */
export const getAllMessageTemplateResponseFragment = gql`
  ${messageTemplateConnectionFragment}
  ${pageDataFragment}
  fragment GetAllMessageTemplateResponse on GetAllMessageTemplateResponse {
    page {
      ...MessageTemplateConnection
    }
    pageData {
      ...PageData
    }
  }
`;

/**
 * query {
  getAllItemFirmwares {
    _id
  }
}
 */
export const getAllMessageTemplateQuery = gql`
  ${getAllMessageTemplateResponseFragment}
  query GetAllMessageTemplates(
    $before: String
    $after: String
    $first: Int
    $last: Int
    $search: String
  ) {
    getAllMessageTemplates(
      before: $before
      after: $after
      first: $first
      last: $last
      search: $search
    ) {
      ...GetAllMessageTemplateResponse
    }
  }
`;

/**
getSpecificMessageTemplate(
id: ID!
): MessageGroup!
 */
export const getSpecificMessageTemplateQuery = gql`
  ${messageTemplateFragment}
  query GetSpecificMessageTemplate($id: ID!) {
    getSpecificMessageTemplate(id: $id) {
      ...MessageTemplate
        }
  }
`;

