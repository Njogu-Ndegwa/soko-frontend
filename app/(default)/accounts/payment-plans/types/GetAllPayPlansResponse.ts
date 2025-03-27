/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GetAllPayPlansResponse
// ====================================================

export interface GetAllPayPlansResponse_page_edges_node_planDetails {
  __typename: "PlanDetail";
  pName: string | null;
  pValue: string | null;
}

export interface GetAllPayPlansResponse_page_edges_node {
  __typename: "PayPlanTemplate";
  /**
   * Default plan type is NO-PLAN, indicating manual payment and code generation
   */
  planName: string | null;
  planDescription: string | null;
  useUpfront: boolean | null;
  _id: string;
  createdAt: any | null;
  planDetails: GetAllPayPlansResponse_page_edges_node_planDetails[] | null;
}

export interface GetAllPayPlansResponse_page_edges {
  __typename: "PayPlanTemplateEdge";
  cursor: string | null;
  node: GetAllPayPlansResponse_page_edges_node | null;
}

export interface GetAllPayPlansResponse_page_pageInfo {
  __typename: "PayPlanTemplatePageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface GetAllPayPlansResponse_page {
  __typename: "PayPlanTemplateConnection";
  edges: GetAllPayPlansResponse_page_edges[] | null;
  pageInfo: GetAllPayPlansResponse_page_pageInfo | null;
}

export interface GetAllPayPlansResponse_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface GetAllPayPlansResponse {
  __typename: "GetAllPayPlansResponse";
  page: GetAllPayPlansResponse_page;
  pageData: GetAllPayPlansResponse_pageData | null;
}
