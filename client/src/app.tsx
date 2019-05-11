import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import * as ReactDOM from 'react-dom'

import AppContainer from './containers/app'
import client from './graphql'

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>,
  document.getElementById('react-app')
)
