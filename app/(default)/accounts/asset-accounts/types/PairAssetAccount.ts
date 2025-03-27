/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PairAssetAccountInput, AssetAccountStages, ActionScope, CodeTypes, ActorTypes, AccountStatus, AccountActions } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: PairAssetAccount
// ====================================================

export interface PairAssetAccount_pairAssetAccount_asset_codeGenerator_codeHistory {
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

export interface PairAssetAccount_pairAssetAccount_asset_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  codeHistory: PairAssetAccount_pairAssetAccount_asset_codeGenerator_codeHistory[] | null;
}

export interface PairAssetAccount_pairAssetAccount_asset_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface PairAssetAccount_pairAssetAccount_asset {
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
  codeGenerator: PairAssetAccount_pairAssetAccount_asset_codeGenerator | null;
  itemFleet: PairAssetAccount_pairAssetAccount_asset_itemFleet | null;
}

export interface PairAssetAccount_pairAssetAccount_paymentPlan_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface PairAssetAccount_pairAssetAccount_paymentPlan {
  __typename: "PayPlanBaseEntity";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  planDetails: PairAssetAccount_pairAssetAccount_paymentPlan_planDetails[] | null;
}

export interface PairAssetAccount_pairAssetAccount_manager {
  __typename: "Distributor";
  _id: string;
}

export interface PairAssetAccount_pairAssetAccount_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface PairAssetAccount_pairAssetAccount_credit_activities {
  __typename: "Activity";
  action: AccountActions;
  amount: number | null;
  datetime: any;
  notes: string | null;
}

export interface PairAssetAccount_pairAssetAccount_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface PairAssetAccount_pairAssetAccount_credit_owner_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface PairAssetAccount_pairAssetAccount_credit_owner_address {
  __typename: "Address";
  street: string;
  city: string;
  srpc: string;
  country: string;
  postcode: string;
  addressLocation: PairAssetAccount_pairAssetAccount_credit_owner_address_addressLocation;
}

export interface PairAssetAccount_pairAssetAccount_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: PairAssetAccount_pairAssetAccount_credit_owner_contact;
  address: PairAssetAccount_pairAssetAccount_credit_owner_address;
}

export interface PairAssetAccount_pairAssetAccount_credit {
  __typename: "CreditAccount";
  accountStatus: AccountStatus;
  activities: PairAssetAccount_pairAssetAccount_credit_activities[] | null;
  balance: number;
  currency: string;
  owner: PairAssetAccount_pairAssetAccount_credit_owner;
}

export interface PairAssetAccount_pairAssetAccount_user {
  __typename: "Person";
  _id: string;
}

export interface PairAssetAccount_pairAssetAccount {
  __typename: "AssetAccount";
  _id: string;
  /**
   * Default Stage is 'ASSET_ACCOUNT_CREATED'
   */
  accountStage: AssetAccountStages;
  asset: PairAssetAccount_pairAssetAccount_asset;
  paymentPlan: PairAssetAccount_pairAssetAccount_paymentPlan | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  manager: PairAssetAccount_pairAssetAccount_manager;
  paySchedule: PairAssetAccount_pairAssetAccount_paySchedule[] | null;
  credit: PairAssetAccount_pairAssetAccount_credit;
  updatedAt: any | null;
  user: PairAssetAccount_pairAssetAccount_user;
}

export interface PairAssetAccount {
  pairAssetAccount: PairAssetAccount_pairAssetAccount;
}

export interface PairAssetAccountVariables {
  pairAssetAccountInput: PairAssetAccountInput;
}
