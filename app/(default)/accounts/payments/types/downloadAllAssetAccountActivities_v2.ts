/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: downloadAllAssetAccountActivities_v2
// ====================================================

export interface downloadAllAssetAccountActivities_v2_downloadAllAssetAccountActivities_v2 {
  __typename: "AssetAccountSearchResponse";
  totalRecords: number;
  jobId: string;
  s3Url: string;
  message: string;
}

export interface downloadAllAssetAccountActivities_v2 {
  downloadAllAssetAccountActivities_v2: downloadAllAssetAccountActivities_v2_downloadAllAssetAccountActivities_v2;
}

export interface downloadAllAssetAccountActivities_v2Variables {
  query?: string | null;
}
