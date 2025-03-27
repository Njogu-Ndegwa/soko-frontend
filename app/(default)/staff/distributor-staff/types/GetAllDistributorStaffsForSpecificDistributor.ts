/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllDistributorStaffsForSpecificDistributor
// ====================================================

export interface GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_edges_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_edges_node_address {
  __typename: "Address";
  addressLocation: GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_edges_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_edges_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_edges_node {
  __typename: "DistributorStaff";
  _id: string;
  address: GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_edges_node_address;
  contact: GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_edges_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}

export interface GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_edges {
  __typename: "DistributorStaffEdge";
  cursor: string | null;
  node: GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_edges_node | null;
}

export interface GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_pageInfo {
  __typename: "DistributorStaffPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page {
  __typename: "DistributorStaffConnection";
  edges: GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_edges[] | null;
  pageInfo: GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page_pageInfo | null;
}

export interface GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor {
  __typename: "GetAllDistributorStaffResponse";
  page: GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_page;
  pageData: GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor_pageData | null;
}

export interface GetAllDistributorStaffsForSpecificDistributor {
  getAllDistributorStaffsForSpecificDistributor: GetAllDistributorStaffsForSpecificDistributor_getAllDistributorStaffsForSpecificDistributor;
}

export interface GetAllDistributorStaffsForSpecificDistributorVariables {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
  search?: string | null;
}
