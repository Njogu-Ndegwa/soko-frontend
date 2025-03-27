import gql from 'graphql-tag';
import { assetAccountFragment } from './queries';

/**
 * Mutation.pairAssetAccount(
pairAssetAccountInput: PairAssetAccountInput!
): AssetAccount!
 */
export const pairAssetAccountMutation = gql`
  ${assetAccountFragment}
  mutation PairAssetAccount($pairAssetAccountInput: PairAssetAccountInput!) {
    pairAssetAccount(pairAssetAccountInput: $pairAssetAccountInput) {
      ...AssetAccount
    }
  }
`;

/**
 * updateAssetAccount(
updateAssetAccountInput: UpdateAssetAccountInput!
): AssetAccount!
 */
export const updateAssetAccountMutation = gql`
  ${assetAccountFragment}
  mutation UpdateAssetAccount(
    $updateAssetAccountInput: UpdateAssetAccountInput!
  ) {
    updateAssetAccount(updateAssetAccountInput: $updateAssetAccountInput) {
      ...AssetAccount
    }
  }
`;

/**
 * Mutation.creditCreditAccount(
assetAccountId: ID!
paymentInput: PaymentInput!
): AssetAccount!
 */
export const creditCreditAccountMutation = gql`
  mutation CreditCreditAccount(
    $assetAccountId: ID!
    $paymentInput: PaymentInput!
  ) {
    creditCreditAccount(
      assetAccountId: $assetAccountId
      paymentInput: $paymentInput
    ) {
      _id
      credit {
        balance
      }
    }
  }
`;

/**
 * Mutation.activateCreditAccount(
assetAccountId: ID!
): Success!
 */
export const activateCreditAccountMutation = gql`
  mutation ActivateCreditAccount($assetAccountId: ID!) {
    activateCreditAccount(assetAccountId: $assetAccountId) {
      message
    }
  }
`;

/**
 * 
activate
Mutation.activateAssetAccount(
assetAccountId: ID!
): Success!
 */
export const activateAssetAccountMutation = gql`
  mutation ActivateAssetAccount($assetAccountId: ID!) {
    activateAssetAccount(assetAccountId: $assetAccountId) {
      message
    }
  }
`;

/**
 * Mutation.debitCreditAccount(
assetAccountId: ID!
paymentInput: PaymentInput!
): AssetAccount!
 */
export const debitCreditAccountMutation = gql`
  mutation DebitCreditAccount(
    $assetAccountId: ID!
    $paymentInput: PaymentInput!
  ) {
    debitCreditAccount(
      assetAccountId: $assetAccountId
      paymentInput: $paymentInput
    ) {
      _id
      credit {
        balance
      }
    }
  }
`;
/**
 * Mutation.closeAssetAccount(
assetAccountId: ID!
): Success!
 */
export const closeAssetAccountMutation = gql`
  mutation CloseAssetAccount($assetAccountId: ID!) {
    closeAssetAccount(assetAccountId: $assetAccountId) {
      message
    }
  }
`;
