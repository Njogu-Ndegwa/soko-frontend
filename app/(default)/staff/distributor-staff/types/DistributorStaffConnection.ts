/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DistributorStaffConnection
// ====================================================

export interface DistributorStaffConnection_edges_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface DistributorStaffConnection_edges_node_address {
  __typename: "Address";
  addressLocation: DistributorStaffConnection_edges_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface DistributorStaffConnection_edges_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface DistributorStaffConnection_edges_node {
  __typename: "DistributorStaff";
  _id: string;
  address: DistributorStaffConnection_edges_node_address;
  contact: DistributorStaffConnection_edges_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}

export interface DistributorStaffConnection_edges {
  __typename: "DistributorStaffEdge";
  cursor: string | null;
  node: DistributorStaffConnection_edges_node | null;
}

export interface DistributorStaffConnection_pageInfo {
  __typename: "DistributorStaffPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface DistributorStaffConnection {
  __typename: "DistributorStaffConnection";
  edges: DistributorStaffConnection_edges[] | null;
  pageInfo: DistributorStaffConnection_pageInfo | null;
}
