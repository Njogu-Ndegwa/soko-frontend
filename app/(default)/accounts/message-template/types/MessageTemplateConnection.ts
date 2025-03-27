/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IntentsEnum, MessageCourierEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: MessageTemplateConnection
// ====================================================

export interface MessageTemplateConnection_edges_node_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface MessageTemplateConnection_edges_node {
  __typename: "MessageTemplate";
  name: string;
  messageBody: string;
  description: string | null;
  intent: IntentsEnum;
  messageCourier: MessageCourierEnum | null;
  distributor: MessageTemplateConnection_edges_node_distributor | null;
  _id: string;
  createdAt: any | null;
}

export interface MessageTemplateConnection_edges {
  __typename: "MessageTemplateEdge";
  cursor: string | null;
  node: MessageTemplateConnection_edges_node | null;
}

export interface MessageTemplateConnection_pageInfo {
  __typename: "MessageTemplatePageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface MessageTemplateConnection {
  __typename: "MessageTemplateConnection";
  edges: MessageTemplateConnection_edges[] | null;
  pageInfo: MessageTemplateConnection_pageInfo | null;
}
