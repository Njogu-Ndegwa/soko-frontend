/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ActorTypes, ActionScope, CodeTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: GetAllCodeEventsResponse
// ====================================================

export interface GetAllCodeEventsResponse_page_edges_node_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  hashIndex: number;
  hashTop: string;
  codeCount: number;
}

export interface GetAllCodeEventsResponse_page_edges_node {
  __typename: "CodeEvent";
  _id: string;
  deleteStatus: boolean | null;
  deleteAt: any | null;
  createdAt: any | null;
  updatedAt: any | null;
  triggers: string[];
  type: ActorTypes;
  actionScope: ActionScope;
  actorName: string;
  profile: string | null;
  codeType: CodeTypes;
  codeDays: number;
  codeNumber: number | null;
  codeGenerator: GetAllCodeEventsResponse_page_edges_node_codeGenerator;
  codeHexString: string;
  codeDecString: string;
  description: string | null;
  hashIndex: number | null;
  hashTop: string | null;
  hashRoot: string | null;
  codeCount: number | null;
  userWhoCausedTheChange: string | null;
  typeOfChangeChange: string | null;
  descriptionOfChangeChange: string | null;
}

export interface GetAllCodeEventsResponse_page_edges {
  __typename: "CodeEventEdge";
  cursor: string | null;
  node: GetAllCodeEventsResponse_page_edges_node | null;
}

export interface GetAllCodeEventsResponse_page_pageInfo {
  __typename: "CodeEventPageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface GetAllCodeEventsResponse_page {
  __typename: "CodeEventConnection";
  edges: GetAllCodeEventsResponse_page_edges[] | null;
  pageInfo: GetAllCodeEventsResponse_page_pageInfo | null;
}

export interface GetAllCodeEventsResponse_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllCodeEventsResponse {
  __typename: "GetAllCodeEventsResponse";
  page: GetAllCodeEventsResponse_page;
  pageData: GetAllCodeEventsResponse_pageData | null;
}
