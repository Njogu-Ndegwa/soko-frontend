/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IntentsEnum, MessageCourierEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: MessageTemplateEdge
// ====================================================

export interface MessageTemplateEdge_node_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface MessageTemplateEdge_node {
  __typename: "MessageTemplate";
  name: string;
  messageBody: string;
  description: string | null;
  intent: IntentsEnum;
  messageCourier: MessageCourierEnum | null;
  distributor: MessageTemplateEdge_node_distributor | null;
  _id: string;
  createdAt: any | null;
}

export interface MessageTemplateEdge {
  __typename: "MessageTemplateEdge";
  cursor: string | null;
  node: MessageTemplateEdge_node | null;
}
