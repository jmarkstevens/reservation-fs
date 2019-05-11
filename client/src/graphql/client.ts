import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'

const uri =
  'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'
const graphqlLink = createHttpLink({ uri })

const client = new ApolloClient({
  link: graphqlLink,
  cache: new InMemoryCache(),
})

export default client
