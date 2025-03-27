import gql from 'graphql-tag';

/**
 * distributorRegisterDistributorStaff(
distributorRegisterDistributorStaffInput: DistributorRegisterDistributorStaffInput!
): String!
 */
export const distributorRegisterDistributorStaffMutation = gql`
  mutation DistributorRegisterDistributorStaff($distributorRegisterDistributorStaffInput: DistributorRegisterDistributorStaffInput!) {
    distributorRegisterDistributorStaff(distributorRegisterDistributorStaffInput: $distributorRegisterDistributorStaffInput)
  }
`;