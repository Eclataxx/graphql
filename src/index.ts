import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding'
import resolvers from './resolvers';
require('dotenv').config()

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint:
        process.env.PRISMA_ENDPOINT,
    }),
  }),
})

server.start(
  () => console.log(`GraphQL server is running on http://localhost:4000`)
)