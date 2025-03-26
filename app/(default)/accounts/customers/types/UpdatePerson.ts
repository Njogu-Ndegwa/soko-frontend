/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateClientPersonInput, PersonTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePerson
// ====================================================

export interface UpdatePerson_updatePerson_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface UpdatePerson_updatePerson_address {
  __typename: "Address";
  addressLocation: UpdatePerson_updatePerson_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface UpdatePerson_updatePerson_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface UpdatePerson_updatePerson_distributor {
  __typename: "Distributor";
  _id: string;
  name: string;
}

export interface UpdatePerson_updatePerson {
  __typename: "Person";
  _id: string;
  address: UpdatePerson_updatePerson_address;
  contact: UpdatePerson_updatePerson_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  distributor: UpdatePerson_updatePerson_distributor | null;
  name: string;
  type: PersonTypes;
  updatedAt: any | null;
}

export interface UpdatePerson {
  updatePerson: UpdatePerson_updatePerson;
}

export interface UpdatePersonVariables {
  updateClientPersonInput: UpdateClientPersonInput;
}
