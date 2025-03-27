/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IntentsEnum, MessageCourierEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: GetAllMessageTemplateResponse
// ====================================================

export interface GetAllMessageTemplateResponse_page_edges_node_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface GetAllMessageTemplateResponse_page_edges_node {
  __typename: "MessageTemplate";
  name: string;
  messageBody: string;
  description: string | null;
  intent: IntentsEnum;
  messageCourier: MessageCourierEnum | null;
  distributor: GetAllMessageTemplateResponse_page_edges_node_distributor | null;
  _id: string;
  createdAt: any | null;
}

export interface GetAllMessageTemplateResponse_page_edges {
  __typename: "MessageTemplateEdge";
  cursor: string | null;
  node: GetAllMessageTemplateResponse_page_edges_node | null;
}

export interface GetAllMessageTemplateResponse_page_pageInfo {
  __typename: "MessageTemplatePageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface GetAllMessageTemplateResponse_page {
  __typename: "MessageTemplateConnection";
  edges: GetAllMessageTemplateResponse_page_edges[] | null;
  pageInfo: GetAllMessageTemplateResponse_page_pageInfo | null;
}

export interface GetAllMessageTemplateResponse_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface GetAllMessageTemplateResponse {
  __typename: "GetAllMessageTemplateResponse";
  page: GetAllMessageTemplateResponse_page;
  pageData: GetAllMessageTemplateResponse_pageData | null;
}
