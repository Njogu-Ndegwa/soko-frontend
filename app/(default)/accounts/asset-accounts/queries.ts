import { gql, useLazyQuery } from "@apollo/client";
import { GetAllAssetAccountsForClientVariables, GetAllAssetAccountsForClient } from "./types/GetAllAssetAccountsForClient";
/***
 * type Activity {
action: String!
datetime: DateTime!
postState: String!
preState: String!
}
 */
export const activityFragment = gql`
  fragment Activity on Activity {
    action
    amount
    datetime
    notes
  }
`;
/**
 * interface Payment {
amount: Float!
datetime: DateTime!
instruction: String!
}
 */
export const paymentFragment = gql`
  fragment Payment on Payment {
    amount
    datetime
    instruction
  }
`;

/**
 * type AssetAccount {
_id: ID!
asset: Item!
c2uRatio: Float!
createdAt: DateTime
credit: CreditAccount!
deleteAt: DateTime
deleteStatus: Boolean
payHistory: [Payment!]
paySchedule: [Payment!]
updatedAt: DateTime
user: Person!
}
 */
export const assetAccountFragment = gql`
  ${paymentFragment}
  ${activityFragment}
  fragment AssetAccount on AssetAccount {
    _id
    accountStage
    
    asset {
      _id
      sellerItemID
      oemItemID
      codeGenerator {
        _id
      }
      itemFleet {
        _id
        fleetName
      }
    }
    createdAt
    deleteAt
    deleteStatus
    manager {
      _id

    }
    paymentPlan {
      planName
      planDescription
      planDetails {
        pName
        pValue
      }
    }
    meta{
      name
      value
    }
    paySchedule {
      ...Payment
    }
    credit {
      accountStatus
      activities {
        ...Activity
      }
      balance
      currency
      owner {
        _id
        name
        contact {
          phone
        }
        address {
          street
          city
          srpc
          country
          postcode
          addressLocation {
            addressLatitude
            addressLongitude
          }
        }
      }
    }
    updatedAt
    user {
      _id
    }
  }
`;

export const assetAccountFullFragment = gql`
  ${paymentFragment}
  ${activityFragment}
  fragment AssetAccount on AssetAccount {
    _id
    accountStage
    asset {
      _id
      sellerItemID
      oemItemID
      codeGenerator {
        _id
        codeHistory {
          _id
          actionScope
          actorName
          codeDays
          codeDecString
          codeHexString
          codeNumber
          codeType
          createdAt
          deleteAt
          deleteStatus
          description
          profile
          type
          updatedAt
        }
      }
      itemFleet {
        _id
        fleetName
      }
    }
    paymentPlan {
      planName
      planDescription
      planDetails {
        pName
        pValue
      }
    }
    createdAt
    deleteAt
    deleteStatus
    manager {
      _id
    }
    paySchedule {
      ...Payment
    }
    credit {
      accountStatus
      activities {
        ...Activity
      }
      balance
      currency
      owner {
        _id
        name
        contact {
          phone
        }
        address {
          street
          city
          srpc
          country
          postcode
          addressLocation {
            addressLatitude
            addressLongitude
          }
        }
      }
    }
    updatedAt
    user {
      _id
    }
  }
`;
/**
 * type AssetAccountEdge {
cursor: String
node: AssetAccount
}
 */
export const assetAccountEdgeFragment = gql`
  ${assetAccountFragment}
  fragment AssetAccountEdge on AssetAccountEdge {
    cursor
    node {
      ...AssetAccount
    }
  }
`;
/**
 * type AssetAccountPageInfo {
endCursor: String
hasNextPage: Boolean!
hasPreviousPage: Boolean!
startCursor: String
}
 */
export const assetAccountPageInfoFragment = gql`
  fragment AssetAccountPageInfo on AssetAccountPageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
/**
 * type AssetAccountConnection {
edges: [AssetAccountEdge!]
pageInfo: AssetAccountPageInfo
}
 */
export const assetAccountConnectionFragment = gql`
  ${assetAccountPageInfoFragment}
  ${assetAccountEdgeFragment}
  fragment AssetAccountConnection on AssetAccountConnection {
    edges {
      ...AssetAccountEdge
    }
    pageInfo {
      ...AssetAccountPageInfo
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
/**]
 * type GetAllAssetAccountsResponse {
page: AssetAccountConnection!
pageData: PageData
}
 */
export const getAllAssetAccountsResponseFragment = gql`
  ${assetAccountConnectionFragment}
  ${pageDataFragment}
  fragment GetAllAssetAccountsResponse on GetAllAssetAccountsResponse {
    page {
      ...AssetAccountConnection
    }
    pageData {
      ...PageData
    }
  }
`;

/**
 * getAllAssetAccountsForClient(
clientId: ID!
before: String
after: String
first: Int
last: Int
): GetAllAssetAccountsResponse!
 */
const getAllAssetAccountsForClientQuery = gql`
  ${getAllAssetAccountsResponseFragment}
  query GetAllAssetAccountsForClient(
    $clientId: ID!
    $before: String
    $after: String
    $first: Int
    $last: Int
    $search: String
  ) {
    getAllAssetAccountsForClient(
      clientId: $clientId
      before: $before
      after: $after
      first: $first
      last: $last
      search: $search
    ) {
      ...GetAllAssetAccountsResponse
    }
  }
`;


export const useLazygetAllAssetAccountsForClientQuery = (
  variables: GetAllAssetAccountsForClientVariables
) =>
  { 
  return useLazyQuery<
    GetAllAssetAccountsForClient,
    GetAllAssetAccountsForClientVariables
  >(getAllAssetAccountsForClientQuery, {
    variables
  })}