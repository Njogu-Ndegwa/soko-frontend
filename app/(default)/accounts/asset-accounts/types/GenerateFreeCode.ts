/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GenerateCodeInput, CodeTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: GenerateFreeCode
// ====================================================

export interface GenerateFreeCode_generateFreeCode {
  __typename: "CodeResponse";
  codeType: CodeTypes;
  codeHex: string;
  codeDec: string;
}

export interface GenerateFreeCode {
  generateFreeCode: GenerateFreeCode_generateFreeCode;
}

export interface GenerateFreeCodeVariables {
  generateFreeCodeInput: GenerateCodeInput;
}
