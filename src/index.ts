import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import mercurius from 'mercurius';

import options from './server';

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: false,
});

/**
 * Add 'mercurius' to our fastify server
 */
app.register(mercurius, {
  path: '/graphql',
  schema: options.schema,
  context: options.context,
  graphiql: true,
});

const port = process.env.PORT || 5000;

// Start server
const start = async (): Promise<void> => {
  try {
    await app.listen(port, '0.0.0.0');
    console.log(`Listening on port ${port} 🚀`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
