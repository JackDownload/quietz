export default {
  ssr: true,
  target: 'static',
  modules: [
    '@nuxt/content'
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    './assets/css/app.scss'
  ],
  plugins: [
  ],
 
  content: {
    // Options
  },
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/icons', pathPrefix: false }
  ],
  buildModules: [
    'nuxt-purgecss'
  ],
  messages: {
    error_404: 'Page not found'
  },
  build: {
    // analyze: true
  },
  generate: {
    fallback: '404.html',
    routes: ['/'],
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./content/blog').map(file => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/blog/${file}`),
        };
      });
    },
  },
  // top level options for packages
  purgeCSS: {
    // enabled: true,
    paths: [
      './icons/**/*.vue',
      './node_modules/bootstrap/dist/js/bootstrap.js'
    ],
    extractors: () => []
  }
}
