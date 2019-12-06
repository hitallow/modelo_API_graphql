import { ApolloServer } from "apollo-server";

import resolvers from "./resolvers";
import typeDefs from "./types";

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(infos => console.log(`Servidor ouvindo em ${infos.url}`));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}
