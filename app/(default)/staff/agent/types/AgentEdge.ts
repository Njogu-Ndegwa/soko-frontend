/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AgentEdge
// ====================================================

export interface AgentEdge_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface AgentEdge_node_address {
  __typename: "Address";
  addressLocation: AgentEdge_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface AgentEdge_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface AgentEdge_node {
  __typename: "Agent";
  _id: string;
  address: AgentEdge_node_address;
  contact: AgentEdge_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}

export interface AgentEdge {
  __typename: "AgentEdge";
  cursor: string | null;
  node: AgentEdge_node | null;
}
