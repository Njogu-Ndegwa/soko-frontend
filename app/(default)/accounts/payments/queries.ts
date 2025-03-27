import { gql, useLazyQuery, useQuery } from '@apollo/client';
// import {
//   GetAllAssetAccountActivities,
//   GetAllAssetAccountActivitiesVariables
// } from './types/GetAllAssetAccountActivities';
// import {
//   GetAllAssetAccountActivitiesCreditAmount,
//   GetAllAssetAccountActivitiesCreditAmountVariables
// } from './types/GetAllAssetAccountActivitiesCreditAmount'
// import { handleGQLErrors } from 'utils/gqlErrors';
// import useNotifier from 'hooks/useNotifier';
import { getAllAssetAccountsResponseFragment } from "../asset-accounts/queries"
// import {
//   GetCodeEventsByCodeGeneratorIds,
//   GetCodeEventsByCodeGeneratorIdsVariables
// } from './types/GetCodeEventsByCodeGeneratorIds';
import { assetAccountFragment } from '../asset-accounts/queries';
// import { 
//   DownloadAllAssetAccountActivities, 
//   DownloadAllAssetAccountActivitiesVariables 
// } from './types/downloadAllAssetAccountActivities';
// import { codeEventFragment } from 'apps/things/app/codeEvent/queries';

/**
 * type CodeEvent {
_id: ID!
deleteStatus: Boolean
deleteAt: DateTime
createdAt: DateTime
updatedAt: DateTime
type: ActorTypes!
actionScope: ActionScope!
actorName: String!
profile: String
codeType: CodeTypes!
codeDays: Int!
codeGenerator: CodeGenerator!
codeHexString: String!
codeDecString: String!
description: String
}
 */
export const codeEventFragment = gql`
  fragment CodeEvent on CodeEvent {
    _id
    deleteStatus
    deleteAt
    createdAt
    updatedAt
    triggers
    type
    actionScope
    actorName
    profile
    codeType
    codeDays
    codeNumber
    codeGenerator {
      _id
      hashIndex
      hashTop
      codeCount
    }
    codeHexString
    codeDecString
    description
    hashIndex
    hashTop
    hashRoot
    codeCount
    userWhoCausedTheChange
    typeOfChangeChange
    descriptionOfChangeChange
  }
`;

/**
 * getAllAssetAccountActivities(
query: String
before: String
after: String
first: Int
last: Int
): GetAllAssetAccountsResponse!
 */
export const getAllAssetAccountActivitiesQuery = gql`
  ${getAllAssetAccountsResponseFragment}
  query GetAllAssetAccountActivities(
    $query: String
    $before: String
    $after: String
    $first: Int
    $last: Int
    $search: String
  ) {
    getAllAssetAccountActivities(
      search: $search
      query: $query
      before: $before
      after: $after
      first: $first
      last: $last
    ) {
      ...GetAllAssetAccountsResponse
    }
  }
`;

/**
 * Query.getAllAssetAccountActivitiesCreditAmount(
search: String
query: String
): Float!
 */
export const getAllAssetAccountActivitiesCreditAmountQuery = gql`
  query GetAllAssetAccountActivitiesCreditAmount(
    $query: String
    $search: String
  ) {
    getAllAssetAccountActivitiesCreditAmount(
      search: $search
      query: $query
    )
  }
`;

/**
 * getCodeEventsByCodeGeneratorIds(
ids: [String!]!
): [CodeEvent!]!
 */
export const getCodeEventsByCodeGeneratorIdsQuery = gql`
${codeEventFragment}
  query GetCodeEventsByCodeGeneratorIds(
    $ids: [String!]!
  ) {
    getCodeEventsByCodeGeneratorIds(
      ids: $ids
    ) {
      ...CodeEvent
    }
  }
`

/**
 *downloadAllAssetAccountActivities(
search: String
query: String
): [AssetAccount!]!
 */

export const downloadAllAssetAccountActivitiesQuery = gql`
${assetAccountFragment}
query DownloadAllAssetAccountActivities($query: String, $search: String) {
  downloadAllAssetAccountActivities(
    search: $search
    query: $query
) {
    ...AssetAccount
  }
}
`


export const DOWNLOAD_CREDIT_ACTIVITIES = gql`
  query downloadAllAssetAccountActivities_v2($query: String) {
    downloadAllAssetAccountActivities_v2(query: $query) {
      totalRecords
      jobId
      s3Url
      message
    }
  }
`;

export const CHECK_DOWNLOAD_PROGRESS = gql`
  query checkDownloadProgress($jobId: String!) {
    checkDownloadProgress(jobId: $jobId) {
      downloads
      status
      total
    }
  }
`;