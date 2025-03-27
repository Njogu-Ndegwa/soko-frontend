import { useLazyQuery, useQuery } from "@apollo/client";
import gql from "graphql-tag";
// import clientSimulator from "utils/clientSimulator";
// import { handleGQLErrors } from "utils/gqlErrors";
// import {
//   IGetAllClientItemsInItemFleet,
//   IGetAllClientItemsInItemFleetVariables,
// } from "./types/IGetAllClientItemsInItemFleet";
// import { GetAllItems, GetAllItemsVariables } from "./types/GetAllItems";
import {
  GetSpecificItem,
  GetSpecificItemVariables,
} from "./types/GetSpecificItem";
import { GetAllClientItems, GetAllClientItemsVariables} from "./types/GetAllClientItems"
// import {
//   GetAllClientItems,
//   GetAllClientItemsVariables,
// } from "./types/GetAllClientItems";
// import {
//   GetAllItemsCount,
//   GetAllItemsCountVariables,
// } from "./types/GetAllItemsCount";
// import useNotifier from "hooks/useNotifier";

/**
 * type ItemBatch {
_id: ID!
deleteStatus: Boolean
deleteAt: DateTime
createdAt: DateTime
updatedAt: DateTime
type: ActorTypes!
actionScope: ActionScope!
actorName: String!
profile: String!
batchNumber: String!
batchDate: DateTime!
description: String!
batchState: BatchState!
}
 */

export const itemBatchFragmentWithoutProgress = gql`
  fragment ItemBatch on ItemBatch {
    _id
    deleteStatus
    deleteAt
    createdAt
    updatedAt
    type
    actionScope
    actorName
    profile
    batchNumber
    batchDate
    description
    batchState
    starting_code
    secret_key
    code_gen_type
  }
`;

/**
 * type Item {
_id: ID!
deleteStatus: Boolean
deleteAt: DateTime
createdAt: DateTime
updatedAt: DateTime
type: ActorTypes!
actionScope: ActionScope!
actorName: String!
profile: String!
idType: String!
idString: String!
description: String!
creationDate: DateTime!
itemOEM_ID: String!
itemPAYG_ID: String!
itemSKU: ItemSKU!
itemBatch: ItemBatch!
itemFirmware: ItemFirmware!
lifeCycle: String
codeGenerator: CodeGenerator

 */
export const itemFragment = gql`
  ${itemBatchFragmentWithoutProgress}
  fragment Item on Item {
    _id
    deleteStatus
    deleteAt
    createdAt
    updatedAt
    type
    actionScope
    actorName
    profile
    idType
    idString
    description
    creationDate
    oemID
    oemItemID
    sellerID
    sellerItemID
    assetAccount {
      _id
      credit {
        owner {
          _id
          name
          contact {
            phone
          }
        }
      }
      paySchedule {
        amount
        datetime
        instruction
      }
    }
    itemFleet {
      _id
      fleetName
    }
    itemBatch {
      ...ItemBatch
    }
    itemFirmware {
      _id
      version
      codeSystem
    }
    lifeCycle
    codeGenerator {
      _id
      deleteStatus
      deleteAt
      createdAt
      updatedAt
      type
      actionScope
      actorName
      profile
      hashRoot
      hashTop
      hashTopInitial
      codeCount
      hashIndex
      codeReversalCount
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
 * type ItemEdge {
cursor: String
node: Item
}
 */
const itemEdgeFragment = gql`
  ${itemFragment}
  fragment ItemEdge on ItemEdge {
    cursor
    node {
      ...Item
    }
  }
`;
/**
 * type ItemPageInfo {
startCursor: String
endCursor: String
hasPreviousPage: Boolean!
hasNextPage: Boolean!
}
 */
const itemPageInfoFragment = gql`
  fragment ItemPageInfo on ItemPageInfo {
    startCursor
    endCursor
    hasPreviousPage
    hasNextPage
  }
`;
/**
 * type ItemConnection {
edges: [ItemEdge!]
pageInfo: ItemPageInfo
}
 */
const itemConnectionFragment = gql`
  ${itemEdgeFragment}
  ${itemPageInfoFragment}
  fragment ItemConnection on ItemConnection {
    edges {
      ...ItemEdge
    }
    pageInfo {
      ...ItemPageInfo
    }
  }
`;

/**
 * type GetAllItemsResponse {
page: ItemConnection!
pageData: PageData
}
 */
export const getAllItemsResponseFragment = gql`
  ${itemConnectionFragment}
  ${pageDataFragment}
  fragment GetAllItemsResponse on GetAllItemsResponse {
    page {
      ...ItemConnection
    }
    pageData {
      ...PageData
    }
  }
`;
/**
 * getAllItems(
before: String
after: String
first: Int
last: Int
): GetAllItemsResponse!
 */
const getAllItemsQuery = gql`
  ${getAllItemsResponseFragment}
  query GetAllItems(
    $queryorder: QueryOrder!
    $before: String
    $after: String
    $first: Int
    $last: Int
    $search: String
  ) {
    getAllItems(
      queryorder: $queryorder
      before: $before
      after: $after
      first: $first
      last: $last
      search: $search
    ) {
      ...GetAllItemsResponse
    }
  }
`;

/**
 * getAllClientItemsInItemFleet(
after: String
before: String
first: Int
getAllClientItemsInItemFleet: GetAllClientItemsInItemFleet!
last: Int
): GetAllItemsResponse!
 */
const getAllClientItemsInItemFleetQuery = gql`
  ${getAllItemsResponseFragment}
  query IGetAllClientItemsInItemFleet(
    $after: String
    $before: String
    $first: Int
    $igetAllClientItemsInItemFleet: GetAllClientItemsInItemFleet!
    $last: Int
  ) {
    getAllClientItemsInItemFleet(
      after: $after
      before: $before
      first: $first
      getAllClientItemsInItemFleet: $igetAllClientItemsInItemFleet
      last: $last
    ) {
      ...GetAllItemsResponse
    }
  }
`;

/**
 * Query.getAllClientItems(
after: String
before: String
clientId: ID!
first: Int
last: Int
): GetAllItemsResponse!
 */
const getAllClientItemsQuery = gql`
  ${getAllItemsResponseFragment}
  query GetAllClientItems(
    $after: String
    $before: String
    $clientId: ID!
    $first: Int
    $last: Int
    $assetaccount: Boolean!
    $search: String
    $searchByOemItemId: String
    $queryorder: QueryOrder!
    $isOpenTokenSimulator: Boolean
  ) {
    getAllClientItems(
      after: $after
      before: $before
      clientId: $clientId
      first: $first
      last: $last
      assetaccount: $assetaccount
      search: $search
      searchByOemItemId: $searchByOemItemId
      queryorder: $queryorder
      pagination: CURSOR
      isOpenTokenSimulator: $isOpenTokenSimulator
    ) {
      ...GetAllItemsResponse
    }
  }
`;
/**
 * 
 * getSpecificItem(
id: String!
): Item!
 */

export const getSpecificItemQuery = gql`
  ${itemFragment}
  query GetSpecificItem($itemId: ID!) {
    getSpecificItem(itemId: $itemId) {
      ...Item
    }
  }
`;

export const getSpecificItemNameQuery = gql`
  query GetSpecificItemName($itemId: ID!) {
    getSpecificItem(itemId: $itemId) {
      _id
      oemItemID
    }
  }
`;

export const useLazyGetAllClientItemsQuery = (
  variables: GetAllClientItemsVariables,
) => {
  return useLazyQuery<GetAllClientItems, GetAllClientItemsVariables>(
    getAllClientItemsQuery,
    {
      variables
    }
  );
};

// export const useGetAllClientItemsInItemFleetQuery = (
//   variables: IGetAllClientItemsInItemFleetVariables
// ) => {
//   const notify = useNotifier();
//   return useQuery<
//     IGetAllClientItemsInItemFleet,
//     IGetAllClientItemsInItemFleetVariables
//   >(getAllClientItemsInItemFleetQuery, {
//     variables,
//     client: clientSimulator,
//     onError: (err) => {
//       handleGQLErrors(notify, err);
//     },
//   });
// };

// export const useGetAllItemsQuery = (variables: GetAllItemsVariables) => {
//   const notify = useNotifier();
//   return useQuery<GetAllItems, GetAllItemsVariables>(getAllItemsQuery, {
//     client: clientSimulator,
//     variables,
//     onError: (err) => {
//       handleGQLErrors(notify, err);
//     },
//   });
// };

// export const useLazyGetAllItemsQuery = (variables: GetAllItemsVariables) => {
//   const notify = useNotifier();
//   return useLazyQuery<GetAllItems, GetAllItemsVariables>(getAllItemsQuery, {
//     client: clientSimulator,
//     variables,
//     onError: (err) => {
//       handleGQLErrors(notify, err);
//     },
//   });
// };

// export const useGetSpecificItemNameQuery = (
//   variables: GetSpecificItemVariables
// ) => {
//   return useLazyQuery<GetSpecificItem, GetSpecificItemVariables>(
//     getSpecificItemNameQuery,
//     {
//       client: clientSimulator,
//       variables,
//       onError: (error) => {
//         handleGQLErrors(() => {}, error);
//       },
//     }
//   );
// };
// export const useGetSpecificItemQuery = (variables: GetSpecificItemVariables) =>
//   useLazyQuery<GetSpecificItem, GetSpecificItemVariables>(
//     getSpecificItemQuery,
//     {
//       client: clientSimulator,
//       variables,
//       onError: (error) => {
//         handleGQLErrors(() => {}, error);
//       },
//     }
//   );

// /**
//    * {
//   getAllItems(first: 1, queryorder: DESC) {
//     pageData {
//       count
//     }
//   }
// }
//    */
// const getAllItemsCountQuery = gql`
//   query GetAllItemsCount($first: Int, $queryorder: QueryOrder!) {
//     getAllItems(first: $first, queryorder: $queryorder) {
//       pageData {
//         count
//       }
//     }
//   }
// `;

// export const useLazyGetAllItemsCountQuery = (
//   variables: GetAllItemsCountVariables
// ) => {
//   const notify = useNotifier();
//   return useLazyQuery<GetAllItemsCount, GetAllItemsCountVariables>(
//     getAllItemsCountQuery,
//     {
//       variables,
//       client: clientSimulator,
//       onError: (error) => {
//         handleGQLErrors(notify, error);
//       },
//     }
//   );
// };
