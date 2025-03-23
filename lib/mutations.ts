import { gql } from "@apollo/client";

export const SIGN_IN_USER = gql`
  mutation SignInUser($signInCredentials: SignInCredentialsDto!) {
    signInUser(signInCredentials: $signInCredentials) {
      email
      accessToken
      name
      _id
    }
  }
`;

export const UPDATE_ASSET_ACCOUNT = gql`
  mutation UpdateAssetAccount($assetAccountId: ID!) {
    updateAssetAccount(
      updateAssetAccountInput: { assetAccountId: $assetAccountId }
    ) {
      _id
      deleteStatus
      deleteAt
      createdAt
      updatedAt
      accountStage
      eventId
      asset {
        _id
        oemItemID
        sellerItemID
        codeGenerator {
          _id
        }
        itemFleet {
          _id
        }
      }
      paymentPlan {
        planName
        planDescription
        useUpfront
        planDetails {
          pName
          pValue
        }
      }
      paySchedule {
        amount
        datetime
        instruction
      }
    }
  }
`;

export const UPDATE_PAY_PLAN = gql`
  mutation UpdatePayPlan($input: UpdatePayPlanTemplateInput!) {
    updatePayPlan(updatePayPlanTemplateInput: $input) {
      _id
      deleteStatus
      deleteAt
      createdAt
      updatedAt
      planName
      planDescription
      useUpfront
    }
  }
`;
