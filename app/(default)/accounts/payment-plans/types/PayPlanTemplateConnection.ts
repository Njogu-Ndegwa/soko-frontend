/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PayPlanTemplateConnection
// ====================================================

export interface PayPlanTemplateConnection_edges_node_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface PayPlanTemplateConnection_edges_node {
  __typename: "PayPlanTemplate";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  useUpfront: boolean | null;
  _id: string;
  createdAt: any | null;
  planDetails: PayPlanTemplateConnection_edges_node_planDetails[] | null;
}

export interface PayPlanTemplateConnection_edges {
  __typename: "PayPlanTemplateEdge";
  cursor: string | null;
  node: PayPlanTemplateConnection_edges_node | null;
}

export interface PayPlanTemplateConnection_pageInfo {
  __typename: "PayPlanTemplatePageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface PayPlanTemplateConnection {
  __typename: "PayPlanTemplateConnection";
  edges: PayPlanTemplateConnection_edges[] | null;
  pageInfo: PayPlanTemplateConnection_pageInfo | null;
}
