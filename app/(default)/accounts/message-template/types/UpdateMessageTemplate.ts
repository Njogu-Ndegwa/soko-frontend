/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateMessageTemplateInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateMessageTemplate
// ====================================================

export interface UpdateMessageTemplate_updateMessageTemplate {
  __typename: "MessageTemplate";
  _id: string;
  name: string;
}

export interface UpdateMessageTemplate {
  updateMessageTemplate: UpdateMessageTemplate_updateMessageTemplate;
}

export interface UpdateMessageTemplateVariables {
  updateMessageTemplateInput: UpdateMessageTemplateInput;
  id: string;
}
