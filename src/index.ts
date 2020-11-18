import { ApolloServer } from "apollo-server";
import { env } from './environment'
import { application } from './application'

const schema = application.createSchemaForApollo()

const main = async () => {
  const server = new ApolloServer({ 
    schema,
    playground: env.apollo.playground, 
    introspection: env.apollo.introspection 
  });

  server.listen({ port: env.port }).then(({ url }) => 
  console.log(`Server started on URL: ${url}`)
  );
};

main().catch((err) => {
  console.log(err);
});

if(module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed.'));
}