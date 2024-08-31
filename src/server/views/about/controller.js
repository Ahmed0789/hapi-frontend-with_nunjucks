export default {
  getAboutPage: (request, h) => {
    return h.view('about/index.njk', {
      title: 'About Us',
      description: 'This is the about page for our Hapi-Nunjucks application.'
    });
  }
};