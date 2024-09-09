const transactionTypeDef = `#graphql

type Transaction {
    _id: ID!
    userId: ID!
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    location: String   # Assuming location is optional
    data: String!
}

type Query {
    transactions: [Transaction!]       # Renamed to 'transactions' for better clarity (returns multiple)
    transaction(transactionId: ID!): Transaction # Renamed to 'transaction' (singular) for querying one
}

type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction!
    updateTransaction(input: UpdateTransactionInput!): Transaction!
    deleteTransaction(transactionId: ID!): Transaction!
}

input CreateTransactionInput {
    _id: ID!
    userId: ID!
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    location: String   # Assuming this is optional
}

input UpdateTransactionInput {
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    data: String!
    location: String   # Assuming this is optional
}
`;

export default transactionTypeDef;
