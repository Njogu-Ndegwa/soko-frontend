/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllClientTotalItemsInItemFleet
// ====================================================

export interface GetAllClientTotalItemsInItemFleet_getAllClientItemsInItemFleet_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllClientTotalItemsInItemFleet_getAllClientItemsInItemFleet {
  __typename: "GetAllItemsResponse";
  pageData: GetAllClientTotalItemsInItemFleet_getAllClientItemsInItemFleet_pageData | null;
}

export interface GetAllClientTotalItemsInItemFleet {
  getAllClientItemsInItemFleet: GetAllClientTotalItemsInItemFleet_getAllClientItemsInItemFleet;
}

export interface GetAllClientTotalItemsInItemFleetVariables {
  clientId: string;
  itemFleetId: string;
}
