/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AgentConnection
// ====================================================

export interface AgentConnection_edges_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface AgentConnection_edges_node_address {
  __typename: "Address";
  addressLocation: AgentConnection_edges_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface AgentConnection_edges_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface AgentConnection_edges_node {
  __typename: "Agent";
  _id: string;
  address: AgentConnection_edges_node_address;
  contact: AgentConnection_edges_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}

export interface AgentConnection_edges {
  __typename: "AgentEdge";
  cursor: string | null;
  node: AgentConnection_edges_node | null;
}

export interface AgentConnection_pageInfo {
  __typename: "AgentPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface AgentConnection {
  __typename: "AgentConnection";
  edges: AgentConnection_edges[] | null;
  pageInfo: AgentConnection_pageInfo | null;
}
