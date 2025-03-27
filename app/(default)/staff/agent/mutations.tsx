import gql from 'graphql-tag';

/**
 * Mutation.clientRegisterCustomer(
clientCustomerInput: ClientRegisterPersonInput!
): Person!
 */
export const assignItemToAgentMutation = gql`
  mutation AssignItemToAgent(
    $assignItemToAgentInput: AssignItemToAgentInput!
  ) {
    assignItemToAgent(assignItemToAgentInput: $assignItemToAgentInput) {
      message
      status
    }
  }
`;

export const assignCustomerToAgentMutation = gql`
 mutation AssignCustomerToAgent(
    $assignCustomerToAgentInput: AssignCustomerToAgentInput!
 ) {
    assignCustomerToAgent(assignCustomerToAgentInput: $assignCustomerToAgentInput) {
    message
    status
    } 
 }
`



export const assignAssetToAgentMutation = gql`
mutation AssignAssetAccountToAgentByDistributorStaff(
  $assignAssetAccountToAgentByDistributorStaffInput: AssignAssetAccountToAgentInput!) {
assignAssetAccountToAgentByDistributorStaff(
    assignAssetAccountToAgentByDistributorStaffInput: $assignAssetAccountToAgentByDistributorStaffInput){
        message
        status
    }
}
`

/**
 * Mutation.distributorStaffRegisterAgent(
distributorStaffRegisterAgentInput: DistributorStaffRegisterAgentInput!
): String!
 */
export const distributorStaffRegisterAgentMutation = gql`
  mutation DistributorStaffRegisterAgent($distributorStaffRegisterAgentInput: DistributorStaffRegisterAgentInput!) {
    distributorStaffRegisterAgent(distributorStaffRegisterAgentInput: $distributorStaffRegisterAgentInput)
  }
`;
