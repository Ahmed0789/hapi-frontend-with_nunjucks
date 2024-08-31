import Hapi from '@hapi/hapi';
import Vision from '@hapi/vision';
import { config } from '../config/index.js';
import configureNunjucks from '../config/nunjucks/index.js';
import aboutRoutes from './views/about/index.js';
import homeRoutes from './views/home/index.js';


const init = async () => {
  const server = Hapi.server({
    port: config.server.port,
    host: config.server.host
  });

  // Register the Vision plugin
  await server.register(Vision);

  // Configure Nunjucks
  configureNunjucks(server);

  // Load routes
  await server.register([homeRoutes,aboutRoutes]);

  // Start the server
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();