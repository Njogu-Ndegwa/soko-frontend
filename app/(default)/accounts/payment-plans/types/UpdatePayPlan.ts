/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePayPlanInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdatePayPlan
// ====================================================

export interface UpdatePayPlan_updatePayPlan_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface UpdatePayPlan_updatePayPlan {
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
  planDetails: UpdatePayPlan_updatePayPlan_planDetails[] | null;
}

export interface UpdatePayPlan {
  updatePayPlan: UpdatePayPlan_updatePayPlan;
}

export interface UpdatePayPlanVariables {
  updatePayPlanTemplateInput: UpdatePayPlanInput;
}
