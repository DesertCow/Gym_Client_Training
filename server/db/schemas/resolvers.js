






const resolvers = {

  Query: {

    testQuery: async () => {

      console.log("Test Query")

      return "Test Query"

    },

  },

  Mutation: {

    testMutation: async () => {

      console.log("Test Mutation")

      return "Test Mutation"
    },

  },

};

module.exports = resolvers;