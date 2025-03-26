/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PersonTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetSpecificCustomerOrPerson
// ====================================================

export interface GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson_address {
  __typename: "Address";
  addressLocation: GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson {
  __typename: "Person";
  _id: string;
  address: GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson_address;
  contact: GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  distributor: GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson_distributor | null;
  name: string;
  type: PersonTypes;
  updatedAt: any | null;
}

export interface GetSpecificCustomerOrPerson {
  getSpecificCustomerOrPerson: GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson;
}

export interface GetSpecificCustomerOrPersonVariables {
  personId: string;
}
