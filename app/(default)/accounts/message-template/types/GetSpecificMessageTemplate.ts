/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IntentsEnum, MessageCourierEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetSpecificMessageTemplate
// ====================================================

export interface GetSpecificMessageTemplate_getSpecificMessageTemplate_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface GetSpecificMessageTemplate_getSpecificMessageTemplate {
  __typename: "MessageTemplate";
  name: string;
  messageBody: string;
  description: string | null;
  intent: IntentsEnum;
  messageCourier: MessageCourierEnum | null;
  distributor: GetSpecificMessageTemplate_getSpecificMessageTemplate_distributor | null;
  _id: string;
  createdAt: any | null;
}

export interface GetSpecificMessageTemplate {
  getSpecificMessageTemplate: GetSpecificMessageTemplate_getSpecificMessageTemplate;
}

export interface GetSpecificMessageTemplateVariables {
  id: string;
}
