/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IntentsEnum, MessageCourierEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetAllMessageTemplates
// ====================================================

export interface GetAllMessageTemplates_getAllMessageTemplates_page_edges_node_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface GetAllMessageTemplates_getAllMessageTemplates_page_edges_node {
  __typename: "MessageTemplate";
  name: string;
  messageBody: string;
  description: string | null;
  intent: IntentsEnum;
  messageCourier: MessageCourierEnum | null;
  distributor: GetAllMessageTemplates_getAllMessageTemplates_page_edges_node_distributor | null;
  _id: string;
  createdAt: any | null;
}

export interface GetAllMessageTemplates_getAllMessageTemplates_page_edges {
  __typename: "MessageTemplateEdge";
  cursor: string | null;
  node: GetAllMessageTemplates_getAllMessageTemplates_page_edges_node | null;
}

export interface GetAllMessageTemplates_getAllMessageTemplates_page_pageInfo {
  __typename: "MessageTemplatePageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface GetAllMessageTemplates_getAllMessageTemplates_page {
  __typename: "MessageTemplateConnection";
  edges: GetAllMessageTemplates_getAllMessageTemplates_page_edges[] | null;
  pageInfo: GetAllMessageTemplates_getAllMessageTemplates_page_pageInfo | null;
}

export interface GetAllMessageTemplates_getAllMessageTemplates_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllMessageTemplates_getAllMessageTemplates {
  __typename: "GetAllMessageTemplateResponse";
  page: GetAllMessageTemplates_getAllMessageTemplates_page;
  pageData: GetAllMessageTemplates_getAllMessageTemplates_pageData | null;
}

export interface GetAllMessageTemplates {
  getAllMessageTemplates: GetAllMessageTemplates_getAllMessageTemplates;
}

export interface GetAllMessageTemplatesVariables {
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
  search?: string | null;
}
