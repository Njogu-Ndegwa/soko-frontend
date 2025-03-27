/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ActorTypes, ActionScope, BatchState, CodeSystemType } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: ItemBatch
// ====================================================

export interface ItemBatch {
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
