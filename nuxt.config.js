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
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    },
    fallback: '404.html',
    routes: ['/']
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
