


//* GraphQL Schema Definition
const { gql } = require("@apollo/server");


const typeDefs = `#graphql

  type Query {
    testQuery: String
  }

  type Mutation {
    createUser(userEmail: String!, password: String!, clubPassword: String!, memberFirstName: String!, memberLastName: String!): Auth
    login(userEmail: String!, password: String!): Auth
  }

  type UserCreated {
    password: String
    user: User
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
  }


  type User {
    _id: ID
    userEmail: String
    password: String
    loginValid: Boolean
    loginToken: String
    memberFirstName: String
    memberLastName: String
  }
  
`;

module.exports = typeDefs;

