/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GenerateCodeInput, CodeTypes } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: GenerateResetCode
// ====================================================

export interface GenerateResetCode_generateResetCode {
  __typename: "CodeResponse";
  codeType: CodeTypes;
  codeHex: string;
  codeDec: string;
}

export interface GenerateResetCode {
  generateResetCode: GenerateResetCode_generateResetCode;
}

export interface GenerateResetCodeVariables {
  generateResetCodeInput: GenerateCodeInput;
}
