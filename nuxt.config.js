module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jennifer Cain and Eric Schnetzer | July 20, 2019',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The wedding of Jennifer Cain and Eric Schnetzer' },
      { name: 'google-site-verification', content: 'Bu31_Jp5FIz4DwBJnt3GCbzf3sU6jeLWanFtRmwsqsc' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dancing+Script' }
    ]
  },
  css: [
      '@/assets/css/style.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'rgb(253, 255, 137)' },
  plugins: [
    { src: '~/plugins/fontawesome.js' },
    { src: '~/plugins/moment.js' },
    { src: '~/plugins/vueper-slides.js' }
  ],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-126963860-1'
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

