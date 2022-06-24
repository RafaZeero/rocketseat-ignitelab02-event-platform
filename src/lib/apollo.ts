import { ApolloClient, InMemoryCache } from '@apollo/client'

// add URI when graphcms is back online
export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: 'Bearer ' + import.meta.env.VITE_GRAPHCMS_API
  },
  cache: new InMemoryCache()
})
