/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ActionScope {
  CLIENT = "CLIENT",
  DEVELOPMENT = "DEVELOPMENT",
  GLOBAL = "GLOBAL",
  MANAGEMENT = "MANAGEMENT",
  SYSTEM = "SYSTEM",
}

export enum ActorTypes {
  ACCOUNT = "ACCOUNT",
  DEVICE = "DEVICE",
  EVENT = "EVENT",
  ORGANIZATION = "ORGANIZATION",
  PERSON = "PERSON",
  PLACE = "PLACE",
  SOFTWARE = "SOFTWARE",
}

export enum BatchState {
  Completed = "Completed",
  Scheduled = "Scheduled",
  Submitted = "Submitted",
}

export enum CodeSystemType {
  ACP1 = "ACP1",
  ACP2 = "ACP2",
  OPENTOKEN = "OPENTOKEN",
}

export enum QueryOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export enum ThingIDTypes {
  DOI = "DOI",
  MAC = "MAC",
  UUID = "UUID",
}

export interface AssignItemToItemFleetInput {
  itemFleetId: string;
  itemId: string;
}

export interface CreateItemFleetInput {
  description: string;
  freeCodeCount?: number | null;
  disableFreeCode?: boolean | null;
  resetCodeCount?: number | null;
  disableResetCodeCount?: boolean | null;
  dayCodeCountLimit?: number | null;
  disableDayCodeCountLimit?: boolean | null;
  totalCodeCountLimit?: number | null;
  disableTotalCodeCountLimit?: boolean | null;
  codeGenInterval?: number | null;
  disableCodeGenInterval?: boolean | null;
  maxCreditStackDays?: number | null;
  disableMaxCreditStackDays?: boolean | null;
  maxCreditStackCodeEvents?: number | null;
  disableMaxCreditStackCodeEvents?: boolean | null;
  daysToCheckDuration?: number | null;
  disableDaysToCheckDuration?: boolean | null;
  minimumDayCodesGenerated?: number | null;
  disableMinimumDayCodesGenerated?: boolean | null;
  fleetName?: string | null;
  assignDate: any;
}

export interface GetAllClientItemsInItemFleet {
  itemFleetId: string;
  clientId: string;
}

export interface ReassignItemsFromItemFleetInputDto {
  itemId: string;
}

export interface UpdateItemFleetCodeGenInput {
  itemFleetId: string;
  freeCodeCount?: number | null;
  resetCodeCount?: number | null;
  disableResetCodeCount?: boolean | null;
  dayCodeCountLimit?: number | null;
  disableDayCodeCountLimit?: boolean | null;
  totalCodeCountLimit?: number | null;
  disableTotalCodeCountLimit?: boolean | null;
  codeGenInterval?: number | null;
  disableCodeGenInterval?: boolean | null;
  maxCreditStackDays?: number | null;
  disableMaxCreditStackDays?: boolean | null;
  maxCreditStackCodeEvents?: number | null;
  disableMaxCreditStackCodeEvents?: boolean | null;
  disableFreeCode?: boolean | null;
  daysToCheckDuration?: number | null;
  disableDaysToCheckDuration?: boolean | null;
  minimumDayCodesGenerated?: number | null;
  disableMinimumDayCodesGenerated?: boolean | null;
}

export interface UpdateItemFleetInput {
  description?: string | null;
  freeCodeCount?: number | null;
  disableFreeCode?: boolean | null;
  resetCodeCount?: number | null;
  disableResetCodeCount?: boolean | null;
  dayCodeCountLimit?: number | null;
  disableDayCodeCountLimit?: boolean | null;
  totalCodeCountLimit?: number | null;
  disableTotalCodeCountLimit?: boolean | null;
  codeGenInterval?: number | null;
  disableCodeGenInterval?: boolean | null;
  maxCreditStackDays?: number | null;
  disableMaxCreditStackDays?: boolean | null;
  maxCreditStackCodeEvents?: number | null;
  disableMaxCreditStackCodeEvents?: boolean | null;
  daysToCheckDuration?: number | null;
  disableDaysToCheckDuration?: boolean | null;
  minimumDayCodesGenerated?: number | null;
  disableMinimumDayCodesGenerated?: boolean | null;
  itemFleetId: string;
  fleetName?: string | null;
  actorTypes?: ActorTypes | null;
  actionScope?: ActionScope | null;
  actorName?: string | null;
  profile?: string | null;
  clientId?: string | null;
  assignDate?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
