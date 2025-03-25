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
  query GetAllAssetAccounts(
    $clientId: ID!
    $first: Int
    $after: String
    $last: Int
    $before: String
    $search: String
  ) {
    getAllAssetAccountsForClient(
      clientId: $clientId
      first: $first
      after: $after
      last: $last
      before: $before
      search: $search
    ) {
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
              oemItemID
              sellerItemID
              codeGenerator {
                _id
                type
              }
              itemFleet {
                _id
              }
            }
            manager {
              _id
              orgContactPerson {
                _id
                name
                type
              }
            }
            credit {
              currency
              balance
              totalAmountPaid
              accountStatus
              owner {
                _id
                type
                name
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
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
      pageData {
        count
      }
    }
  }
`;

export const GET_ALL_CLIENT_ITEMS = gql`
  query GetAllClientItems(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $search: String
  ) {
    getAllClientItems(
      queryorder: DESC
      assetaccount: false
      first: $first
      after: $after
      last: $last
      before: $before
      search: $search
    ) {
      page {
        edges {
          cursor
          node {
            _id
            deleteAt
            createdAt
            updatedAt
            profile
            oemID
            description
            oemItemID
            sellerID
            assetAccount {
              _id
              eventId
            }
            codeGenerator {
              _id
              triggers
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
              freeCodeCount
            }
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
            itemFleet {
              _id
              fleetName
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
      pageData {
        count
      }
    }
  }
`;

export const GET_SPECIFIC_ASSET_ACCOUNT = gql`
  query GetSpecificAssetAccount($id: ID!) {
    getSpecificAssetAccount(id: $id) {
      _id
      eventId
      credit {
        balance
        currency
        owner {
          _id
          name
          contact {
            phone
          }
        }
      }
      asset {
        _id
        sellerItemID
        oemItemID
        codeGenerator {
          _id
        }
      }
      meta {
        name
        value
      }
      manager {
        _id
        name
        orgContactPerson {
          _id
          name
        }
      }
      user {
        _id
      }
    }
  }
`;

export const GET_ALL_PAY_PLAN_TEMPLATES = gql`
  query GetAllPayPlanTemplates {
    getAllPayPlanTemplates {
      page {
        edges {
          cursor
          node {
            _id
            planName
            useUpfront
            distributor
            createdAt
            planDescription
            planDetails {
              pName
              pValue
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
      pageData {
        count
      }
    }
  }
`;

export const GET_ALL_ASSET_ACCOUNT_ACTIVITIES = gql`
  query GetAllAssetAccountActivities(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $search: String
  ) {
    getAllAssetAccountActivities(
      first: $first
      after: $after
      last: $last
      before: $before
      search: $search
    ) {
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
            paymentPlan {
              planName
              planDescription
              useUpfront
            }
            manager {
              _id
              orgContactPerson {
                _id
                name
              }
            }
            asset {
              _id
              oemItemID
              sellerItemID
              codeGenerator {
                _id
              }
              itemFleet {
                _id
                fleetName
              }
            }
            paySchedule {
              amount
              datetime
              instruction
            }
            credit {
              currency
              balance
              accountStatus
              activities {
                action
                datetime
                amount
                notes
              }
              owner {
                _id
                name
                agentId
                gender
                contact {
                  phone
                }
                address {
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
              }
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
      pageData {
        count
      }
    }
  }
`;

export const GET_SPECIFIC_PAY_PLAN_TEMPLATE = gql`
  query GetSpecificPayPlanTemplate($id: ID!) {
    getSpecificPayPlanTemplate(id: $id) {
      _id
      planName
      planDescription
      useUpfront
      planDetails {
        pName
        pValue
      }
    }
  }
`;

export const GET_ITEM_FLEETS_FOR_CLIENT = gql`
  query GetItemFleetsForClient(
    $clientId: String!
    $first: Int
    $after: String
  ) {
    getItemFleetsForClient(clientId: $clientId, first: $first, after: $after) {
      page {
        edges {
          cursor
          node {
            _id
            createdAt
            updatedAt
            actionScope
            actorName
            profile
            fleetName
            assignDate
            description
            freeCodeCount
            disableFreeCode
            resetCodeCount
            disableResetCodeCount
            dayCodeCountLimit
            disableDayCodeCountLimit
            totalCodeCountLimit
            disableTotalCodeCountLimit
            codeGenInterval
            disableCodeGenInterval
            maxCreditStackDays
            disableMaxCreditStackDays
            maxCreditStackCodeEvents
            disableMaxCreditStackCodeEvents
            daysToCheckDuration
            disableDaysToCheckDuration
            minimumDayCodesGenerated
            disableMinimumDayCodesGenerated
            distributor {
              _id
              orgContactPerson {
                _id
                name
              }
            }
            type
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
      pageData {
        count
      }
    }
  }
`;
