import { createModule } from 'graphql-modules';
import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'

export const user = createModule({
  id: 'users',
  dirname: __dirname,
  typeDefs, 
  resolvers
});