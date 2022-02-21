import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefs, resolvers } from './models';
import context from './context';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema, context };
export default { schema, context };
