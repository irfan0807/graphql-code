import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mergeResolver from "./resolver/index.js";
import mergeTypeDef from "./typeDefs/index.js";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv'

const app = express();
const httpServer = http.createServer(app);
dotenv.config();

const PORT = 6002

const server = new ApolloServer({
  typeDefs: mergeTypeDef,
  resolvers: mergeResolver,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
}); 

// Ensure we wait for our server to start
await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
    '/',
    cors(),
    express.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => ({ req}),
    }),
  );
  
  // Modified server startup
  await new Promise((resolve) => httpServer.listen(PORT, resolve))

  console.log(`Server is up and running on port ${PORT}`)



