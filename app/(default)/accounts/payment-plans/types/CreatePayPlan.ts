/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreatePayPlanInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: CreatePayPlan
// ====================================================

export interface CreatePayPlan_createPayPlan_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface CreatePayPlan_createPayPlan {
  __typename: "PayPlanTemplate";
  _id: string;
  deleteStatus: boolean | null;
  deleteAt: any | null;
  createdAt: any | null;
  updatedAt: any | null;
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  planDetails: CreatePayPlan_createPayPlan_planDetails[] | null;
}

export interface CreatePayPlan {
  createPayPlan: CreatePayPlan_createPayPlan;
}

export interface CreatePayPlanVariables {
  createPayPlanTemplateInput: CreatePayPlanInput;
}
