/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PayPlanTemplateEdge
// ====================================================

export interface PayPlanTemplateEdge_node_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface PayPlanTemplateEdge_node {
  __typename: "PayPlanTemplate";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  useUpfront: boolean | null;
  _id: string;
  createdAt: any | null;
  planDetails: PayPlanTemplateEdge_node_planDetails[] | null;
}

export interface PayPlanTemplateEdge {
  __typename: "PayPlanTemplateEdge";
  cursor: string | null;
  node: PayPlanTemplateEdge_node | null;
}
