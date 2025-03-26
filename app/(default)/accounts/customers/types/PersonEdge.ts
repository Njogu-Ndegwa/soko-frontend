/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PersonTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: PersonEdge
// ====================================================

export interface PersonEdge_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface PersonEdge_node_address {
  __typename: "Address";
  addressLocation: PersonEdge_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface PersonEdge_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface PersonEdge_node_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface PersonEdge_node {
  __typename: "Person";
  _id: string;
  address: PersonEdge_node_address;
  contact: PersonEdge_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  distributor: PersonEdge_node_distributor | null;
  name: string;
  type: PersonTypes;
  updatedAt: any | null;
}

export interface PersonEdge {
  __typename: "PersonEdge";
  cursor: string | null;
  node: PersonEdge_node | null;
}
