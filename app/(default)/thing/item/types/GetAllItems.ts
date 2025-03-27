/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { QueryOrder, ActorTypes, ActionScope, ThingIDTypes, BatchState, CodeSystemType } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetAllItems
// ====================================================

export interface GetAllItems_getAllItems_page_edges_node_assetAccount_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface GetAllItems_getAllItems_page_edges_node_assetAccount_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: GetAllItems_getAllItems_page_edges_node_assetAccount_credit_owner_contact;
}

export interface GetAllItems_getAllItems_page_edges_node_assetAccount_credit {
  __typename: "CreditAccount";
  owner: GetAllItems_getAllItems_page_edges_node_assetAccount_credit_owner;
}

export interface GetAllItems_getAllItems_page_edges_node_assetAccount_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface GetAllItems_getAllItems_page_edges_node_assetAccount {
  __typename: "AssetAccount";
  _id: string;
  credit: GetAllItems_getAllItems_page_edges_node_assetAccount_credit;
  paySchedule: GetAllItems_getAllItems_page_edges_node_assetAccount_paySchedule[] | null;
}

export interface GetAllItems_getAllItems_page_edges_node_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface GetAllItems_getAllItems_page_edges_node_itemBatch {
  __typename: "ItemBatch";
  _id: string;
  deleteStatus: boolean | null;
  deleteAt: any | null;
  createdAt: any | null;
  updatedAt: any | null;
  type: ActorTypes;
  actionScope: ActionScope;
  actorName: string;
  profile: string | null;
  /**
   * batchNumber has a pattern of ProductClassBases+YYMM+123456
   */
  batchNumber: string;
  batchDate: any;
  /**
   * Please add description of batch!
   */
  description: string;
  batchState: BatchState;
  starting_code: string | null;
  /**
   * A key needed to generate the current token
   */
  secret_key: string | null;
  code_gen_type: CodeSystemType | null;
}

export interface GetAllItems_getAllItems_page_edges_node_itemFirmware {
  __typename: "ItemFirmware";
  _id: string;
  /**
   * Version Numbers are controlled by OVES Production.
   */
  version: string;
  codeSystem: CodeSystemType;
}

export interface GetAllItems_getAllItems_page_edges_node_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  deleteStatus: boolean | null;
  deleteAt: any | null;
  createdAt: any | null;
  updatedAt: any | null;
  type: ActorTypes;
  actionScope: ActionScope;
  actorName: string;
  profile: string | null;
  hashRoot: string;
  hashTop: string;
  hashTopInitial: string | null;
  codeCount: number;
  hashIndex: number;
  codeReversalCount: number;
}

export interface GetAllItems_getAllItems_page_edges_node {
  __typename: "Item";
  _id: string;
  deleteStatus: boolean | null;
  deleteAt: any | null;
  createdAt: any | null;
  updatedAt: any | null;
  type: ActorTypes;
  actionScope: ActionScope;
  actorName: string;
  profile: string | null;
  idType: ThingIDTypes;
  idString: string | null;
  description: string;
  creationDate: any;
  /**
   * Default ItemID is 'OVES'
   */
  oemID: string;
  /**
   * oemItemID cannot be null.  It must be provided in a conformal format PROD+YYMM+000000
   */
  oemItemID: string;
  /**
   * Identified a seller, such as 'ANGAZA'.
   */
  sellerID: string;
  /**
   * This is seller designated ID, unique within range.  Cannot be null.  Default same as oemItemID
   */
  sellerItemID: string;
  assetAccount: GetAllItems_getAllItems_page_edges_node_assetAccount | null;
  itemFleet: GetAllItems_getAllItems_page_edges_node_itemFleet | null;
  itemBatch: GetAllItems_getAllItems_page_edges_node_itemBatch;
  itemFirmware: GetAllItems_getAllItems_page_edges_node_itemFirmware;
  lifeCycle: string;
  codeGenerator: GetAllItems_getAllItems_page_edges_node_codeGenerator | null;
}

export interface GetAllItems_getAllItems_page_edges {
  __typename: "ItemEdge";
  cursor: string | null;
  node: GetAllItems_getAllItems_page_edges_node | null;
}

export interface GetAllItems_getAllItems_page_pageInfo {
  __typename: "ItemPageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface GetAllItems_getAllItems_page {
  __typename: "ItemConnection";
  edges: GetAllItems_getAllItems_page_edges[] | null;
  pageInfo: GetAllItems_getAllItems_page_pageInfo | null;
}

export interface GetAllItems_getAllItems_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface GetAllItems_getAllItems {
  __typename: "GetAllItemsResponse";
  page: GetAllItems_getAllItems_page;
  pageData: GetAllItems_getAllItems_pageData | null;
}

export interface GetAllItems {
  getAllItems: GetAllItems_getAllItems;
}

export interface GetAllItemsVariables {
  queryorder: QueryOrder;
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
  search?: string | null;
}
