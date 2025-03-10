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
  query GetAllAssetAccounts($clientId: ID!) {
    getAllAssetAccountsForClient(clientId: $clientId, first: 100) {
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
            }
            credit {
              currency
              balance
              totalAmountPaid
              accountStatus
              owner {
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
                address {
                  unit
                  street
                  city
                  srpc
                  country
                  postcode
                  addressLocation {
                    addressLatitude
                    addressLongitude
                  }
                }
                contact {
                  phone
                  email
                  social
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_CLIENT_ITEMS = gql`
  query GetAllClientItems {
    getAllClientItems(queryorder: DESC, assetaccount: false, first: 10) {
      page {
        edges {
          node {
            _id
            deleteAt
            createdAt
            profile
            oemID
            oemItemID
            itemSKU {
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
              skuName
              productBase
              mainMediaURL
              properties {
                name
                attributes {
                  prop
                  value
                  meta
                }
              }
              oemDescription
            }
            itemBatch {
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
              batchNumber
              batchDate
              description
              batchState
              eventMap
              starting_code
              secret_key
              code_gen_type
              actionProgress
              itemSKU {
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
                skuName
                productBase
                mainMediaURL
                oemDescription
                properties {
                  name
                  attributes {
                    prop
                    value
                    meta
                  }
                }
              }
            }
            itemFirmware {
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
              version
              codeSystem
              description
            }
            lifeCycle
          }
        }
      }
    }
  }
`;
