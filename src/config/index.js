export const config = {
  server: {
    port: process.env.PORT || 3000,
    host: 'localhost'
  },
  views: {
    path: 'src/server/views',
    options: {
      watch: false
    }
  }
};