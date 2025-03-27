import { gql, useLazyQuery } from "@apollo/client";
import { 
  GetAllAssetAccountsForClientVariables, 
  GetAllAssetAccountsForClient } from "./types/GetAllAssetAccountsForClient";

import { 
  GetSpecificAssetAccount, 
  GetSpecificAssetAccountVariables } from "./types/GetSpecificAssetAccount";
import { GetSpecificDistributorVariables, GetSpecificDistributor } from "./types/GetSpecificDistributor";
  
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

/**
 * 
 * @param variables getSpecificAssetAccount(
id: ID!
): AssetAccount!
 * @returns 
 */
const getSpecificAssetAccountQuery = gql`
  ${assetAccountFragment}
  query GetSpecificAssetAccount($id: ID!) {
    getSpecificAssetAccount(id: $id) {
      ...AssetAccount
    }
  }
`;

/**
 * type Distributor {
_id: ID!
activeSubRolePermission: PermissionInput
authenticationInstance: AuthenticationInstance!
authenticationSubInstance: AuthenticationSubInstance!
createdAt: DateTime
deleteAt: DateTime
deleteStatus: Boolean
description: String
itemFleet: [ItemFleet!]!
itemSKU: [ItemSKU!]
name: String!
orgAddress: Address!
orgContactPerson: Person
role: Roles!
subRolePermissions: SubRolePermissions!
type: OrgTypes!
updatedAt: DateTime
}
 */
const distributorFragment = gql`
  fragment Distributor on Distributor {
    _id
    activeSubRolePermission
    createdAt
    deleteAt
    deleteStatus
    description
    type
    updatedAt
    orgContactPerson {
      _id
      name
      address {
        city
        country
        postcode
        srpc
        street
        unit
        addressLocation {
          addressLatitude
          addressLongitude
        }
      }
      contact {
        email
        phone
        social
      }
    }
  }
`;
/**
 * type DistributorEdge {
cursor: String
node: Distributor
}
 */
const distributorEdgeFragment = gql`
  ${distributorFragment}
  fragment DistributorEdge on DistributorEdge {
    cursor
    node {
      ...Distributor
    }
  }
`;
/**
 * type DistributorPageInfo {
endCursor: String
hasNextPage: Boolean!
hasPreviousPage: Boolean!
startCursor: String
}
 */
const distributorPageInfoFragment = gql`
  fragment DistributorPageInfo on DistributorPageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
/**
 * type DistributorConnection {
edges: [DistributorEdge!]
pageInfo: DistributorPageInfo
}
 */
const distributorConnectionFragment = gql`
  ${distributorEdgeFragment}
  ${distributorPageInfoFragment}
  fragment DistributorConnection on DistributorConnection {
    edges {
      ...DistributorEdge
    }
    pageInfo {
      ...DistributorPageInfo
    }
  }
`;
/**
 * type GetAllDistributorsResponse {
page: DistributorConnection!
pageData: PageData
}
 */
const getAllDistributorsResponseFragment = gql`
  ${distributorConnectionFragment}
  ${pageDataFragment}
  fragment GetAllDistributorsResponse on GetAllDistributorsResponse {
    page {
      ...DistributorConnection
    }

    pageData {
      ...PageData
    }
  }
`;
/**
 * getAllDistributors(
after: String
before: String
first: Int
last: Int
): GetAllDistributorsResponse!
 */
const getAllDistributorsQuery = gql`
  ${getAllDistributorsResponseFragment}
  query GetAllDistributors(
    $after: String
    $before: String
    $first: Int
    $last: Int
    $search: String
  ) {
    getAllDistributors(
      after: $after
      before: $before
      first: $first
      last: $last
      search: $search
    ) {
      ...GetAllDistributorsResponse
    }
  }
`;

/**
 * 
Query.getSpecificDistributor(
id: ID!
): Distributor
 */
const getSpecificDistributorQuery = gql`
  ${distributorFragment}
  query GetSpecificDistributor($id: ID!) {
    getSpecificDistributor(id: $id) {
      ...Distributor
    }
  }
`;

/**
 * 
type DistributorSetting {
_id: ID!
deleteStatus: Boolean
deleteAt: DateTime
createdAt: DateTime
updatedAt: DateTime
freeCodeCount: Int
resetCodeCount: Int
dayCodeCountLimit: Int
totalCodeCountLimit: Int
codeGenInterval: Int
}
 */
const distributorSettingFragment = gql ` 
fragment DistributorSetting on DistributorSetting {
  _id
  deleteStatus
  deleteAt
  createdAt
  updatedAt
  freeCodeCount
  resetCodeCount
  dayCodeCountLimit
  totalCodeCountLimit
  codeGenInterval
  maxCreditStackDays
  maxCreditStackCodeEvents

}
`

/**
 * 
getSpecificDistributorSetting(
distributorId: String!
): DistributorSetting!
 */

const getSpecificDistributorSettingQuery = gql `
  ${distributorSettingFragment}
query GetSpecificDistributorSetting($id: String!) {
  getSpecificDistributorSetting(distributorId: $id) {
    ...DistributorSetting
  }
}
`


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

  export const useLazygetSpecificAssetAccountsForClientQuery = (
    variables: GetSpecificAssetAccountVariables
  ) =>
    { 
    return useLazyQuery<
      GetSpecificAssetAccount,
      GetSpecificAssetAccountVariables
    >(getSpecificAssetAccountQuery, {
      variables
    })}


export const useLazyGetSpecificDistributorQuery = (
      variables: GetSpecificDistributorVariables
    ) =>
      useLazyQuery<GetSpecificDistributor, GetSpecificDistributorVariables>(
        getSpecificDistributorQuery,
        {
          variables,
        }
      );