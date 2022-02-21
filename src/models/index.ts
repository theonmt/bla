import { join } from 'path';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
const { loadFilesSync } = require('@graphql-tools/load-files');

const typeDefs = mergeTypeDefs(
  loadSchemaSync(join(__dirname, './**/*.graphql'), {
    loaders: [new GraphQLFileLoader()],
  })
);
const resolvers = mergeResolvers(
  loadFilesSync(join(__dirname, './**/*.resolvers.*'))
);

export { typeDefs, resolvers };
