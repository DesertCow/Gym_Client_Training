


//* GraphQL Schema Definition
const { gql } = require("@apollo/server");


const typeDefs = `#graphql

  type Query {
    testQuery: String
  }

  type Mutation {
    testMutation: String
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
    memberEmail: String
    password: String
    loginValid: Boolean
    loginToken: String
    memberFirstName: String
    memberLastName: String
  }
  
`;

module.exports = typeDefs;

