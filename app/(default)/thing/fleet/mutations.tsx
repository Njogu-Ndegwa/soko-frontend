import gql from "graphql-tag";
import { itemFleetFragment } from "./queries";

const itemFragment = gql`
  fragment Item on Item {
    _id
    deleteStatus
    deleteAt
    createdAt
    updatedAt
    type
    actionScope
    actorName
    profile
    idType
    idString
    description
    creationDate
    oemID
    oemItemID
    sellerID
    sellerItemID
    assetAccount {
      _id
      credit {
        owner {
          _id
          name
          contact {
            phone
          }
        }
      }
      paySchedule {
        amount
        datetime
        instruction
      }
    }
    itemFleet {
      _id
      fleetName
    }

    itemFirmware {
      _id
      version
      codeSystem
    }
    lifeCycle
    codeGenerator {
      _id
      deleteStatus
      deleteAt
      createdAt
      updatedAt
      type
      actionScope
      actorName
      profile
      hashRoot
      hashTop
      hashTopInitial
      codeCount
      hashIndex
      codeReversalCount
    }
  }
`;

/**
 * Mutation.createItemFleet(
createItemFleetInput: CreateItemFleetInput!
): ItemFleet!
 */
export const createItemFleetFragmentMutation = gql`
  mutation CreateItemFleet($createItemFleetInput: CreateItemFleetInput!) {
    createItemFleet(createItemFleetInput: $createItemFleetInput) {
      _id
    }
  }
`;

/**
 * deleteItemFleet(
itemFleetId: String!
): String!
 */
export const deleteItemFleetMutation = gql`
  mutation DeleteItemFleet($itemFleetId: String!) {
    deleteItemFleet(itemFleetId: $itemFleetId)
  }
`;

/**
 * updateItemFleet(
updateItemFleetInput: UpdateItemFleetInput!
): ItemFleet!
 */
export const updateItemFleetMutation = gql`
  ${itemFleetFragment}
  mutation UpdateItemFleet($updateItemFleetInput: UpdateItemFleetInput!) {
    updateItemFleet(updateItemFleetInput: $updateItemFleetInput) {
      ...ItemFleet
    }
  }
`;

/**
 * Mutation.assignItemToItemFleet(
assignItemToItemFleetInput: AssignItemToItemFleetInput!
): Item!
 */
export const assignItemToItemFleetMutation = gql`
  ${itemFragment}
  mutation AssignItemToItemFleet(
    $assignItemToItemFleetInput: AssignItemToItemFleetInput!
  ) {
    assignItemToItemFleet(
      assignItemToItemFleetInput: $assignItemToItemFleetInput
    ) {
      ...Item
    }
  }
`;

export const reAssigItemToItemFleetMutation = gql `
mutation ReAssignItemsFromItemFleet($itemFleetId: ID!, $items: [ReassignItemsFromItemFleetInputDto!]!) {
  reassignItemsFromItemFleet(reassignItemsFromItemFleetInput: {itemFleetId: $itemFleetId,  items: $items }) {
    status
    message
  }
}
`

/**
 * 
 * Mutation.updateItemFleetCodeGen(
  updateItemFleetCodeGenInput: UpdateItemFleetCodeGenInput!
  ): ItemFleet!
 */
export const UpdateItemFleetCodeGenMutation = gql`
  ${itemFleetFragment}
  mutation UpdateItemFleetCodeGen(
    $updateItemFleetCodeGenInput: UpdateItemFleetCodeGenInput!
  ) {
    updateItemFleetCodeGen(
      updateItemFleetCodeGenInput: $updateItemFleetCodeGenInput
    ) {
      ...ItemFleet
    }
  }
`;

export const reassignFleetItemsFromItemFleet = gql `
mutation ReassignFleetItemsFromItemFleet($oldItemFleetId: ID!, $newItemFleetId: ID!) {
  reassignFleetItemsFromItemFleet(reassignBatchItemsFromItemFleetInput: { oldItemFleetId: $oldItemFleetId, newItemFleetId: $newItemFleetId,  })
   {
    status
    message
  }
}`
