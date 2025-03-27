/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ActorTypes, ActionScope, CodeTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: CodeEventConnection
// ====================================================

export interface CodeEventConnection_edges_node_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  hashIndex: number;
  hashTop: string;
  codeCount: number;
}

export interface CodeEventConnection_edges_node {
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
  codeGenerator: CodeEventConnection_edges_node_codeGenerator;
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

export interface CodeEventConnection_edges {
  __typename: "CodeEventEdge";
  cursor: string | null;
  node: CodeEventConnection_edges_node | null;
}

export interface CodeEventConnection_pageInfo {
  __typename: "CodeEventPageInfo";
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface CodeEventConnection {
  __typename: "CodeEventConnection";
  edges: CodeEventConnection_edges[] | null;
  pageInfo: CodeEventConnection_pageInfo | null;
}
