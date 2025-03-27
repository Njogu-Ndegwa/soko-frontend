/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Agent
// ====================================================

export interface Agent_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface Agent_address {
  __typename: "Address";
  addressLocation: Agent_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface Agent_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface Agent {
  __typename: "Agent";
  _id: string;
  address: Agent_address;
  contact: Agent_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}
