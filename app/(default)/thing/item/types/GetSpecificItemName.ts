/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSpecificItemName
// ====================================================

export interface GetSpecificItemName_getSpecificItem {
  __typename: "Item";
  _id: string;
  /**
   * oemItemID cannot be null.  It must be provided in a conformal format PROD+YYMM+000000
   */
  oemItemID: string;
}

export interface GetSpecificItemName {
  getSpecificItem: GetSpecificItemName_getSpecificItem;
}

export interface GetSpecificItemNameVariables {
  itemId: string;
}
