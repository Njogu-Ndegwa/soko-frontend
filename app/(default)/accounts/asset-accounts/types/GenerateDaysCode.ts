/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GenerateDaysCodeInput, CodeTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: GenerateDaysCode
// ====================================================

export interface GenerateDaysCode_generateDaysCode {
  __typename: "CodeResponse";
  codeType: CodeTypes;
  codeHex: string;
  codeDec: string;
}

export interface GenerateDaysCode {
  generateDaysCode: GenerateDaysCode_generateDaysCode;
}

export interface GenerateDaysCodeVariables {
  generateDaysCodeInput: GenerateDaysCodeInput;
}
