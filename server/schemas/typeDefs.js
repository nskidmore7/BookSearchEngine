const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    forSale: String
    link: String
}
type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

}
`;

module.exports = typeDefs;