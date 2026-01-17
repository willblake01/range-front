const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const path = require('path');
const Mutation = require('./graphql/resolvers/Mutation');
const Query = require('./graphql/resolvers/Query');
const db = require('./db');

const typeDefsFile = importSchema(path.resolve(__dirname, '../data/schema.graphql'));

const typeDefs = gql(typeDefsFile);

const resolvers = {
  Query,
  Mutation
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

const createServer = () => {
  return new ApolloServer({
    schema,
    playground: true,
    context: ({ req, res }) => ({
      req,
      res,
      db,
      userId: req.userId,
      user: req.user,
    }),
  });
};

module.exports = createServer;
