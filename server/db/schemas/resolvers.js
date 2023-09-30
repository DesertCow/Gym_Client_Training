


//* Models for MongoDB 
const UserMongo = require('../../models/UserMongo');



const resolvers = {

  Query: {

    testQuery: async () => {

      console.log("Test Query")

      return "Test Query"

    },

  },

  Mutation: {

    createUser: async (parent, { userEmail, password, clubPassword, memberFirstName, memberLastName }) => {

      console.log("\n\x1b[33mCreate New User (MongoDB)\x1b[0m\n\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m\n   Club Password: \x1b[35m" + clubPassword + "\x1b[0m\n   Email: " + userEmail + "\x1b[0m\n   Name: " + memberFirstName + " " + memberLastName);

      let registerDate = new Date();

      //* Request Database create a new "User"
      const user = await UserMongo.create({ userEmail, password, clubPassword, memberFirstName, memberLastName, registerDate });

      //TODO: Enable way to print this when it fails...
      //console.log("\x1b[35mAccount Creation Failed: Email already associated with an account \x1b[0m");


      //* Sign/Generate JWT Token
      // const token = signToken(user);

      console.log("\x1b[32mAccount Creation Successful\x1b[0m");

      //* Return Token to User
      return { token };

    },

    login: async (parent, { userEmail, password }) => {

      console.log("\n\x1b[33mLogin Request\x1b[0m\n   Email: \x1b[33m" + userEmail + "\x1b[0m\n   Password: \x1b[35m" + password + "\x1b[0m")

      //* Query Database for user based off provided "email"
      const user = await UserMongo.findOne({ userEmail });

      //* Validate User Exists
      if (user == null) {
        // throw new AuthenticationError('No profile with this email found!');
        console.log('\n\x1b[35mEmail Not Found!\x1b[0m');
        console.log("\x1b[35mLogin Failed!\x1b[0m")

        const token = "Email Not Found!"
        return { token };
      }
      else {

        //* Validate Password via "isCorrectPassword" method
        const correctPw = await user.isCorrectPassword(password);

        if (correctPw) {
          console.log("\n\x1b[32mLogin Successful!\x1b[0m\n");
          // loginValid = true;

          //* Return Signed Token to User
          // const token = signToken(user);
          const token = "VALID Password!";
          return { token };
        }
        else {
          //* Error for incorrect password
          console.log("\n\x1b[35mLogin Failed!\x1b[0m")
          const token = "INVALID Password!"
          return { token };
        }


      }


    },

  },

};

module.exports = resolvers;