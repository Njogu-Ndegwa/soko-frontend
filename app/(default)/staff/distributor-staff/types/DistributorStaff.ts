/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DistributorStaff
// ====================================================

export interface DistributorStaff_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface DistributorStaff_address {
  __typename: "Address";
  addressLocation: DistributorStaff_address_addressLocation;
  city: string;
  country: string;
  postcode: string;
  srpc: string;
  street: string;
  unit: string;
}

export interface DistributorStaff_contact {
  __typename: "Contact";
  email: string;
  phone: string;
  social: string;
}

export interface DistributorStaff {
  __typename: "DistributorStaff";
  _id: string;
  address: DistributorStaff_address;
  contact: DistributorStaff_contact;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  firstName: string;
  lastName: string;
  updatedAt: any | null;
}
