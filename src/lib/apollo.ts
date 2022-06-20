import { ApolloClient, InMemoryCache } from '@apollo/client'

// add URI when graphcms is back online
export const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache()
})
