/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllMessageGroups
// ====================================================

export interface GetAllMessageGroups_getAllMessageGroups_page_edges_node_persons_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllMessageGroups_getAllMessageGroups_page_edges_node_persons {
  __typename: "GetAllPersonsResponse";
  pageData: GetAllMessageGroups_getAllMessageGroups_page_edges_node_persons_pageData | null;
}

export interface GetAllMessageGroups_getAllMessageGroups_page_edges_node {
  __typename: "MessageGroup";
  name: string;
  description: string;
  persons: GetAllMessageGroups_getAllMessageGroups_page_edges_node_persons;
  createdAt: any | null;
  _id: string;
}

export interface GetAllMessageGroups_getAllMessageGroups_page_edges {
  __typename: "MessageGroupEdge";
  cursor: string | null;
  node: GetAllMessageGroups_getAllMessageGroups_page_edges_node | null;
}

export interface GetAllMessageGroups_getAllMessageGroups_page_pageInfo {
  __typename: "MessageGroupPageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface GetAllMessageGroups_getAllMessageGroups_page {
  __typename: "MessageGroupConnection";
  edges: GetAllMessageGroups_getAllMessageGroups_page_edges[] | null;
  pageInfo: GetAllMessageGroups_getAllMessageGroups_page_pageInfo | null;
}

export interface GetAllMessageGroups_getAllMessageGroups_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface GetAllMessageGroups_getAllMessageGroups {
  __typename: "GetAllMessageGroupResponse";
  page: GetAllMessageGroups_getAllMessageGroups_page;
  pageData: GetAllMessageGroups_getAllMessageGroups_pageData | null;
}

export interface GetAllMessageGroups {
  getAllMessageGroups: GetAllMessageGroups_getAllMessageGroups;
}

export interface GetAllMessageGroupsVariables {
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
  search?: string | null;
}
