/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AddressDto {
  unit: string;
  street: string;
  city: string;
  srpc: string;
  country: string;
  postcode: string;
  locationAddressDto: AddressLocationDto;
}

export interface AddressLocationDto {
  inputAddressLatitude: number;
  inputAddressLongitude: number;
}

export interface AssignAssetAccountToAgentInput {
  assetAccountIds: string[];
  agentId: string;
}

export interface AssignCustomerToAgentInput {
  agentId: string;
  customers: string[];
}

export interface AssignItemToAgentInput {
  agentId: string;
  items: string[];
}

export interface ContactDto {
  phone: string;
  social: string;
}

export interface DistributorRegisterDistributorStaffInput {
  subRoleId: string;
  staffID: string;
  hireDate: any;
  officeAddress: AddressDto;
  email: string;
  firstName: string;
  lastName: string;
  gender?: string | null;
  age?: number | null;
  staffContact: ContactDto;
  staffAddress: AddressDto;
}

export interface DistributorStaffRegisterAgentInput {
  firstName: string;
  lastName: string;
  gender?: string | null;
  age?: number | null;
  agentContact: ContactDto;
  agentAddress: AddressDto;
  email: string;
  typeOfAgent: string;
  agentType: string;
  subRoleId: string;
  agentID: string;
  hireDate: any;
  officeAddress: AddressDto;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
