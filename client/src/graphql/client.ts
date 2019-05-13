import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'

const uri = 'http://localhost:4000/graphql'
const graphqlLink = createHttpLink({ uri })

const client = new ApolloClient({
  link: graphqlLink,
  cache: new InMemoryCache(),
})

export default client
