import AboutController from './controller.js';

export default {
  name: 'aboutRoutes',
  version: '1.0.0',
  register: async (server) => {
    server.route({
      method: 'GET',
      path: '/about',
      handler: AboutController.getAboutPage
    });
  }
};