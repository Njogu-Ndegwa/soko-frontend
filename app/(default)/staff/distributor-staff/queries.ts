import { useLazyQuery, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
// import useNotifier from 'hooks/useNotifier';
// import { handleGQLErrors } from 'utils/gqlErrors';
// import clientSimulator from 'utils/clientSimulator';

// import {
//   GetSpecificDistributorStaff,
//   GetSpecificDistributorStaffVariables
// } from "./types/GetSpecificDistributorStaff";

// import {
//   GetAllDistributorStaffsForSpecificDistributor,
//   GetAllDistributorStaffsForSpecificDistributorVariables
// } from "./types/GetAllDistributorStaffsForSpecificDistributor";

/**
 * type DistributorStaff {
_id: ID!
authenticationSubInstance: AuthenticationSubInstance
clientExclusiveServicePermissions: [ClientExclusiveServicePermissions!]
subRolePermissions: SubRolePermissions
deleteStatus: Boolean
deleteAt: DateTime
createdAt: DateTime
updatedAt: DateTime
firstName: String!
lastName: String!
gender: String
age: Float
contact: Contact!
address: Address!
subrole: SubRoles!
refreshClientToken: RefreshClientToken
distributor: Distributor!
staffID: String!
hireDate: DateTime!
officeAddress: Address!
}
 */
export const distributorStaffFragment = gql`
  fragment DistributorStaff on DistributorStaff {
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
const distributorStaffEdgeFragment = gql`
  ${distributorStaffFragment}
  fragment DistributorStaffEdge on DistributorStaffEdge {
    cursor
    node {
      ...DistributorStaff
    }
  }
`;
/**
 * type DistributorStaffPageInfo {
startCursor: String
endCursor: String
hasPreviousPage: Boolean!
hasNextPage: Boolean!
}
 */
const distributorStaffPageInfoFragment = gql`
  fragment  DistributorStaffPageInfo on  DistributorStaffPageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
/**
 * type DistributorStaffPageInfo {
startCursor: String
endCursor: String
hasPreviousPage: Boolean!
hasNextPage: Boolean!
}
 */
const distributorStaffConnectionFragment = gql`
  ${distributorStaffPageInfoFragment}
  ${distributorStaffEdgeFragment}
  fragment  DistributorStaffConnection  on  DistributorStaffConnection  {
    edges {
      ...DistributorStaffEdge
    }
    pageInfo {
      ...DistributorStaffPageInfo
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
 * type GetAllDistributorStaffResponse {
page: DistributorStaffConnection!
pageData: PageData
}
 */
export const getAllDistributorStaffResponseFragment = gql`
  ${distributorStaffConnectionFragment}
  ${pageDataFragment}
  fragment GetAllDistributorStaffResponse on GetAllDistributorStaffResponse {
    page {
      ...DistributorStaffConnection
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
const getAllDistributorStaffsForSpecificDistributorQuery = gql`
  ${getAllDistributorStaffResponseFragment}
  query GetAllDistributorStaffsForSpecificDistributor(
    $after: String
    $before: String
    $first: Int
    $last: Int
    $search: String
  ) {
    getAllDistributorStaffsForSpecificDistributor(
      after: $after
      before: $before
      first: $first
      last: $last
      search: $search
    ) {
      ...GetAllDistributorStaffResponse
    }
  }
`;

/**
 * getSpecificDistributorStaff(
id: ID!
): DistributorStaff
 */
const getSpecificDistributorStaffQuery = gql`
  ${distributorStaffFragment}
  query GetSpecificDistributorStaff($id: ID!) {
    getSpecificDistributorStaff(id: $id) {
      ...DistributorStaff
    }
  }
`;


// const getAllSubRolesQuery = gql`
// query {
//   getAllSubRoles(first: 10) {
// page {
//    edges {
//     node {
//       _id
//       name
//     }
//   }
// }
//   }
// }
// `


