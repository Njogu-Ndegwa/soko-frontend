/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReassignItemsFromItemFleetInputDto } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: ReAssignItemsFromItemFleet
// ====================================================

export interface ReAssignItemsFromItemFleet_reassignItemsFromItemFleet {
  __typename: "Success";
  status: number;
  message: string;
}

export interface ReAssignItemsFromItemFleet {
  reassignItemsFromItemFleet: ReAssignItemsFromItemFleet_reassignItemsFromItemFleet;
}

export interface ReAssignItemsFromItemFleetVariables {
  itemFleetId: string;
  items: ReassignItemsFromItemFleetInputDto[];
}
