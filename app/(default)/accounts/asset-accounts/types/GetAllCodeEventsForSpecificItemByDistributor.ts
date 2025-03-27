/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ActorTypes, ActionScope, CodeTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetAllCodeEventsForSpecificItemByDistributor
// ====================================================

export interface GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_page_edges_node_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  hashIndex: number;
  hashTop: string;
  codeCount: number;
}

export interface GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_page_edges_node {
  __typename: "CodeEvent";
  _id: string;
  deleteStatus: boolean | null;
  deleteAt: any | null;
  createdAt: any | null;
  updatedAt: any | null;
  triggers: string[];
  type: ActorTypes;
  actionScope: ActionScope;
  actorName: string;
  profile: string | null;
  codeType: CodeTypes;
  codeDays: number;
  codeNumber: number | null;
  codeGenerator: GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_page_edges_node_codeGenerator;
  codeHexString: string;
  codeDecString: string;
  description: string | null;
  hashIndex: number | null;
  hashTop: string | null;
  hashRoot: string | null;
  codeCount: number | null;
  userWhoCausedTheChange: string | null;
  typeOfChangeChange: string | null;
  descriptionOfChangeChange: string | null;
}

export interface GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_page_edges {
  __typename: "CodeEventEdge";
  cursor: string | null;
  node: GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_page_edges_node | null;
}

export interface GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_page_pageInfo {
  __typename: "CodeEventPageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_page {
  __typename: "CodeEventConnection";
  edges: GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_page_edges[] | null;
  pageInfo: GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_page_pageInfo | null;
}

export interface GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_pageData {
  __typename: "PageData";
  count: number;
  limit: number;
  offset: number;
}

export interface GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor {
  __typename: "GetAllCodeEventsResponse";
  page: GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_page;
  pageData: GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor_pageData | null;
}

export interface GetAllCodeEventsForSpecificItemByDistributor {
  getAllCodeEventsForSpecificItemByDistributor: GetAllCodeEventsForSpecificItemByDistributor_getAllCodeEventsForSpecificItemByDistributor;
}

export interface GetAllCodeEventsForSpecificItemByDistributorVariables {
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
  itemId: string;
  distributorId?: string | null;
}
