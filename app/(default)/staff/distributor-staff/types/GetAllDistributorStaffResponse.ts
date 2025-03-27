/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GetAllDistributorStaffResponse
// ====================================================

export interface GetAllDistributorStaffResponse_page_edges_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetAllDistributorStaffResponse_page_edges_node_address {
  __typename: "Address";
  addressLocation: GetAllDistributorStaffResponse_page_edges_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface GetAllDistributorStaffResponse_page_edges_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetAllDistributorStaffResponse_page_edges_node {
  __typename: "DistributorStaff";
  _id: string;
  address: GetAllDistributorStaffResponse_page_edges_node_address;
  contact: GetAllDistributorStaffResponse_page_edges_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}

export interface GetAllDistributorStaffResponse_page_edges {
  __typename: "DistributorStaffEdge";
  cursor: string | null;
  node: GetAllDistributorStaffResponse_page_edges_node | null;
}

export interface GetAllDistributorStaffResponse_page_pageInfo {
  __typename: "DistributorStaffPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllDistributorStaffResponse_page {
  __typename: "DistributorStaffConnection";
  edges: GetAllDistributorStaffResponse_page_edges[] | null;
  pageInfo: GetAllDistributorStaffResponse_page_pageInfo | null;
}

export interface GetAllDistributorStaffResponse_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface GetAllDistributorStaffResponse {
  __typename: "GetAllDistributorStaffResponse";
  page: GetAllDistributorStaffResponse_page;
  pageData: GetAllDistributorStaffResponse_pageData | null;
}
