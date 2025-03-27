/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: checkDownloadProgress
// ====================================================

export interface checkDownloadProgress_checkDownloadProgress {
  __typename: "DownloadProgress";
  downloads: number;
  status: string;
  total: number;
}

export interface checkDownloadProgress {
  checkDownloadProgress: checkDownloadProgress_checkDownloadProgress;
}

export interface checkDownloadProgressVariables {
  jobId: string;
}
