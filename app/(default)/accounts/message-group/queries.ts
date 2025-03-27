import { gql, useLazyQuery, useQuery } from "@apollo/client";
import {
  GetAllMessageGroups,
  GetAllMessageGroupsVariables,
} from "./types/GetAllMessageGroups";
// import clientSimulator from 'utils/clientSimulator';
// import {
//   GetAllMessageGroups,
//   GetAllMessageGroupsVariables
// } from './types/GetAllMessageGroups';

/**
 * type MessageGroup {
_id: ID!
deleteStatus: Boolean
deleteAt: DateTime
createdAt: DateTime
updatedAt: DateTime
name: String!
description: String!
personIds: [String!]
distributor: Distributor!
persons: [Person!]!
}
 */

export const messageGroupFragment = gql`
  fragment MessageGroup on MessageGroup {
    name
    description
    persons {
      pageData {
        count
      }
    }
    createdAt
    _id
  }
`;

/**
 * type MessageGroupEdge {
cursor: String
node: MessageGroup
}
 */
export const messageGroupEdgeFragment = gql`
  ${messageGroupFragment}
  fragment MessageGroupEdge on MessageGroupEdge {
    cursor
    node {
      ...MessageGroup
    }
  }
`;
/**
 * type MessageGroupPageInfo {
startCursor: String
endCursor: String
hasPreviousPage: Boolean!
hasNextPage: Boolean!
}
 */
export const messageGroupPageInfoFragment = gql`
  fragment MessageGroupPageInfo on MessageGroupPageInfo {
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
  }
`;

/**
 * type MessageGroupConnection {
edges: [MessageGroupEdge!]
pageInfo: MessageGroupPageInfo
}
 */

export const messageGroupConnectionFragment = gql`
  ${messageGroupEdgeFragment}
  ${messageGroupPageInfoFragment}
  fragment MessageGroupConnection on MessageGroupConnection {
    edges {
      ...MessageGroupEdge
    }
    pageInfo {
      ...MessageGroupPageInfo
    }
  }
`;

/**
 * type GetAllMessageGroupResponse {
page: MessageGroupConnection!
pageData: PageData
}
 */
export const getAllMessageGroupResponseFragment = gql`
  ${messageGroupConnectionFragment}
  ${pageDataFragment}
  fragment GetAllMessageGroupResponse on GetAllMessageGroupResponse {
    page {
      ...MessageGroupConnection
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
export const getAllMessageGroupsQuery = gql`
  ${getAllMessageGroupResponseFragment}
  query GetAllMessageGroups(
    $before: String
    $after: String
    $first: Int
    $last: Int
    $search: String
  ) {
    getAllMessageGroups(
      before: $before
      after: $after
      first: $first
      last: $last
      search: $search
    ) {
      ...GetAllMessageGroupResponse
    }
  }
`;

export const useGetAllMessageGroups = () => {
  return useQuery<GetAllMessageGroups, GetAllMessageGroupsVariables>(
    getAllMessageGroupsQuery
  );
};

export const useLazyGetAllMessageGroups = () => {
  return useLazyQuery<GetAllMessageGroups, GetAllMessageGroupsVariables>(
    getAllMessageGroupsQuery
  );
};
