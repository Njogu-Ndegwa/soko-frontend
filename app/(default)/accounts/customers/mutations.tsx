import gql from 'graphql-tag';
import { personFragment } from './queries';

/**
 * Mutation.clientRegisterCustomer(
clientCustomerInput: ClientRegisterPersonInput!
): Person!
 */
export const clientRegisterCustomerMutation = gql`
  mutation ClientRegisterCustomer(
    $clientCustomerInput: ClientRegisterPersonInput!
  ) {
    clientRegisterCustomer(clientCustomerInput: $clientCustomerInput) {
      _id
    }
  }
`;

/**
 * 
Mutation.updatePerson(
updateClientPersonInput: UpdateClientPersonInput!
): Person!
 */
export const updatePersonMutation = gql`
  ${personFragment}
  mutation UpdatePerson($updateClientPersonInput: UpdateClientPersonInput!) {
    updatePerson(updateClientPersonInput: $updateClientPersonInput) {
      ...Person
    }
  }
`;

/**
 * Mutation.deletePerson(
personId: ID!
): String!
 */
export const deletePersonMutation = gql`
  mutation DeletePerson($personId: ID!) {
    deletePerson(personId: $personId)
  }
`;
