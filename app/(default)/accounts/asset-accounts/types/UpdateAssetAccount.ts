/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateAssetAccountInput, AssetAccountStages, ActionScope, CodeTypes, ActorTypes, AccountStatus, AccountActions } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateAssetAccount
// ====================================================

export interface UpdateAssetAccount_updateAssetAccount_asset_codeGenerator_codeHistory {
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

export interface UpdateAssetAccount_updateAssetAccount_asset_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  codeHistory: UpdateAssetAccount_updateAssetAccount_asset_codeGenerator_codeHistory[] | null;
}

export interface UpdateAssetAccount_updateAssetAccount_asset_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface UpdateAssetAccount_updateAssetAccount_asset {
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
  codeGenerator: UpdateAssetAccount_updateAssetAccount_asset_codeGenerator | null;
  itemFleet: UpdateAssetAccount_updateAssetAccount_asset_itemFleet | null;
}

export interface UpdateAssetAccount_updateAssetAccount_paymentPlan_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface UpdateAssetAccount_updateAssetAccount_paymentPlan {
  __typename: "PayPlanBaseEntity";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  planDetails: UpdateAssetAccount_updateAssetAccount_paymentPlan_planDetails[] | null;
}

export interface UpdateAssetAccount_updateAssetAccount_manager {
  __typename: "Distributor";
  _id: string;
}

export interface UpdateAssetAccount_updateAssetAccount_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface UpdateAssetAccount_updateAssetAccount_credit_activities {
  __typename: "Activity";
  action: AccountActions;
  amount: number | null;
  datetime: any;
  notes: string | null;
}

export interface UpdateAssetAccount_updateAssetAccount_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface UpdateAssetAccount_updateAssetAccount_credit_owner_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface UpdateAssetAccount_updateAssetAccount_credit_owner_address {
  __typename: "Address";
  street: string;
  city: string;
  srpc: string;
  country: string;
  postcode: string;
  addressLocation: UpdateAssetAccount_updateAssetAccount_credit_owner_address_addressLocation;
}

export interface UpdateAssetAccount_updateAssetAccount_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: UpdateAssetAccount_updateAssetAccount_credit_owner_contact;
  address: UpdateAssetAccount_updateAssetAccount_credit_owner_address;
}

export interface UpdateAssetAccount_updateAssetAccount_credit {
  __typename: "CreditAccount";
  accountStatus: AccountStatus;
  activities: UpdateAssetAccount_updateAssetAccount_credit_activities[] | null;
  balance: number;
  currency: string;
  owner: UpdateAssetAccount_updateAssetAccount_credit_owner;
}

export interface UpdateAssetAccount_updateAssetAccount_user {
  __typename: "Person";
  _id: string;
}

export interface UpdateAssetAccount_updateAssetAccount {
  __typename: "AssetAccount";
  _id: string;
  /**
   * Default Stage is 'ASSET_ACCOUNT_CREATED'
   */
  accountStage: AssetAccountStages;
  asset: UpdateAssetAccount_updateAssetAccount_asset;
  paymentPlan: UpdateAssetAccount_updateAssetAccount_paymentPlan | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  manager: UpdateAssetAccount_updateAssetAccount_manager;
  paySchedule: UpdateAssetAccount_updateAssetAccount_paySchedule[] | null;
  credit: UpdateAssetAccount_updateAssetAccount_credit;
  updatedAt: any | null;
  user: UpdateAssetAccount_updateAssetAccount_user;
}

export interface UpdateAssetAccount {
  updateAssetAccount: UpdateAssetAccount_updateAssetAccount;
}

export interface UpdateAssetAccountVariables {
  updateAssetAccountInput: UpdateAssetAccountInput;
}
