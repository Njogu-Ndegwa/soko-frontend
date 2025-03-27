/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssignCustomerToAgentInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: AssignCustomerToAgent
// ====================================================

export interface AssignCustomerToAgent_assignCustomerToAgent {
  __typename: "Success";
  message: string;
  status: number;
}

export interface AssignCustomerToAgent {
  assignCustomerToAgent: AssignCustomerToAgent_assignCustomerToAgent;
}

export interface AssignCustomerToAgentVariables {
  assignCustomerToAgentInput: AssignCustomerToAgentInput;
}
