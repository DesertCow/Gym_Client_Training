// #####################################################################
// 
// VeganLifz Main Server V0.1
//
// Clayton Skaggs October 2023
// 
// ---------------------------------------------------------------------
import figlet from "figlet";

const { ApolloServer, gql } = require("@apollo/server");
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');

const express = require("express");
const { expressMiddleware } = require("@apollo/server/express4");

const http = require('http');

const bodyParser = require('body-parser');

//* ========= Cors Import / Config =========
const cors = require("cors");

var corsOptions = {
  // origin: 'https://boardclubapp-production.up.railway.app',
  origin: 'http://localhost:3001',
  // origin: 'http://localhost:8081',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//* Import SQL and GraphQL ports from ENV file
const graphQLport = process.env.GRAPH_QL_PORT || 4001;

//* ========= DB Connections =========
const db = require('./db/mongoConnection');

//* ========= DB Seed Function =========
const seedAll = require('./db/seeds/index');

async function seedServer() {

  try {
    await seedAll();
    console.log('\n\x1b[42m----- SEEDING COMPLETE/VALID -----\x1b[0m\n');
  } catch (error) {
    console.log('\n\x1b[41m----- SEEDING FAILED! -----\x1b[0m\n');
    console.log(error);
  }
}

//* ========= DB Schema =========
const { typeDefs, resolvers } = require('./db/schemas');


//* ========= Create Base "App" =========
const app = express();
const httpServer = http.createServer(app);

//* ========= Define Apollo Server =========
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins:
    [ApolloServerPluginDrainHttpServer({ httpServer })]
  // [ApolloServerPluginLandingPageDisabled()],
});

//* ========= Apply Cors =========
app.options('*', cors()) // include before other routes

console.log("\n\x1b[32mServer Import Complete \n\x1b[33mNegotiating Database Connections...\x1b")

//* Starts all backend servers and DB connections
async function serverStart() {

  // console.log("ENV = " + process.env.TEST)

  //* Start ApolloServer
  await server.start();

  //* Start GraphQLServer
  app.use(
    '/',

    //* Apply Cors Config
    cors(corsOptions),

    bodyParser.json({ limit: '50mb' }),

    //* Middleware Injection
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),

  );

  //* Start mongoDB Connection
  db.once('open', () => {

    console.log("\n\x1b[36m---       \x1b[33mServer Status\x1b[36m       ---")
    console.log("---------------------------------")
    console.log('---\x1b[37m MongoDB Database [' + "\x1b[32mOnline\x1b[0m" + ']\x1b[36m ---')

    // * Start GraphQL Server
    app.listen(graphQLport, () => {
      console.log(`---\x1b[37m GraphQL API      [` + "\x1b[32mOnline\x1b[0m" + `] \x1b[36m---`);
      console.log("---------------------------------\x1b[30m\n")
      console.log(`\x1b[31mAPI Live:\x1b[0m http://192.168.25.22:${graphQLport}\n`);

    })
  })

}

//* ========== Main ===========

// * Main Server Call
console.log("\n\x1b[34mStarting Server...\x1b[0m")
serverStart();
seedServer();
// console.log("\x1b[33mServer Start Complete!\x1b[0m")

//* ========== EOM ===========

// console.log(`Listening on http://localhost:${server.port} ...`);

// const server = Bun.serve({
//   port: 3000,
//   fetch(req) {
//     const body = figlet.textSync("Hello World!");
//     return new Response(body);
//     return new Response("Bun!");
//   },
// });