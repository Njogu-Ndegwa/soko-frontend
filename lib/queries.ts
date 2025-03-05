import { gql } from "@apollo/client";

export const GET_ALL_CLIENT_CUSTOMERS = gql`
  query GetAllClientCustomers {
    getAllClientCustomers {
      page {
        edges {
          cursor
          node {
            _id
            deleteStatus
            deleteAt
            createdAt
            updatedAt
            type
            name
            description
            agentId
            gender
            contact {
              phone
              email
              social
            }
            distributor {
              _id
              name
            }
            updatedAt
          }
        }
      }
    }
  }
`;

export const GET_ALL_ASSET_ACCOUNTS = gql`
  query GetAllAssetAccountsForClient($clientId: ID!) {
    getAllAssetAccountsForClient(clientId: $clientId) {
      page {
        edges {
          cursor
          node {
            _id
            deleteStatus
            deleteAt
            createdAt
            updatedAt
            accountStage
            eventId
            asset {
              _id
              deleteStatus
              deleteAt
              createdAt
              updatedAt
              triggers
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
              lifeCycle
              codeGenUsed
              legacyItemId
              code
              assetAccount {
                _id
              }
            }
            manager {
              _id
              deleteStatus
              deleteAt
              createdAt
              updatedAt
              type
              name
              description
              activeSubRolePermission
              mqtt_password
              distributorMQTTPort
              distributorGrafanaPort
              distributorInfluxDBPort
              delegateAuthorityToServicer
              dbUri
            }
            credit {
              currency
              balance
              totalAmountPaid
              accountStatus
            }
          }
        }
      }
    }
  }
`;
