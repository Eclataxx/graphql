import { createModule } from 'graphql-modules';
import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'

export const session = createModule({
  id: 'products',
  dirname: __dirname,
  typeDefs, 
  resolvers
});