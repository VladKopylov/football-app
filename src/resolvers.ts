import { gql, ApolloCache, Resolvers } from '@apollo/client';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

type ResolverFn = (
    parent: any,
    args: any,
    { cache } : { cache: ApolloCache<any> }
) => any;

interface ResolverMap {
    [field: string]: ResolverFn;
}

type AppResolvers = Resolvers

export const resolvers = {};