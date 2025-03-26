/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountActions } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: Activity
// ====================================================

export interface Activity {
  __typename: "Activity";
  action: AccountActions;
  amount: number | null;
  datetime: any;
  notes: string | null;
}
