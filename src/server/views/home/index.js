import HomeController from './controller.js';

export default {
  name: 'homeRoutes',
  version: '1.0.0',
  register: async (server) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: HomeController.getAboutPage
    });
  }
};