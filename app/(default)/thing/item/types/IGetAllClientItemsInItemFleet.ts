/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetAllClientItemsInItemFleet, ActorTypes, ActionScope, ThingIDTypes, BatchState, CodeSystemType } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: IGetAllClientItemsInItemFleet
// ====================================================

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_assetAccount_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_assetAccount_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_assetAccount_credit_owner_contact;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_assetAccount_credit {
  __typename: "CreditAccount";
  owner: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_assetAccount_credit_owner;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_assetAccount_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_assetAccount {
  __typename: "AssetAccount";
  _id: string;
  credit: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_assetAccount_credit;
  paySchedule: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_assetAccount_paySchedule[] | null;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_itemBatch {
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

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_itemFirmware {
  __typename: "ItemFirmware";
  _id: string;
  /**
   * Version Numbers are controlled by OVES Production.
   */
  version: string;
  codeSystem: CodeSystemType;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_codeGenerator {
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

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node {
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
  assetAccount: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_assetAccount | null;
  itemFleet: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_itemFleet | null;
  itemBatch: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_itemBatch;
  itemFirmware: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_itemFirmware;
  lifeCycle: string;
  codeGenerator: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node_codeGenerator | null;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges {
  __typename: "ItemEdge";
  cursor: string | null;
  node: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges_node | null;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_pageInfo {
  __typename: "ItemPageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page {
  __typename: "ItemConnection";
  edges: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_edges[] | null;
  pageInfo: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page_pageInfo | null;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet {
  __typename: "GetAllItemsResponse";
  page: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_page;
  pageData: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet_pageData | null;
}

export interface IGetAllClientItemsInItemFleet {
  getAllClientItemsInItemFleet: IGetAllClientItemsInItemFleet_getAllClientItemsInItemFleet;
}

export interface IGetAllClientItemsInItemFleetVariables {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  igetAllClientItemsInItemFleet: GetAllClientItemsInItemFleet;
  last?: number | null;
}
