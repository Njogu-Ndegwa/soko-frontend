/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PersonTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetAllClientCustomers
// ====================================================

export interface GetAllClientCustomers_getAllClientCustomers_page_edges_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetAllClientCustomers_getAllClientCustomers_page_edges_node_address {
  __typename: "Address";
  addressLocation: GetAllClientCustomers_getAllClientCustomers_page_edges_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface GetAllClientCustomers_getAllClientCustomers_page_edges_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetAllClientCustomers_getAllClientCustomers_page_edges_node_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface GetAllClientCustomers_getAllClientCustomers_page_edges_node {
  __typename: "Person";
  _id: string;
  address: GetAllClientCustomers_getAllClientCustomers_page_edges_node_address;
  contact: GetAllClientCustomers_getAllClientCustomers_page_edges_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  distributor: GetAllClientCustomers_getAllClientCustomers_page_edges_node_distributor | null;
  name: string;
  type: PersonTypes;
  updatedAt: any | null;
}

export interface GetAllClientCustomers_getAllClientCustomers_page_edges {
  __typename: "PersonEdge";
  cursor: string | null;
  node: GetAllClientCustomers_getAllClientCustomers_page_edges_node | null;
}

export interface GetAllClientCustomers_getAllClientCustomers_page_pageInfo {
  __typename: "PersonPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllClientCustomers_getAllClientCustomers_page {
  __typename: "PersonConnection";
  edges: GetAllClientCustomers_getAllClientCustomers_page_edges[] | null;
  pageInfo: GetAllClientCustomers_getAllClientCustomers_page_pageInfo | null;
}

export interface GetAllClientCustomers_getAllClientCustomers_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllClientCustomers_getAllClientCustomers {
  __typename: "GetAllPersonsResponse";
  page: GetAllClientCustomers_getAllClientCustomers_page;
  pageData: GetAllClientCustomers_getAllClientCustomers_pageData | null;
}

export interface GetAllClientCustomers {
  getAllClientCustomers: GetAllClientCustomers_getAllClientCustomers;
}

export interface GetAllClientCustomersVariables {
  after?: string | null;
  before?: string | null;
  clientId: string;
  first?: number | null;
  last?: number | null;
  search?: string | null;
}
