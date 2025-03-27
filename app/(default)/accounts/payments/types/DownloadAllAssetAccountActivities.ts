/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssetAccountStages, ActionScope, CodeTypes, ActorTypes, AccountStatus, AccountActions } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: DownloadAllAssetAccountActivities
// ====================================================

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_asset_codeGenerator_codeHistory {
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

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_asset_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  codeHistory: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_asset_codeGenerator_codeHistory[] | null;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_asset_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_asset {
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
  codeGenerator: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_asset_codeGenerator | null;
  itemFleet: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_asset_itemFleet | null;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_paymentPlan_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_paymentPlan {
  __typename: "PayPlanBaseEntity";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  planDetails: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_paymentPlan_planDetails[] | null;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_manager {
  __typename: "Distributor";
  _id: string;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit_activities {
  __typename: "Activity";
  action: AccountActions;
  amount: number | null;
  datetime: any;
  notes: string | null;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit_owner_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit_owner_address {
  __typename: "Address";
  street: string;
  city: string;
  srpc: string;
  country: string;
  postcode: string;
  addressLocation: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit_owner_address_addressLocation;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit_owner_contact;
  address: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit_owner_address;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit {
  __typename: "CreditAccount";
  accountStatus: AccountStatus;
  activities: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit_activities[] | null;
  balance: number;
  currency: string;
  owner: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit_owner;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_user {
  __typename: "Person";
  _id: string;
}

export interface DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities {
  __typename: "AssetAccount";
  _id: string;
  /**
   * Default Stage is 'ASSET_ACCOUNT_CREATED'
   */
  accountStage: AssetAccountStages;
  asset: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_asset;
  paymentPlan: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_paymentPlan | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  manager: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_manager;
  paySchedule: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_paySchedule[] | null;
  credit: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_credit;
  updatedAt: any | null;
  user: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities_user;
}

export interface DownloadAllAssetAccountActivities {
  downloadAllAssetAccountActivities: DownloadAllAssetAccountActivities_downloadAllAssetAccountActivities[];
}

export interface DownloadAllAssetAccountActivitiesVariables {
  query?: string | null;
  search?: string | null;
}
