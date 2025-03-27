/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssignItemToAgentInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: AssignItemToAgent
// ====================================================

export interface AssignItemToAgent_assignItemToAgent {
  __typename: "Success";
  message: string;
  status: number;
}

export interface AssignItemToAgent {
  assignItemToAgent: AssignItemToAgent_assignItemToAgent;
}

export interface AssignItemToAgentVariables {
  assignItemToAgentInput: AssignItemToAgentInput;
}
