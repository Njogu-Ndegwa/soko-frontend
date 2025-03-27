/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GetAllAgentsResponse
// ====================================================

export interface GetAllAgentsResponse_page_edges_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetAllAgentsResponse_page_edges_node_address {
  __typename: "Address";
  addressLocation: GetAllAgentsResponse_page_edges_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface GetAllAgentsResponse_page_edges_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetAllAgentsResponse_page_edges_node {
  __typename: "Agent";
  _id: string;
  address: GetAllAgentsResponse_page_edges_node_address;
  contact: GetAllAgentsResponse_page_edges_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}

export interface GetAllAgentsResponse_page_edges {
  __typename: "AgentEdge";
  cursor: string | null;
  node: GetAllAgentsResponse_page_edges_node | null;
}

export interface GetAllAgentsResponse_page_pageInfo {
  __typename: "AgentPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllAgentsResponse_page {
  __typename: "AgentConnection";
  edges: GetAllAgentsResponse_page_edges[] | null;
  pageInfo: GetAllAgentsResponse_page_pageInfo | null;
}

export interface GetAllAgentsResponse_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface GetAllAgentsResponse {
  __typename: "GetAllAgentsResponse";
  page: GetAllAgentsResponse_page;
  pageData: GetAllAgentsResponse_pageData | null;
}
