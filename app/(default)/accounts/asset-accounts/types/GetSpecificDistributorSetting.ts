/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSpecificDistributorSetting
// ====================================================

export interface GetSpecificDistributorSetting_getSpecificDistributorSetting {
  __typename: "DistributorSetting";
  _id: string;
  deleteStatus: boolean | null;
  deleteAt: any | null;
  createdAt: any | null;
  updatedAt: any | null;
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
  maxCreditStackDays: number;
  /**
   * `n` number of code event used to calculate the credit stackings. Default is 5
   */
  maxCreditStackCodeEvents: number;
}

export interface GetSpecificDistributorSetting {
  getSpecificDistributorSetting: GetSpecificDistributorSetting_getSpecificDistributorSetting;
}

export interface GetSpecificDistributorSettingVariables {
  id: string;
}
