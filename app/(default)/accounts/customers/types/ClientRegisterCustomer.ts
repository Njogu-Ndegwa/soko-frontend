/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClientRegisterPersonInput } from "../../../thing/types/globalTypes";

// ====================================================
// GraphQL mutation operation: ClientRegisterCustomer
// ====================================================

export interface ClientRegisterCustomer_clientRegisterCustomer {
  __typename: "Person";
  _id: string;
}

export interface ClientRegisterCustomer {
  clientRegisterCustomer: ClientRegisterCustomer_clientRegisterCustomer;
}

export interface ClientRegisterCustomerVariables {
  clientCustomerInput: ClientRegisterPersonInput;
}
