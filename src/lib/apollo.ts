import { ApolloClient, InMemoryCache } from '@apollo/client'

// add URI when graphcms is back online
export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9pyjv1ayu01xr62bk6v0x/master',
  cache: new InMemoryCache()
})
