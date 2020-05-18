module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/dynamic-scrum-demo/' :
    '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/_variables.scss"; @import "@/styles/__mixins.scss";'
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
