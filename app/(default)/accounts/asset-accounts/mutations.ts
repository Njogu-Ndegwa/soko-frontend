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

/**
 * type CodeResponse {
codeType: CodeTypes!
codeHex: String!
codeDec: String!
}
 */
const codeResponseFragment = gql`
  fragment CodeResponse on CodeResponse {
    codeType
    codeHex
    codeDec
  }
`;
/**
 * Mutation.generateDaysCode(
generateDaysCodeInput: GenerateDaysCodeInput!
): CodeResponse!
 */
export const generateDaysCodeMutation = gql`
  ${codeResponseFragment}
  mutation GenerateDaysCode($generateDaysCodeInput: GenerateDaysCodeInput!) {
    generateDaysCode(generateDaysCodeInput: $generateDaysCodeInput) {
      ...CodeResponse
    }
  }
`;

/**
Mutation.generateResetCode(
generateResetCodeInput: GenerateCodeInput!
): CodeResponse!
 */
export const generateResetCodeMutation = gql`
  ${codeResponseFragment}
  mutation GenerateResetCode($generateResetCodeInput: GenerateCodeInput!) {
    generateResetCode(generateResetCodeInput: $generateResetCodeInput) {
      ...CodeResponse
    }
  }
`;

/**
 * Mutation.generateFreeCode(
generateFreeCodeInput: GenerateCodeInput!
): CodeResponse!
 */
export const generateFreeCodeMutation = gql`
  ${codeResponseFragment}
  mutation GenerateFreeCode($generateFreeCodeInput: GenerateCodeInput!) {
    generateFreeCode(generateFreeCodeInput: $generateFreeCodeInput) {
      ...CodeResponse
    }
  }
`;

/**
 * 
distributorIncreaseFreeCodeCountForItem
Mutation.distributorIncreaseFreeCodeCountForItem(
itemId: ID!
freeCodeCount: Int!
): CodeGenerator!
 */
export const distributorIncreaseFreeCodeCountForItemMutation = gql`
  mutation DistributorIncreaseFreeCodeCountForItem(
    $itemId: ID!
    $freeCodeCount: Int!
  ) {
    distributorIncreaseFreeCodeCountForItem(
      itemId: $itemId
      freeCodeCount: $freeCodeCount
    ) {
      _id
    }
  }
`;

/**
 * distributorIncreaseResetCodeCountForItem(
itemId: ID!
resetCodeCount: Int!
): CodeGenerator!
 */
export const distributorIncreaseResetCodeCountForItemMutation = gql`
  mutation DistributorIncreaseResetCodeCountForItem(
    $itemId: ID!
    $resetCodeCount: Int!
  ) {
    distributorIncreaseResetCodeCountForItem(
      itemId: $itemId
      resetCodeCount: $resetCodeCount
    ) {
      _id
    }
  }
`;

