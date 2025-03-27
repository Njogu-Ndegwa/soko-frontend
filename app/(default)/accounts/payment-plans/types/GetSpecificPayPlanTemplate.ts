/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSpecificPayPlanTemplate
// ====================================================

export interface GetSpecificPayPlanTemplate_getSpecificPayPlanTemplate_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface GetSpecificPayPlanTemplate_getSpecificPayPlanTemplate {
  __typename: "PayPlanTemplate";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  useUpfront: boolean | null;
  _id: string;
  createdAt: any | null;
  planDetails: GetSpecificPayPlanTemplate_getSpecificPayPlanTemplate_planDetails[] | null;
}

export interface GetSpecificPayPlanTemplate {
  getSpecificPayPlanTemplate: GetSpecificPayPlanTemplate_getSpecificPayPlanTemplate | null;
}

export interface GetSpecificPayPlanTemplateVariables {
  id: string;
}
