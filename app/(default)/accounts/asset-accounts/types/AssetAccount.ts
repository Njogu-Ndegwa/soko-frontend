/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssetAccountStages, ActionScope, CodeTypes, ActorTypes, AccountStatus, AccountActions } from "../../../thing/types/globalTypes";

// ====================================================
// GraphQL fragment: AssetAccount
// ====================================================

export interface AssetAccount_asset_codeGenerator_codeHistory {
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

export interface AssetAccount_asset_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  codeHistory: AssetAccount_asset_codeGenerator_codeHistory[] | null;
}

export interface AssetAccount_asset_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface AssetAccount_asset {
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
  codeGenerator: AssetAccount_asset_codeGenerator | null;
  itemFleet: AssetAccount_asset_itemFleet | null;
}

export interface AssetAccount_paymentPlan_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface AssetAccount_paymentPlan {
  __typename: "PayPlanBaseEntity";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  planDetails: AssetAccount_paymentPlan_planDetails[] | null;
}

export interface AssetAccount_manager {
  __typename: "Distributor";
  _id: string;
}

export interface AssetAccount_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface AssetAccount_credit_activities {
  __typename: "Activity";
  action: AccountActions;
  amount: number | null;
  datetime: any;
  notes: string | null;
}

export interface AssetAccount_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface AssetAccount_credit_owner_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface AssetAccount_credit_owner_address {
  __typename: "Address";
  street: string;
  city: string;
  srpc: string;
  country: string;
  postcode: string;
  addressLocation: AssetAccount_credit_owner_address_addressLocation;
}

export interface AssetAccount_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: AssetAccount_credit_owner_contact;
  address: AssetAccount_credit_owner_address;
}

export interface AssetAccount_credit {
  __typename: "CreditAccount";
  accountStatus: AccountStatus;
  activities: AssetAccount_credit_activities[] | null;
  balance: number;
  currency: string;
  owner: AssetAccount_credit_owner;
}

export interface AssetAccount_user {
  __typename: "Person";
  _id: string;
}

export interface AssetAccount {
  __typename: "AssetAccount";
  _id: string;
  /**
   * Default Stage is 'ASSET_ACCOUNT_CREATED'
   */
  accountStage: AssetAccountStages;
  asset: AssetAccount_asset;
  paymentPlan: AssetAccount_paymentPlan | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  manager: AssetAccount_manager;
  paySchedule: AssetAccount_paySchedule[] | null;
  credit: AssetAccount_credit;
  updatedAt: any | null;
  user: AssetAccount_user;
}
