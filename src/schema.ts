export const typeDefinitions = /* GraphQL */ `
  enum BlockStatusFilter {
    ALL
    PENDING
    CANONICAL
  }

  input EventFilterOptionsInput {
    address: String!
    tokenId: String
    status: BlockStatusFilter
    to: Int
    from: Int
  }

  type EventData {
    index: String!
    fields: [String]!
  }

  type ActionData {
    data: [String]!
  }

  type BlockInfo {
    height: String!
    stateHash: String!
    parentHash: String!
    ledgerHash: String!
    chainStatus: String!
    timestamp: String!
    globalSlotSinceHardfork: String
    globalSlotSinceGenesis: String
  }

  type TransactionInfo {
    status: String!
    hash: String!
    memo: String!
    authorizationKind: String!
  }

  type EventOutput {
    blockInfo: BlockInfo
    transactionInfo: TransactionInfo
    eventData: [EventData]
  }

  type ActionOutput {
    blockInfo: BlockInfo
    transactionInfo: TransactionInfo
    actionData: [ActionData]
  }

  type Query {
    events(input: EventFilterOptionsInput!): [EventOutput]!
    actions(input: EventFilterOptionsInput!): [ActionOutput]!
  }
`;