/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssignItemToItemFleetInput, ActorTypes, ActionScope, ThingIDTypes, CodeSystemType } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: AssignItemToItemFleet
// ====================================================

export interface AssignItemToItemFleet_assignItemToItemFleet_assetAccount_credit_owner_contact {
  __typename: "Contact";
  phone: string;
}

export interface AssignItemToItemFleet_assignItemToItemFleet_assetAccount_credit_owner {
  __typename: "Person";
  _id: string;
  name: string;
  contact: AssignItemToItemFleet_assignItemToItemFleet_assetAccount_credit_owner_contact;
}

export interface AssignItemToItemFleet_assignItemToItemFleet_assetAccount_credit {
  __typename: "CreditAccount";
  owner: AssignItemToItemFleet_assignItemToItemFleet_assetAccount_credit_owner;
}

export interface AssignItemToItemFleet_assignItemToItemFleet_assetAccount_paySchedule {
  __typename: "Payment";
  amount: number;
  datetime: any;
  instruction: string;
}

export interface AssignItemToItemFleet_assignItemToItemFleet_assetAccount {
  __typename: "AssetAccount";
  _id: string;
  credit: AssignItemToItemFleet_assignItemToItemFleet_assetAccount_credit;
  paySchedule: AssignItemToItemFleet_assignItemToItemFleet_assetAccount_paySchedule[] | null;
}

export interface AssignItemToItemFleet_assignItemToItemFleet_itemFleet {
  __typename: "ItemFleet";
  _id: string;
  fleetName: string;
}

export interface AssignItemToItemFleet_assignItemToItemFleet_itemFirmware {
  __typename: "ItemFirmware";
  _id: string;
  /**
   * Version Numbers are controlled by OVES Production.
   */
  version: string;
  codeSystem: CodeSystemType;
}

export interface AssignItemToItemFleet_assignItemToItemFleet_codeGenerator {
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

export interface AssignItemToItemFleet_assignItemToItemFleet {
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
  assetAccount: AssignItemToItemFleet_assignItemToItemFleet_assetAccount | null;
  itemFleet: AssignItemToItemFleet_assignItemToItemFleet_itemFleet | null;
  itemFirmware: AssignItemToItemFleet_assignItemToItemFleet_itemFirmware;
  lifeCycle: string;
  codeGenerator: AssignItemToItemFleet_assignItemToItemFleet_codeGenerator | null;
}

export interface AssignItemToItemFleet {
  assignItemToItemFleet: AssignItemToItemFleet_assignItemToItemFleet;
}

export interface AssignItemToItemFleetVariables {
  assignItemToItemFleetInput: AssignItemToItemFleetInput;
}
