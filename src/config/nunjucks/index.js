import Nunjucks from 'nunjucks';
import Path from 'path';
import { config } from '../index.js';

export default function configureNunjucks(server) {
  const env = Nunjucks.configure(
    Path.join(Path.resolve(), 'src/server/views'),
    config.views.options
  );

  // Example: Adding a custom filter
  env.addFilter('capitalize', (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  // Setting up the view engine
  server.views({
    engines: {
      njk: {
        compile: (src, options) => {
          const template = Nunjucks.compile(src, options.environment);
          return (context) => template.render(context);
        },
        prepare: (options, next) => {
          options.compileOptions.environment = env;
          return next();
        }
      }
    },
    relativeTo: Path.resolve(),
    path: config.views.path
  });
}