import gql from "graphql-tag";

/**
 * Mutation.createPayPlan(
createPayPlanTemplateInput: CreatePayPlanInput!
): PayPlanTemplate!
 */
export const createPayPlanMutation = gql`
  mutation CreatePayPlan($createPayPlanTemplateInput: CreatePayPlanInput!) {
    createPayPlan(createPayPlanTemplateInput: $createPayPlanTemplateInput) {
      _id
      deleteStatus
      deleteAt
      createdAt
      updatedAt
      planName
      planDescription
      planDetails {
        pName
        pValue
      }
    }
  }
`;

/**
 * Mutation.updatePayPlan(
updatePayPlanTemplateInput: UpdatePayPlanInput!
): PayPlanTemplate!
 */
export const updatePayPlanMutation = gql`
  mutation UpdatePayPlan($updatePayPlanTemplateInput: UpdatePayPlanInput!) {
    updatePayPlan(updatePayPlanTemplateInput: $updatePayPlanTemplateInput) {
      _id
      deleteStatus
      deleteAt
      createdAt
      updatedAt
      planName
      planDescription
      planDetails {
        pName
        pValue
      }
    }
  }
`;

/**
 * Mutation.deletePayPlan(
payPlanTemplateId: String!
): String!
 */
export const deletePayPlanMutation = gql`
  mutation DeletePayPlan($payPlanTemplateId: String!) {
    deletePayPlan(payPlanTemplateId: $payPlanTemplateId)
  }
`;

/**
 * Mutation.createPayPlanDetail(
createPayPlanDetailInput: CreatePayPlanDetailInput!
): PayPlanDetail!
 */
