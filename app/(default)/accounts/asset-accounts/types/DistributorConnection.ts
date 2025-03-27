/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PermissionInput, OrgTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: DistributorConnection
// ====================================================

export interface DistributorConnection_edges_node_orgContactPerson_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface DistributorConnection_edges_node_orgContactPerson_address {
  __typename: "Address";
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
  addressLocation: DistributorConnection_edges_node_orgContactPerson_address_addressLocation;
}

export interface DistributorConnection_edges_node_orgContactPerson_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface DistributorConnection_edges_node_orgContactPerson {
  __typename: "Person";
  _id: string;
  name: string;
  address: DistributorConnection_edges_node_orgContactPerson_address;
  contact: DistributorConnection_edges_node_orgContactPerson_contact;
}

export interface DistributorConnection_edges_node {
  __typename: "Distributor";
  _id: string;
  activeSubRolePermission: PermissionInput | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  type: OrgTypes;
  updatedAt: any | null;
  orgContactPerson: DistributorConnection_edges_node_orgContactPerson | null;
}

export interface DistributorConnection_edges {
  __typename: "DistributorEdge";
  cursor: string | null;
  node: DistributorConnection_edges_node | null;
}

export interface DistributorConnection_pageInfo {
  __typename: "DistributorPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface DistributorConnection {
  __typename: "DistributorConnection";
  edges: DistributorConnection_edges[] | null;
  pageInfo: DistributorConnection_pageInfo | null;
}
