/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssetAccountStages, ActionScope, CodeTypes, ActorTypes, AccountStatus, AccountActions } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetAllAssetAccountsForClient
// ====================================================

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_asset_codeGenerator_codeHistory {
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

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_asset_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  codeHistory: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_asset_codeGenerator_codeHistory[] | null;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_asset_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_asset {
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
  codeGenerator: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_asset_codeGenerator | null;
  itemFleet: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_asset_itemFleet | null;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_paymentPlan_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_paymentPlan {
  __typename: "PayPlanBaseEntity";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  planDetails: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_paymentPlan_planDetails[] | null;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_manager {
  __typename: "Distributor";
  _id: string;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit_activities {
  __typename: "Activity";
  action: AccountActions;
  amount: number | null;
  datetime: any;
  notes: string | null;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit_owner_address_addressLocation {
  __typename: "AddressLocation";
  addressLatitude: number;
  addressLongitude: number;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit_owner_address {
  __typename: "Address";
  street: string;
  city: string;
  srpc: string;
  country: string;
  postcode: string;
  addressLocation: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit_owner_address_addressLocation;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit_owner_contact;
  address: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit_owner_address;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit {
  __typename: "CreditAccount";
  accountStatus: AccountStatus;
  activities: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit_activities[] | null;
  balance: number;
  currency: string;
  owner: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit_owner;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_user {
  __typename: "Person";
  _id: string;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node {
  __typename: "AssetAccount";
  _id: string;
  /**
   * Default Stage is 'ASSET_ACCOUNT_CREATED'
   */
  accountStage: AssetAccountStages;
  asset: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_asset;
  paymentPlan: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_paymentPlan | null;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  manager: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_manager;
  paySchedule: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_paySchedule[] | null;
  credit: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_credit;
  updatedAt: any | null;
  user: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node_user;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges {
  __typename: "AssetAccountEdge";
  cursor: string | null;
  node: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges_node | null;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_pageInfo {
  __typename: "AssetAccountPageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page {
  __typename: "AssetAccountConnection";
  edges: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_edges[] | null;
  pageInfo: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page_pageInfo | null;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllAssetAccountsForClient_getAllAssetAccountsForClient {
  __typename: "GetAllAssetAccountsResponse";
  page: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_page;
  pageData: GetAllAssetAccountsForClient_getAllAssetAccountsForClient_pageData | null;
}

export interface GetAllAssetAccountsForClient {
  getAllAssetAccountsForClient: GetAllAssetAccountsForClient_getAllAssetAccountsForClient;
}

export interface GetAllAssetAccountsForClientVariables {
  clientId: string;
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
  search?: string | null;
}
