import { useLazyQuery, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
// import useNotifier from 'hooks/useNotifier';
// import { handleGQLErrors } from 'utils/gqlErrors';
// import clientSimulator from 'utils/clientSimulator';
// import {
//   GetAllAgentsForSpecificDistributorStaff,
//   GetAllAgentsForSpecificDistributorStaffVariables
// } from "./types/GetAllAgentsForSpecificDistributorStaff"
// import {
//   GetSpecificAgent,
//   GetSpecificAgentVariables
// } from "./types/GetSpecificAgent"


/**
 * type Person {
_id: ID!
address: Address!
assetAccount: AssetAccount
contact: Contact!
createdAt: DateTime
creditAccount: CreditAccount
deleteAt: DateTime
deleteStatus: Boolean
description: String
distributor: Distributor
name: String!
organization: Organization
servicer: Servicer
supplier: Supplier
type: PersonTypes!
updatedAt: DateTime
}
 */
export const agentFragment = gql`
  fragment Agent on Agent {
    _id
    address {
      addressLocation {
        addressLatitude
        addressLongitude
      }
      city
      country
      postcode
      srpc
      street
      unit
    }

    contact {
      email
      phone
      social
    }
    createdAt

    deleteAt
    deleteStatus
    firstName
    lastName
    updatedAt
  }
`;
/**
 * type AgentEdge {
cursor: String
node: Agent
}
 */
const agentEdgeFragment = gql`
  ${agentFragment}
  fragment AgentEdge on AgentEdge {
    cursor
    node {
      ...Agent
    }
  }
`;
/**
 * type AgentPageInfo {
startCursor: String
endCursor: String
hasPreviousPage: Boolean!
hasNextPage: Boolean!
}
 */
const agentPageInfoFragment = gql`
  fragment AgentPageInfo on AgentPageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
/**
 * type PersonConnection {
edges: [PersonEdge!]
pageInfo: PersonPageInfo
}
 */
const agentConnectionFragment = gql`
  ${agentPageInfoFragment}
  ${agentEdgeFragment}
  fragment  AgentConnection  on  AgentConnection  {
    edges {
      ...AgentEdge
    }
    pageInfo {
      ...AgentPageInfo
    }
  }
`;
/**
 * type PageData {
count: Float!
limit: Float!
offset: Float!
}
 */
const pageDataFragment = gql`
  fragment PageData on PageData {
    count
    limit
    offset
  }
`;
/**
 * type GetAllPersonsResponse {
page: PersonConnection!
pageData: PageData
}
 */
export const getAllAgentsResponseFragment = gql`
  ${agentConnectionFragment}
  ${pageDataFragment}
  fragment GetAllAgentsResponse on GetAllAgentsResponse {
    page {
      ...AgentConnection
    }
    pageData {
      ...PageData
    }
  }
`;
/**
 * Query.getAllAgentsForSpecificDistributorStaff(
search: String
before: String
after: String
first: Int
last: Int
): GetAllAgentsResponse!
 */
const getAllAgentsForSpecificDistributorStaffQuery = gql`
  ${getAllAgentsResponseFragment}
  query GetAllAgentsForSpecificDistributorStaff(
    $after: String
    $before: String
    $first: Int
    $last: Int
    $search: String
  ) {
    getAllAgentsForSpecificDistributorStaff(
      after: $after
      before: $before
      first: $first
      last: $last
      search: $search
    ) {
      ...GetAllAgentsResponse
    }
  }
`;

/**
 * Query.getSpecificCustomerOrPerson(
personId: ID!
): Person!
 */
const getSpecificAgentQuery = gql`
  ${agentFragment}
  query GetSpecificAgent($id: ID!) {
    getSpecificAgent(id: $id) {
      ...Agent
    }
  }
`;
