/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PersonTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: Person
// ====================================================

export interface Person_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface Person_address {
  __typename: "Address";
  addressLocation: Person_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface Person_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface Person_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface Person {
  __typename: "Person";
  _id: string;
  address: Person_address;
  contact: Person_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  distributor: Person_distributor | null;
  name: string;
  type: PersonTypes;
  updatedAt: any | null;
}
