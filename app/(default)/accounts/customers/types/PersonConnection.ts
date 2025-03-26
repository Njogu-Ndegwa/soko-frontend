/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PersonTypes } from "../../../thing/types/globalTypes";

// ====================================================
// GraphQL fragment: PersonConnection
// ====================================================

export interface PersonConnection_edges_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface PersonConnection_edges_node_address {
  __typename: "Address";
  addressLocation: PersonConnection_edges_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface PersonConnection_edges_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface PersonConnection_edges_node_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface PersonConnection_edges_node {
  __typename: "Person";
  _id: string;
  address: PersonConnection_edges_node_address;
  contact: PersonConnection_edges_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  distributor: PersonConnection_edges_node_distributor | null;
  name: string;
  type: PersonTypes;
  updatedAt: any | null;
}

export interface PersonConnection_edges {
  __typename: "PersonEdge";
  cursor: string | null;
  node: PersonConnection_edges_node | null;
}

export interface PersonConnection_pageInfo {
  __typename: "PersonPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface PersonConnection {
  __typename: "PersonConnection";
  edges: PersonConnection_edges[] | null;
  pageInfo: PersonConnection_pageInfo | null;
}
