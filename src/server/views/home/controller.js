export default {
    getAboutPage: (request, h) => {
      return h.view('home/index.njk', {
        title: 'Home Page',
        description: 'This is the Home page for our Hapi-Nunjucks application.'
      });
    }
  };