/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PermissionInput, OrgTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetAllDistributors
// ====================================================

export interface GetAllDistributors_getAllDistributors_page_edges_node_orgContactPerson_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetAllDistributors_getAllDistributors_page_edges_node_orgContactPerson_address {
  __typename: "Address";
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
  addressLocation: GetAllDistributors_getAllDistributors_page_edges_node_orgContactPerson_address_addressLocation;
}

export interface GetAllDistributors_getAllDistributors_page_edges_node_orgContactPerson_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetAllDistributors_getAllDistributors_page_edges_node_orgContactPerson {
  __typename: "Person";
  _id: string;
  name: string;
  address: GetAllDistributors_getAllDistributors_page_edges_node_orgContactPerson_address;
  contact: GetAllDistributors_getAllDistributors_page_edges_node_orgContactPerson_contact;
}

export interface GetAllDistributors_getAllDistributors_page_edges_node {
  __typename: "Distributor";
  _id: string;
  activeSubRolePermission: PermissionInput | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  type: OrgTypes;
  updatedAt: any | null;
  orgContactPerson: GetAllDistributors_getAllDistributors_page_edges_node_orgContactPerson | null;
}

export interface GetAllDistributors_getAllDistributors_page_edges {
  __typename: "DistributorEdge";
  cursor: string | null;
  node: GetAllDistributors_getAllDistributors_page_edges_node | null;
}

export interface GetAllDistributors_getAllDistributors_page_pageInfo {
  __typename: "DistributorPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllDistributors_getAllDistributors_page {
  __typename: "DistributorConnection";
  edges: GetAllDistributors_getAllDistributors_page_edges[] | null;
  pageInfo: GetAllDistributors_getAllDistributors_page_pageInfo | null;
}

export interface GetAllDistributors_getAllDistributors_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllDistributors_getAllDistributors {
  __typename: "GetAllDistributorsResponse";
  page: GetAllDistributors_getAllDistributors_page;
  pageData: GetAllDistributors_getAllDistributors_pageData | null;
}

export interface GetAllDistributors {
  getAllDistributors: GetAllDistributors_getAllDistributors;
}

export interface GetAllDistributorsVariables {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
  search?: string | null;
}
