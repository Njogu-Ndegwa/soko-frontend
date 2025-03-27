/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ReassignFleetItemsFromItemFleet
// ====================================================

export interface ReassignFleetItemsFromItemFleet_reassignFleetItemsFromItemFleet {
  __typename: "Success";
  status: number;
  message: string;
}

export interface ReassignFleetItemsFromItemFleet {
  reassignFleetItemsFromItemFleet: ReassignFleetItemsFromItemFleet_reassignFleetItemsFromItemFleet;
}

export interface ReassignFleetItemsFromItemFleetVariables {
  oldItemFleetId: string;
  newItemFleetId: string;
}
