/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PermissionInput, OrgTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: GetAllDistributorsResponse
// ====================================================

export interface GetAllDistributorsResponse_page_edges_node_orgContactPerson_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetAllDistributorsResponse_page_edges_node_orgContactPerson_address {
  __typename: "Address";
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
  addressLocation: GetAllDistributorsResponse_page_edges_node_orgContactPerson_address_addressLocation;
}

export interface GetAllDistributorsResponse_page_edges_node_orgContactPerson_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetAllDistributorsResponse_page_edges_node_orgContactPerson {
  __typename: "Person";
  _id: string;
  name: string;
  address: GetAllDistributorsResponse_page_edges_node_orgContactPerson_address;
  contact: GetAllDistributorsResponse_page_edges_node_orgContactPerson_contact;
}

export interface GetAllDistributorsResponse_page_edges_node {
  __typename: "Distributor";
  _id: string;
  activeSubRolePermission: PermissionInput | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  type: OrgTypes;
  updatedAt: any | null;
  orgContactPerson: GetAllDistributorsResponse_page_edges_node_orgContactPerson | null;
}

export interface GetAllDistributorsResponse_page_edges {
  __typename: "DistributorEdge";
  cursor: string | null;
  node: GetAllDistributorsResponse_page_edges_node | null;
}

export interface GetAllDistributorsResponse_page_pageInfo {
  __typename: "DistributorPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllDistributorsResponse_page {
  __typename: "DistributorConnection";
  edges: GetAllDistributorsResponse_page_edges[] | null;
  pageInfo: GetAllDistributorsResponse_page_pageInfo | null;
}

export interface GetAllDistributorsResponse_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllDistributorsResponse {
  __typename: "GetAllDistributorsResponse";
  page: GetAllDistributorsResponse_page;
  pageData: GetAllDistributorsResponse_pageData | null;
}
