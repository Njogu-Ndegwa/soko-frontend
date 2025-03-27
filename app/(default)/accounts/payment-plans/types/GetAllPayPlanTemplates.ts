/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPayPlanTemplates
// ====================================================

export interface GetAllPayPlanTemplates_getAllPayPlanTemplates_page_edges_node_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface GetAllPayPlanTemplates_getAllPayPlanTemplates_page_edges_node {
  __typename: "PayPlanTemplate";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  useUpfront: boolean | null;
  _id: string;
  createdAt: any | null;
  planDetails: GetAllPayPlanTemplates_getAllPayPlanTemplates_page_edges_node_planDetails[] | null;
}

export interface GetAllPayPlanTemplates_getAllPayPlanTemplates_page_edges {
  __typename: "PayPlanTemplateEdge";
  cursor: string | null;
  node: GetAllPayPlanTemplates_getAllPayPlanTemplates_page_edges_node | null;
}

export interface GetAllPayPlanTemplates_getAllPayPlanTemplates_page_pageInfo {
  __typename: "PayPlanTemplatePageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllPayPlanTemplates_getAllPayPlanTemplates_page {
  __typename: "PayPlanTemplateConnection";
  edges: GetAllPayPlanTemplates_getAllPayPlanTemplates_page_edges[] | null;
  pageInfo: GetAllPayPlanTemplates_getAllPayPlanTemplates_page_pageInfo | null;
}

export interface GetAllPayPlanTemplates_getAllPayPlanTemplates_pageData {
  __typename: "PageData";
  count: number;
}

export interface GetAllPayPlanTemplates_getAllPayPlanTemplates {
  __typename: "GetAllPayPlansResponse";
  page: GetAllPayPlanTemplates_getAllPayPlanTemplates_page;
  pageData: GetAllPayPlanTemplates_getAllPayPlanTemplates_pageData | null;
}

export interface GetAllPayPlanTemplates {
  getAllPayPlanTemplates: GetAllPayPlanTemplates_getAllPayPlanTemplates;
}

export interface GetAllPayPlanTemplatesVariables {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
}
