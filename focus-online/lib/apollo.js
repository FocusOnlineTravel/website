import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Create the http link
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://your-wordpress-site.com/graphql',
});

// Create the Apollo client
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});