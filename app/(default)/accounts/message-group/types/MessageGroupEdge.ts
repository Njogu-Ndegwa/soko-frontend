/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MessageGroupEdge
// ====================================================

export interface MessageGroupEdge_node_persons_pageData {
  __typename: "PageData";
  count: number;
}

export interface MessageGroupEdge_node_persons {
  __typename: "GetAllPersonsResponse";
  pageData: MessageGroupEdge_node_persons_pageData | null;
}

export interface MessageGroupEdge_node {
  __typename: "MessageGroup";
  name: string;
  description: string;
  persons: MessageGroupEdge_node_persons;
  createdAt: any | null;
  _id: string;
}

export interface MessageGroupEdge {
  __typename: "MessageGroupEdge";
  cursor: string | null;
  node: MessageGroupEdge_node | null;
}
