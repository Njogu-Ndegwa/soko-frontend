import { useLazyQuery, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import {
  GetAllItemFleets,
  GetAllItemFleetsVariables,
} from "./types/GetAllItemFleets";
import {
  GetItemFleetsForClient,
  GetItemFleetsForClientVariables,
} from "./types/GetItemFleetsForClient";
// import useNotifier from "hooks/useNotifier";
// import clientSimulator from "utils/clientSimulator";
// import { handleGQLErrors } from "utils/gqlErrors";
// import {
//   GetAllItemFleets,
//   GetAllItemFleetsVariables,
// } from "./types/GetAllItemFleets";
// import {
//   GetItemFleetsForClient,
//   GetItemFleetsForClientVariables,
// } from "./types/GetItemFleetsForClient";
// import {
//   GetSpecificItemFleet,
//   GetSpecificItemFleetVariables,
// } from "./types/GetSpecificItemFleet";
// import {
//   GetAllClientTotalItemsInItemFleet,
//   GetAllClientTotalItemsInItemFleetVariables,
// } from "./types/GetAllClientTotalItemsInItemFleet";

/**
 * type ItemFleet {
_id: ID!
actionScope: ActionScope!
actorName: String!
assignDate: DateTime!
createdAt: DateTime
deleteAt: DateTime
deleteStatus: Boolean
description: String!
distributor: Distributor!
fleetName: String!
itemList: [Item!]!
managerName: String!
profile: String
type: ActorTypes!
updatedAt: DateTime
}
 */
export const itemFleetFragment = gql`
  fragment ItemFleet on ItemFleet {
    _id
    actionScope
    actorName
    assignDate
    createdAt
    deleteAt
    deleteStatus
    description
    freeCodeCount
    resetCodeCount
    dayCodeCountLimit
    totalCodeCountLimit
    codeGenInterval
    maxCreditStackDays
    maxCreditStackCodeEvents
    disableFreeCode
    daysToCheckDuration
    minimumDayCodesGenerated
    disableResetCodeCount
    disableDayCodeCountLimit
    disableTotalCodeCountLimit
    disableCodeGenInterval
    disableMaxCreditStackDays
    disableMaxCreditStackCodeEvents
    disableDaysToCheckDuration
    disableMinimumDayCodesGenerated
    distributor {
      _id
      orgContactPerson {
        _id
        name
      }
    }
    fleetName
    itemList {
      _id
      description
      oemItemID
      oemID
    }
    profile
    type
    updatedAt
  }
`;

/**
 * type ItemFleetEdge {
cursor: String
node: ItemFleet
}
 */
const itemFleetEdgeFragment = gql`
  ${itemFleetFragment}
  fragment ItemFleetEdge on ItemFleetEdge {
    cursor
    node {
      ...ItemFleet
    }
  }
`;
/**
 * type ItemFleetPageInfo {
endCursor: String
hasNextPage: Boolean!
hasPreviousPage: Boolean!
startCursor: String
}
 */
const itemFleetPageInfoFragment = gql`
  fragment ItemFleetPageInfo on ItemFleetPageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;

/**
 * type ItemFleetConnection {
edges: [ItemFleetEdge!]
pageInfo: ItemFleetPageInfo
}
 */
const itemFleetConnectionFragment = gql`
  ${itemFleetEdgeFragment}
  ${itemFleetPageInfoFragment}
  fragment ItemFleetConnection on ItemFleetConnection {
    edges {
      ...ItemFleetEdge
    }
    pageInfo {
      ...ItemFleetPageInfo
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
export const pageDataFragment = gql`
  fragment PageData on PageData {
    count
    limit
    offset
  }
`;
/**
 * type GetAllItemFleetsResponse {
page: ItemFleetConnection!
pageData: PageData
}
 */
const getAllItemFleetsResponseFragment = gql`
  ${itemFleetConnectionFragment}
  ${pageDataFragment}
  fragment GetAllItemFleetsResponse on GetAllItemFleetsResponse {
    page {
      ...ItemFleetConnection
    }
    pageData {
      ...PageData
    }
  }
`;
/**
 * getAllItemFleets(
after: String
before: String
first: Int
last: Int
): GetAllItemFleetsResponse!
 */
const getAllItemFleetsQuery = gql`
  ${getAllItemFleetsResponseFragment}
  query GetAllItemFleets(
    $after: String
    $before: String
    $first: Int
    $last: Int
    $search: String
  ) {
    getAllItemFleets(
      after: $after
      before: $before
      first: $first
      last: $last
      search: $search
    ) {
      ...GetAllItemFleetsResponse
    }
  }
`;

/**
 * getSpecificItemFleet(
id: String!
): ItemFleet!
 */
const getSpecificItemFleetQuery = gql`
  ${itemFleetFragment}
  query GetSpecificItemFleet($id: String!) {
    getSpecificItemFleet(id: $id) {
      ...ItemFleet
    }
  }
`;

/**
 * 
 getItemFleetsForClient(
after: String
before: String
clientId: String!
first: Int
last: Int
): GetAllItemFleetsResponse!
 */
const getItemFleetsForClientQuery = gql`
  ${getAllItemFleetsResponseFragment}
  query GetItemFleetsForClient(
    $after: String
    $before: String
    $clientId: String!
    $first: Int
    $last: Int
    $search: String
  ) {
    getItemFleetsForClient(
      after: $after
      before: $before
      clientId: $clientId
      first: $first
      last: $last
      search: $search
    ) {
      ...GetAllItemFleetsResponse
    }
  }
`;

/**
   * 
   * {
  getAllClientItemsInItemFleet(
    first: 100
    getAllClientItemsInItemFleet: {
      clientId: "6284c72732409a7f188c7290"
      itemFleetId: "6284c729812d32766783169a"
    }
  ) {
    pageData {
      count
    }
  }
}
   */
const getTotalItemsInFleetQuery = gql`
  query GetAllClientTotalItemsInItemFleet($clientId: ID!, $itemFleetId: ID!) {
    getAllClientItemsInItemFleet(
      first: 100
      getAllClientItemsInItemFleet: {
        clientId: $clientId
        itemFleetId: $itemFleetId
      }
    ) {
      pageData {
        count
      }
    }
  }
`;

export const useLazyGetItemFleetsForClientQuery = (
  variables: GetItemFleetsForClientVariables
) => {
  return useLazyQuery<GetItemFleetsForClient, GetItemFleetsForClientVariables>(
    getItemFleetsForClientQuery,
    { variables }
  );
};
