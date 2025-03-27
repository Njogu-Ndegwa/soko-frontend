/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DistributorStaffEdge
// ====================================================

export interface DistributorStaffEdge_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface DistributorStaffEdge_node_address {
  __typename: "Address";
  addressLocation: DistributorStaffEdge_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface DistributorStaffEdge_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface DistributorStaffEdge_node {
  __typename: "DistributorStaff";
  _id: string;
  address: DistributorStaffEdge_node_address;
  contact: DistributorStaffEdge_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}

export interface DistributorStaffEdge {
  __typename: "DistributorStaffEdge";
  cursor: string | null;
  node: DistributorStaffEdge_node | null;
}
