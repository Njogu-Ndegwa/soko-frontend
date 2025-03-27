/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: CreditCreditAccount
// ====================================================

export interface CreditCreditAccount_creditCreditAccount_credit {
  __typename: "CreditAccount";
  balance: number;
}

export interface CreditCreditAccount_creditCreditAccount {
  __typename: "AssetAccount";
  _id: string;
  credit: CreditCreditAccount_creditCreditAccount_credit;
}

export interface CreditCreditAccount {
  creditCreditAccount: CreditCreditAccount_creditCreditAccount;
}

export interface CreditCreditAccountVariables {
  assetAccountId: string;
  paymentInput: PaymentInput;
}
