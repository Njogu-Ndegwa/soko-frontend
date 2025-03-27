/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MessageGroupConnection
// ====================================================

export interface MessageGroupConnection_edges_node_persons_pageData {
  __typename: "PageData";
  count: number;
}

export interface MessageGroupConnection_edges_node_persons {
  __typename: "GetAllPersonsResponse";
  pageData: MessageGroupConnection_edges_node_persons_pageData | null;
}

export interface MessageGroupConnection_edges_node {
  __typename: "MessageGroup";
  name: string;
  description: string;
  persons: MessageGroupConnection_edges_node_persons;
  createdAt: any | null;
  _id: string;
}

export interface MessageGroupConnection_edges {
  __typename: "MessageGroupEdge";
  cursor: string | null;
  node: MessageGroupConnection_edges_node | null;
}

export interface MessageGroupConnection_pageInfo {
  __typename: "MessageGroupPageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface MessageGroupConnection {
  __typename: "MessageGroupConnection";
  edges: MessageGroupConnection_edges[] | null;
  pageInfo: MessageGroupConnection_pageInfo | null;
}
