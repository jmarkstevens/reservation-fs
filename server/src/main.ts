import { ApolloServer } from 'apollo-server'
import Redis from 'ioredis'

import { environment } from './environment'
import resolvers from './resolvers'
import typeDefs from './schemas'

const redis = new Redis()

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  context: { redis }
})

server.listen(environment.port).then(({ url }) => console.log(`Server ready at ${url}. `))

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => server.stop())
}
