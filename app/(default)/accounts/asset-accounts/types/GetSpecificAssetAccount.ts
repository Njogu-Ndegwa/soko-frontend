/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssetAccountStages, ActionScope, CodeTypes, ActorTypes, AccountStatus, AccountActions } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetSpecificAssetAccount
// ====================================================

export interface GetSpecificAssetAccount_getSpecificAssetAccount_asset_codeGenerator_codeHistory {
  __typename: "CodeEvent";
  _id: string;
  actionScope: ActionScope;
  actorName: string;
  codeDays: number;
  codeDecString: string;
  codeHexString: string;
  codeNumber: number | null;
  codeType: CodeTypes;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string | null;
  profile: string | null;
  type: ActorTypes;
  updatedAt: any | null;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_asset_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  codeHistory: GetSpecificAssetAccount_getSpecificAssetAccount_asset_codeGenerator_codeHistory[] | null;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_asset_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_asset {
  __typename: "Item";
  _id: string;
  /**
   * This is seller designated ID, unique within range.  Cannot be null.  Default same as oemItemID
   */
  sellerItemID: string;
  /**
   * oemItemID cannot be null.  It must be provided in a conformal format PROD+YYMM+000000
   */
  oemItemID: string;
  codeGenerator: GetSpecificAssetAccount_getSpecificAssetAccount_asset_codeGenerator | null;
  itemFleet: GetSpecificAssetAccount_getSpecificAssetAccount_asset_itemFleet | null;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_paymentPlan_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_paymentPlan {
  __typename: "PayPlanBaseEntity";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  planDetails: GetSpecificAssetAccount_getSpecificAssetAccount_paymentPlan_planDetails[] | null;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_manager {
  __typename: "Distributor";
  _id: string;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_credit_activities {
  __typename: "Activity";
  action: AccountActions;
  amount: number | null;
  datetime: any;
  notes: string | null;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_credit_owner_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_credit_owner_address {
  __typename: "Address";
  street: string;
  city: string;
  srpc: string;
  country: string;
  postcode: string;
  addressLocation: GetSpecificAssetAccount_getSpecificAssetAccount_credit_owner_address_addressLocation;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: GetSpecificAssetAccount_getSpecificAssetAccount_credit_owner_contact;
  address: GetSpecificAssetAccount_getSpecificAssetAccount_credit_owner_address;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_credit {
  __typename: "CreditAccount";
  accountStatus: AccountStatus;
  activities: GetSpecificAssetAccount_getSpecificAssetAccount_credit_activities[] | null;
  balance: number;
  currency: string;
  owner: GetSpecificAssetAccount_getSpecificAssetAccount_credit_owner;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount_user {
  __typename: "Person";
  _id: string;
}

export interface GetSpecificAssetAccount_getSpecificAssetAccount {
  __typename: "AssetAccount";
  _id: string;
  /**
   * Default Stage is 'ASSET_ACCOUNT_CREATED'
   */
  accountStage: AssetAccountStages;
  asset: GetSpecificAssetAccount_getSpecificAssetAccount_asset;
  paymentPlan: GetSpecificAssetAccount_getSpecificAssetAccount_paymentPlan | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  manager: GetSpecificAssetAccount_getSpecificAssetAccount_manager;
  paySchedule: GetSpecificAssetAccount_getSpecificAssetAccount_paySchedule[] | null;
  credit: GetSpecificAssetAccount_getSpecificAssetAccount_credit;
  updatedAt: any | null;
  user: GetSpecificAssetAccount_getSpecificAssetAccount_user;
}

export interface GetSpecificAssetAccount {
  getSpecificAssetAccount: GetSpecificAssetAccount_getSpecificAssetAccount;
}

export interface GetSpecificAssetAccountVariables {
  id: string;
}
