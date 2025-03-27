/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PermissionInput, OrgTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetSpecificDistributor
// ====================================================

export interface GetSpecificDistributor_getSpecificDistributor_orgContactPerson_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetSpecificDistributor_getSpecificDistributor_orgContactPerson_address {
  __typename: "Address";
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
  addressLocation: GetSpecificDistributor_getSpecificDistributor_orgContactPerson_address_addressLocation;
}

export interface GetSpecificDistributor_getSpecificDistributor_orgContactPerson_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetSpecificDistributor_getSpecificDistributor_orgContactPerson {
  __typename: "Person";
  _id: string;
  name: string;
  address: GetSpecificDistributor_getSpecificDistributor_orgContactPerson_address;
  contact: GetSpecificDistributor_getSpecificDistributor_orgContactPerson_contact;
}

export interface GetSpecificDistributor_getSpecificDistributor {
  __typename: "Distributor";
  _id: string;
  activeSubRolePermission: PermissionInput | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  type: OrgTypes;
  updatedAt: any | null;
  orgContactPerson: GetSpecificDistributor_getSpecificDistributor_orgContactPerson | null;
}

export interface GetSpecificDistributor {
  getSpecificDistributor: GetSpecificDistributor_getSpecificDistributor | null;
}

export interface GetSpecificDistributorVariables {
  id: string;
}
