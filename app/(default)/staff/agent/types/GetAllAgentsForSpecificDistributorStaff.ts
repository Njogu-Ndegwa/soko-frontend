/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllAgentsForSpecificDistributorStaff
// ====================================================

export interface GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_edges_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_edges_node_address {
  __typename: "Address";
  addressLocation: GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_edges_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_edges_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_edges_node {
  __typename: "Agent";
  _id: string;
  address: GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_edges_node_address;
  contact: GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_edges_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}

export interface GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_edges {
  __typename: "AgentEdge";
  cursor: string | null;
  node: GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_edges_node | null;
}

export interface GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_pageInfo {
  __typename: "AgentPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page {
  __typename: "AgentConnection";
  edges: GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_edges[] | null;
  pageInfo: GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page_pageInfo | null;
}

export interface GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff {
  __typename: "GetAllAgentsResponse";
  page: GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_page;
  pageData: GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff_pageData | null;
}

export interface GetAllAgentsForSpecificDistributorStaff {
  getAllAgentsForSpecificDistributorStaff: GetAllAgentsForSpecificDistributorStaff_getAllAgentsForSpecificDistributorStaff;
}

export interface GetAllAgentsForSpecificDistributorStaffVariables {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
  search?: string | null;
}
