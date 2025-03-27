import gql from 'graphql-tag';
/**
 * Mutation.createMessageFromTemplate(
input: CreateMessageFromTemplateInput!
): MessageGroup!
 */
export const createMessageFromTemplateMutation = gql`
  mutation CreateMessageFromTemplate($createMessageFromTemplateInput: CreateMessageFromTemplateInput!) {
    createMessageFromTemplate(input: $createMessageFromTemplateInput) 
  }
`;

/**
 * Mutation.updateMessageGroup(
id: String!
input: UpdateMessageGroupInput!
): MessageGroup!
Query.getAllMessageG
 * 
 */

export const updateMessageGroupMutation = gql`
  mutation UpdateMessageGroup($updateMessageGroupInput: UpdateMessageGroupInput!, $id: String!) {
    updateMessageGroup(id: $id, input: $updateMessageGroupInput) {
      _id
      name
    }
  }
`;

/**
 * deleteMessageGroup(
id: ID!
): String!
 * 
 */

export const deleteMessageGroupMutation = gql`
  mutation DeleteMessageGroup($id: ID!) {
    deleteMessageGroup(id: $id) 
  }
`;