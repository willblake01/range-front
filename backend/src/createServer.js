const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const path = require('path');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

const typeDefsFile = importSchema(path.resolve(__dirname, '../data/schema.graphql'));
const typeDefs = gql(typeDefsFile);
const resolvers = {
  Mutation,
  Query
};
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

function createServer() {
  return new ApolloServer({
    schema,
    playground: true,
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
