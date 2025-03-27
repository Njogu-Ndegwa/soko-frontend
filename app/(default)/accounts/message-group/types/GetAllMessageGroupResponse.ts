/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GetAllMessageGroupResponse
// ====================================================

export interface GetAllMessageGroupResponse_page_edges_node_persons_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllMessageGroupResponse_page_edges_node_persons {
  __typename: "GetAllPersonsResponse";
  pageData: GetAllMessageGroupResponse_page_edges_node_persons_pageData | null;
}

export interface GetAllMessageGroupResponse_page_edges_node {
  __typename: "MessageGroup";
  name: string;
  description: string;
  persons: GetAllMessageGroupResponse_page_edges_node_persons;
  createdAt: any | null;
  _id: string;
}

export interface GetAllMessageGroupResponse_page_edges {
  __typename: "MessageGroupEdge";
  cursor: string | null;
  node: GetAllMessageGroupResponse_page_edges_node | null;
}

export interface GetAllMessageGroupResponse_page_pageInfo {
  __typename: "MessageGroupPageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface GetAllMessageGroupResponse_page {
  __typename: "MessageGroupConnection";
  edges: GetAllMessageGroupResponse_page_edges[] | null;
  pageInfo: GetAllMessageGroupResponse_page_pageInfo | null;
}

export interface GetAllMessageGroupResponse_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllMessageGroupResponse {
  __typename: "GetAllMessageGroupResponse";
  page: GetAllMessageGroupResponse_page;
  pageData: GetAllMessageGroupResponse_pageData | null;
}
