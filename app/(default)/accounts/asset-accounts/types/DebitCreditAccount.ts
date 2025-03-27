/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: DebitCreditAccount
// ====================================================

export interface DebitCreditAccount_debitCreditAccount_credit {
  __typename: "CreditAccount";
  balance: number;
}

export interface DebitCreditAccount_debitCreditAccount {
  __typename: "AssetAccount";
  _id: string;
  credit: DebitCreditAccount_debitCreditAccount_credit;
}

export interface DebitCreditAccount {
  debitCreditAccount: DebitCreditAccount_debitCreditAccount;
}

export interface DebitCreditAccountVariables {
  assetAccountId: string;
  paymentInput: PaymentInput;
}
