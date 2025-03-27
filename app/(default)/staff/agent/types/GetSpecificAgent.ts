/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSpecificAgent
// ====================================================

export interface GetSpecificAgent_getSpecificAgent_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetSpecificAgent_getSpecificAgent_address {
  __typename: "Address";
  addressLocation: GetSpecificAgent_getSpecificAgent_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface GetSpecificAgent_getSpecificAgent_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetSpecificAgent_getSpecificAgent {
  __typename: "Agent";
  _id: string;
  address: GetSpecificAgent_getSpecificAgent_address;
  contact: GetSpecificAgent_getSpecificAgent_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}

export interface GetSpecificAgent {
  getSpecificAgent: GetSpecificAgent_getSpecificAgent | null;
}

export interface GetSpecificAgentVariables {
  id: string;
}
