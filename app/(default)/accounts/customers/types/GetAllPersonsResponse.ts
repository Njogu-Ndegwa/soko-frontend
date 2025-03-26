/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PersonTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: GetAllPersonsResponse
// ====================================================

export interface GetAllPersonsResponse_page_edges_node_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetAllPersonsResponse_page_edges_node_address {
  __typename: "Address";
  addressLocation: GetAllPersonsResponse_page_edges_node_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface GetAllPersonsResponse_page_edges_node_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetAllPersonsResponse_page_edges_node_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface GetAllPersonsResponse_page_edges_node {
  __typename: "Person";
  _id: string;
  address: GetAllPersonsResponse_page_edges_node_address;
  contact: GetAllPersonsResponse_page_edges_node_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  distributor: GetAllPersonsResponse_page_edges_node_distributor | null;
  name: string;
  type: PersonTypes;
  updatedAt: any | null;
}

export interface GetAllPersonsResponse_page_edges {
  __typename: "PersonEdge";
  cursor: string | null;
  node: GetAllPersonsResponse_page_edges_node | null;
}

export interface GetAllPersonsResponse_page_pageInfo {
  __typename: "PersonPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllPersonsResponse_page {
  __typename: "PersonConnection";
  edges: GetAllPersonsResponse_page_edges[] | null;
  pageInfo: GetAllPersonsResponse_page_pageInfo | null;
}

export interface GetAllPersonsResponse_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface GetAllPersonsResponse {
  __typename: "GetAllPersonsResponse";
  page: GetAllPersonsResponse_page;
  pageData: GetAllPersonsResponse_pageData | null;
}
