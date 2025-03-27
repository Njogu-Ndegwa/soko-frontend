/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PermissionInput, OrgTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: DistributorEdge
// ====================================================

export interface DistributorEdge_node_orgContactPerson_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface DistributorEdge_node_orgContactPerson_address {
  __typename: "Address";
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
  addressLocation: DistributorEdge_node_orgContactPerson_address_addressLocation;
}

export interface DistributorEdge_node_orgContactPerson_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface DistributorEdge_node_orgContactPerson {
  __typename: "Person";
  _id: string;
  name: string;
  address: DistributorEdge_node_orgContactPerson_address;
  contact: DistributorEdge_node_orgContactPerson_contact;
}

export interface DistributorEdge_node {
  __typename: "Distributor";
  _id: string;
  activeSubRolePermission: PermissionInput | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  type: OrgTypes;
  updatedAt: any | null;
  orgContactPerson: DistributorEdge_node_orgContactPerson | null;
}

export interface DistributorEdge {
  __typename: "DistributorEdge";
  cursor: string | null;
  node: DistributorEdge_node | null;
}
