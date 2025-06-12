import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { 
  GetSpecificCustomerOrPersonVariables, 
  GetSpecificCustomerOrPerson } from "./types/GetSpecificCustomerOrPerson";
import { 
  GetAllClientCustomers, 
  GetAllClientCustomersVariables } from "./types/GetAllClientCustomers";

export const personFragment = gql`
  fragment Person on Person {
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
    description
    distributor {
      _id
      name
    }
    name
    type
    updatedAt
  }
`;
/**
 * type PersonEdge {
cursor: String
node: Person
}
 */
const personEdgeFragment = gql`
  ${personFragment}
  fragment PersonEdge on PersonEdge {
    cursor
    node {
      ...Person
    }
  }
`;
/**
 * type PersonPageInfo {
endCursor: String
hasNextPage: Boolean!
hasPreviousPage: Boolean!
startCursor: String
}
 */
const personPageInfoFragment = gql`
  fragment PersonPageInfo on PersonPageInfo {
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
const personConnectionFragment = gql`
  ${personPageInfoFragment}
  ${personEdgeFragment}
  fragment PersonConnection on PersonConnection {
    edges {
      ...PersonEdge
    }
    pageInfo {
      ...PersonPageInfo
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
export const getAllPersonsResponseFragment = gql`
  ${personConnectionFragment}
  ${pageDataFragment}
  fragment GetAllPersonsResponse on GetAllPersonsResponse {
    page {
      ...PersonConnection
    }
    pageData {
      ...PageData
    }
  }
`;
/**
 * getAllClientCustomers(
after: String
before: String
clientId: ID!
first: Int
last: Int
): GetAllPersonsResponse!
 */
const getAllClientCustomersQuery = gql`
  ${getAllPersonsResponseFragment}
  query GetAllClientCustomers(
    $after: String
    $before: String
    $clientId: ID!
    $first: Int
    $last: Int
    $search: String
  ) {
    getAllClientCustomers(
      after: $after
      before: $before
      clientId: $clientId
      first: $first
      last: $last
      search: $search
    ) {
      ...GetAllPersonsResponse
    }
  }
`;

/**
 * Query.getSpecificCustomerOrPerson(
personId: ID!
): Person!
 */
const getSpecificCustomerOrPersonQuery = gql`
  ${personFragment}
  query GetSpecificCustomerOrPerson($personId: ID!) {
    getSpecificCustomerOrPerson(personId: $personId) {
      ...Person
    }
  }
`;


export const useGetSpecificCustomerOrPersonQuery = (
  variables: GetSpecificCustomerOrPersonVariables
) =>
  useQuery<GetSpecificCustomerOrPerson, GetSpecificCustomerOrPersonVariables>(
    getSpecificCustomerOrPersonQuery,
    {
      variables,
    }
  );

export const useLazyGetSpecificCustomerOrPersonQuery = (
  variables: GetSpecificCustomerOrPersonVariables
) =>
  useLazyQuery<
    GetSpecificCustomerOrPerson,
    GetSpecificCustomerOrPersonVariables
  >(getSpecificCustomerOrPersonQuery, {
    variables,
  });

export const useGetAllClientCustomersQuery = (
  variables: GetAllClientCustomersVariables
) =>
  useQuery<GetAllClientCustomers, GetAllClientCustomersVariables>(
    getAllClientCustomersQuery,
    {
      variables,
    }
  );

export const useLazyGetAllClientCustomersQuery = (
  variables: GetAllClientCustomersVariables
) => {
  return   useLazyQuery<GetAllClientCustomers, GetAllClientCustomersVariables>(
    getAllClientCustomersQuery,
    {
      variables
    }
  );}