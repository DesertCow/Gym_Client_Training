


//* GraphQL Schema Definition
const { gql } = require("@apollo/server");


const typeDefs = `#graphql

  type Query {
    getTrainerList: [Trainer]
  }

  type Mutation {
    createUser(userEmail: String!, password: String!, clubPassword: String!, memberFirstName: String!, memberLastName: String!): Auth
    login(userEmail: String!, password: String!): Auth
    createTrainer(trainerEmail: String!, password: String!,calendarLink: String, trainerFirstName: String!, trainerLastName: String!): Trainer
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

  type Trainer {
    _id: ID
    trainerEmail: String
    calendarLink: String
    trainerFirstName: String
    trainerLastName: String
  }
  
`;

module.exports = typeDefs;

