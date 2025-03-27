/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSpecificDistributorStaff
// ====================================================

export interface GetSpecificDistributorStaff_getSpecificDistributorStaff_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetSpecificDistributorStaff_getSpecificDistributorStaff_address {
  __typename: "Address";
  addressLocation: GetSpecificDistributorStaff_getSpecificDistributorStaff_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface GetSpecificDistributorStaff_getSpecificDistributorStaff_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface GetSpecificDistributorStaff_getSpecificDistributorStaff {
  __typename: "DistributorStaff";
  _id: string;
  address: GetSpecificDistributorStaff_getSpecificDistributorStaff_address;
  contact: GetSpecificDistributorStaff_getSpecificDistributorStaff_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}

export interface GetSpecificDistributorStaff {
  getSpecificDistributorStaff: GetSpecificDistributorStaff_getSpecificDistributorStaff | null;
}

export interface GetSpecificDistributorStaffVariables {
  id: string;
}
