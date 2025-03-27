/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ActionScope, ActorTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetSpecificItemFleet
// ====================================================

export interface GetSpecificItemFleet_getSpecificItemFleet_distributor_orgContactPerson {
  __typename: "Person";
  _id: string;
  name: string;
}

export interface GetSpecificItemFleet_getSpecificItemFleet_distributor {
  __typename: "Distributor";
  _id: string;
  orgContactPerson: GetSpecificItemFleet_getSpecificItemFleet_distributor_orgContactPerson | null;
}

export interface GetSpecificItemFleet_getSpecificItemFleet_itemList {
  __typename: "Item";
  _id: string;
  description: string;
  /**
   * oemItemID cannot be null.  It must be provided in a conformal format PROD+YYMM+000000
   */
  oemItemID: string;
  /**
   * Default ItemID is 'OVES'
   */
  oemID: string;
}

export interface GetSpecificItemFleet_getSpecificItemFleet {
  __typename: "ItemFleet";
  _id: string;
  actionScope: ActionScope;
  actorName: string;
  assignDate: any;
  createdAt: any | null;
  deleteAt: any | null;
  deleteStatus: boolean | null;
  description: string;
  /**
   * Default number of FREECODES is 5
   */
  freeCodeCount: number | null;
  /**
   * Default number of RESETCODES is 5
   */
  resetCodeCount: number | null;
  /**
   * Number of code events allowed for an item within 24 hours.
   */
  dayCodeCountLimit: number | null;
  /**
   * Total number of code events allowed for an item. Default is approximately 3 years (1096 events).
   */
  totalCodeCountLimit: number | null;
  /**
   * Minimum time (in milliseconds) between two subsequent code events for an item. Default is 1 minute.
   */
  codeGenInterval: number | null;
  /**
   * Maximum number of days code that an item can have in a given period. Default is 60
   */
  maxCreditStackDays: number | null;
  /**
   * `n` number of code event used to calculate the credit stackings. Default is 5
   */
  maxCreditStackCodeEvents: number | null;
  disableFreeCode: boolean | null;
  /**
   * Number of days to check duration of day codes
   */
  daysToCheckDuration: number | null;
  /**
   * Minimum number of day codes generated in a specified duration
   */
  minimumDayCodesGenerated: number | null;
  disableResetCodeCount: boolean | null;
  disableDayCodeCountLimit: boolean | null;
  disableTotalCodeCountLimit: boolean | null;
  disableCodeGenInterval: boolean | null;
  disableMaxCreditStackDays: boolean | null;
  disableMaxCreditStackCodeEvents: boolean | null;
  disableDaysToCheckDuration: boolean | null;
  disableMinimumDayCodesGenerated: boolean | null;
  distributor: GetSpecificItemFleet_getSpecificItemFleet_distributor | null;
  fleetName: string;
  itemList: GetSpecificItemFleet_getSpecificItemFleet_itemList[] | null;
  profile: string | null;
  type: ActorTypes;
  updatedAt: any | null;
}

export interface GetSpecificItemFleet {
  getSpecificItemFleet: GetSpecificItemFleet_getSpecificItemFleet;
}

export interface GetSpecificItemFleetVariables {
  id: string;
}
