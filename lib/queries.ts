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
            accountStage
            asset {
              _id
              sellerItemID
              oemItemID
              codeGenerator {
                _id
              }
              itemFleet {
                _id
                fleetName
              }
            }
            createdAt
            deleteAt
            deleteStatus
            manager {
              _id
              orgContactPerson {
                _id
                name
              }
            }
            paySchedule {
              amount
              datetime
              instruction
            }
            credit {
              accountStatus
              balance
              currency
              activities {
                action
                amount
                datetime
                notes
              }
              owner {
                _id
                name
                contact {
                  phone
                }
                address {
                  street
                  city
                  country
                  postcode
                  addressLocation {
                    addressLatitude
                    addressLongitude
                  }
                }
              }
            }
            updatedAt
            user {
              _id
            }
          }
        }
      }
    }
  }
`;
