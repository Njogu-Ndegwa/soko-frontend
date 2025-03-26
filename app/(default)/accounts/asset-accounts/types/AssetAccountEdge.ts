/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssetAccountStages, ActionScope, CodeTypes, ActorTypes, AccountStatus, AccountActions } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: AssetAccountEdge
// ====================================================

export interface AssetAccountEdge_node_asset_codeGenerator_codeHistory {
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

export interface AssetAccountEdge_node_asset_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  codeHistory: AssetAccountEdge_node_asset_codeGenerator_codeHistory[] | null;
}

export interface AssetAccountEdge_node_asset_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface AssetAccountEdge_node_asset {
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
  codeGenerator: AssetAccountEdge_node_asset_codeGenerator | null;
  itemFleet: AssetAccountEdge_node_asset_itemFleet | null;
}

export interface AssetAccountEdge_node_paymentPlan_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface AssetAccountEdge_node_paymentPlan {
  __typename: "PayPlanBaseEntity";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  planDetails: AssetAccountEdge_node_paymentPlan_planDetails[] | null;
}

export interface AssetAccountEdge_node_manager {
  __typename: "Distributor";
  _id: string;
}

export interface AssetAccountEdge_node_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface AssetAccountEdge_node_credit_activities {
  __typename: "Activity";
  action: AccountActions;
  amount: number | null;
  datetime: any;
  notes: string | null;
}

export interface AssetAccountEdge_node_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface AssetAccountEdge_node_credit_owner_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface AssetAccountEdge_node_credit_owner_address {
  __typename: "Address";
  street: string;
  city: string;
  srpc: string;
  country: string;
  postcode: string;
  addressLocation: AssetAccountEdge_node_credit_owner_address_addressLocation;
}

export interface AssetAccountEdge_node_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: AssetAccountEdge_node_credit_owner_contact;
  address: AssetAccountEdge_node_credit_owner_address;
}

export interface AssetAccountEdge_node_credit {
  __typename: "CreditAccount";
  accountStatus: AccountStatus;
  activities: AssetAccountEdge_node_credit_activities[] | null;
  balance: number;
  currency: string;
  owner: AssetAccountEdge_node_credit_owner;
}

export interface AssetAccountEdge_node_user {
  __typename: "Person";
  _id: string;
}

export interface AssetAccountEdge_node {
  __typename: "AssetAccount";
  _id: string;
  /**
   * Default Stage is 'ASSET_ACCOUNT_CREATED'
   */
  accountStage: AssetAccountStages;
  asset: AssetAccountEdge_node_asset;
  paymentPlan: AssetAccountEdge_node_paymentPlan | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  manager: AssetAccountEdge_node_manager;
  paySchedule: AssetAccountEdge_node_paySchedule[] | null;
  credit: AssetAccountEdge_node_credit;
  updatedAt: any | null;
  user: AssetAccountEdge_node_user;
}

export interface AssetAccountEdge {
  __typename: "AssetAccountEdge";
  cursor: string | null;
  node: AssetAccountEdge_node | null;
}
