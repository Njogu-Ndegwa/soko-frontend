/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ActorTypes, ActionScope, ThingIDTypes, BatchState, CodeSystemType } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: Item
// ====================================================

export interface Item_assetAccount_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface Item_assetAccount_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: Item_assetAccount_credit_owner_contact;
}

export interface Item_assetAccount_credit {
  __typename: "CreditAccount";
  owner: Item_assetAccount_credit_owner;
}

export interface Item_assetAccount_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface Item_assetAccount {
  __typename: "AssetAccount";
  _id: string;
  credit: Item_assetAccount_credit;
  paySchedule: Item_assetAccount_paySchedule[] | null;
}

export interface Item_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface Item_itemBatch {
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

export interface Item_itemFirmware {
  __typename: "ItemFirmware";
  _id: string;
  /**
   * Version Numbers are controlled by OVES Production.
   */
  version: string;
  codeSystem: CodeSystemType;
}

export interface Item_codeGenerator {
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

export interface Item {
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
  assetAccount: Item_assetAccount | null;
  itemFleet: Item_itemFleet | null;
  itemBatch: Item_itemBatch;
  itemFirmware: Item_itemFirmware;
  lifeCycle: string;
  codeGenerator: Item_codeGenerator | null;
}
