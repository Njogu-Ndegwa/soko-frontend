/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IntentsEnum, MessageCourierEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: MessageTemplate
// ====================================================

export interface MessageTemplate_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface MessageTemplate {
  __typename: "MessageTemplate";
  name: string;
  messageBody: string;
  description: string | null;
  intent: IntentsEnum;
  messageCourier: MessageCourierEnum | null;
  distributor: MessageTemplate_distributor | null;
  _id: string;
  createdAt: any | null;
}
