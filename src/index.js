const { GraphQLServer } = require("graphql-yoga");
const Binding = require("prisma-binding");
const { prisma } = require("./generated/prisma-client-js");

const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: `${__dirname}/schema.graphql`,
  resolvers,
  context: {
    db: new Binding.Prisma({
      typeDefs: `${__dirname}/generated/graphql-schema/prisma.graphql`,
      endpoint: process.env.PRISMA_ENDPOINT
    }),
    prisma
  }
});

server
  .start()
  .then(() => console.log("server running on http://localhost:4000"));
