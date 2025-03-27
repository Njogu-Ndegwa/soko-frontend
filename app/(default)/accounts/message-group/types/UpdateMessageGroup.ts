/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateMessageGroupInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateMessageGroup
// ====================================================

export interface UpdateMessageGroup_updateMessageGroup {
  __typename: "MessageGroup";
  _id: string;
  name: string;
}

export interface UpdateMessageGroup {
  updateMessageGroup: UpdateMessageGroup_updateMessageGroup;
}

export interface UpdateMessageGroupVariables {
  updateMessageGroupInput: UpdateMessageGroupInput;
  id: string;
}
