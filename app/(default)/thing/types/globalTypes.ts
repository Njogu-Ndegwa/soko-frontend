/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AccountActions {
  ACTIVATE = "ACTIVATE",
  CREATE = "CREATE",
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
  FREEZE = "FREEZE",
  INBOUND_MESSAGE = "INBOUND_MESSAGE",
  OUTBOUND_MESSAGE = "OUTBOUND_MESSAGE",
  RESOLVE = "RESOLVE",
  SUSPEND = "SUSPEND",
}

export enum AccountStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
}

export enum ActionScope {
  CLIENT = "CLIENT",
  DEVELOPMENT = "DEVELOPMENT",
  GLOBAL = "GLOBAL",
  MANAGEMENT = "MANAGEMENT",
  SYSTEM = "SYSTEM",
}

export enum ActorTypes {
  ACCOUNT = "ACCOUNT",
  DEVICE = "DEVICE",
  EVENT = "EVENT",
  ORGANIZATION = "ORGANIZATION",
  PERSON = "PERSON",
  PLACE = "PLACE",
  SOFTWARE = "SOFTWARE",
}

export enum AssetAccountStages {
  ACCOUNT_ACTIVATED = "ACCOUNT_ACTIVATED",
  ACCOUNT_CLOSED = "ACCOUNT_CLOSED",
  ASSET_ACCOUNT_CREATED = "ASSET_ACCOUNT_CREATED",
  ASSET_UNLOCKED = "ASSET_UNLOCKED",
  ASSET_USER_PAIRED = "ASSET_USER_PAIRED",
  PAYPLAN_COMPLETED = "PAYPLAN_COMPLETED",
  PAYPLAN_LOCKED = "PAYPLAN_LOCKED",
}

export enum CodeTypes {
  DAYSCODE = "DAYSCODE",
  FREECODE = "FREECODE",
  JUMPCODE = "JUMPCODE",
  RESETCODE = "RESETCODE",
  SYNCCODE = "SYNCCODE",
}

export enum PersonTypes {
  AGENT = "AGENT",
  CONTACT = "CONTACT",
  CUSTOMER = "CUSTOMER",
  DEVELOPER = "DEVELOPER",
  EMPLOYEE = "EMPLOYEE",
  LOGIN = "LOGIN",
}

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

export interface ClientRegisterPersonInput {
  clientPersonType?: PersonTypes | null;
  clientPersonName: string;
  clientPersonDescription?: string | null;
  clientContactPerson: PersonContactDto;
  clientPersonAddress: AddressDto;
  clientId?: string | null;
  gender?: string | null;
  details?: DetailDto[] | null;
}

export interface DetailDto {
  name: string;
  value: string;
}

export interface PersonContactDto {
  phone: string;
  email: string;
  social: string;
}

export interface UpdateClientPersonInput {
  personId: string;
  clientPersonType?: PersonTypes | null;
  clientPersonName?: string | null;
  clientPersonDescription?: string | null;
  clientContactPerson?: PersonContactDto | null;
  clientPersonAddress?: AddressDto | null;
  clientId?: string | null;
  details?: DetailDto[] | null;
  gender?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
