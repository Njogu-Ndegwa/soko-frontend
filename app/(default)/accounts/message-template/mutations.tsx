import gql from 'graphql-tag';

/**
 * updateMessageTemplate(
id: String!
input: UpdateMessageTemplateInput!
): MessageTemplate!

 * 
 */

export const updateMessageTemplateMutation = gql`
  mutation UpdateMessageTemplate($updateMessageTemplateInput: UpdateMessageTemplateInput!, $id: String!) {
    updateMessageTemplate(id: $id, input: $updateMessageTemplateInput) {
      _id
      name
    }
  }
`;

/**
 * deleteMessageTemplate(
id: ID!
): String!

 * 
 */

export const deleteMessageTemplateMutation = gql`
  mutation DeleteMessageTemplate($id: ID!) {
    deleteMessageTemplate(id: $id) 
  }
`;