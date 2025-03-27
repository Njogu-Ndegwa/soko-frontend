/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MessageGroup
// ====================================================

export interface MessageGroup_persons_pageData {
  __typename: "PageData";
  count: number;
}

export interface MessageGroup_persons {
  __typename: "GetAllPersonsResponse";
  pageData: MessageGroup_persons_pageData | null;
}

export interface MessageGroup {
  __typename: "MessageGroup";
  name: string;
  description: string;
  persons: MessageGroup_persons;
  createdAt: any | null;
  _id: string;
}
