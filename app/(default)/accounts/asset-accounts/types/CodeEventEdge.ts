/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ActorTypes, ActionScope, CodeTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: CodeEventEdge
// ====================================================

export interface CodeEventEdge_node_codeGenerator {
  __typename: "CodeGenerator";
  _id: string;
  hashIndex: number;
  hashTop: string;
  codeCount: number;
}

export interface CodeEventEdge_node {
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
  codeGenerator: CodeEventEdge_node_codeGenerator;
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

export interface CodeEventEdge {
  __typename: "CodeEventEdge";
  cursor: string | null;
  node: CodeEventEdge_node | null;
}
