const { log } = require('saber-log')

module.exports = {
  beforePlugins () {
    // set default theme config
    if (!this.config.themeConfig) this.config.themeConfig = {}
    this.config.themeConfig = Object.assign({
      lang: 'en-US',
      comments: {},
      personalInfo: {},
      defaultPages: {},
      header: {},
      plugins: {},
      pagination: {
        perPage: 5,
      },
    }, this.config.themeConfig)

    if (typeof this.config.themeConfig.lang === 'string') {
      try {
        require.resolve(`./langs/${this.config.themeConfig.lang}`)
      } catch (e) {
        this.config.themeConfig.lang = 'en-US'
        log.warn(`[saber-theme-meteorlxy] lang '${this.config.themeConfig.lang}' is not available, fallback to 'en-US'`)
      }
      this.config.themeConfig.lang = require(`./langs/${this.config.themeConfig.lang}`)
    }
  },

  filterPlugins (plugins) {
    if (!plugins.find(plugin => plugin.name === 'query-posts')) {
      plugins.push(require('saber-plugin-query-posts'))
    }
    if (!plugins.find(plugin => plugin.name === 'prismjs')) {
      plugins.push(require('saber-plugin-prismjs'))
    }
  },

  initPages () {
    this.pages.createPage({
      attributes: {
        type: 'page',
        layout: 'Home',
        permalink: '/',
        slug: '',
      },
      internal: {
        id: 'saber-theme-meteorlxy/home',
        isFile: false,
      }
    })
  
    this.pages.createPage({
      attributes: {
        type: 'page',
        layout: 'Posts',
        permalink: '/posts/',
        slug: 'posts',
      },
      internal: {
        id: 'saber-theme-meteorlxy/posts',
        isFile: false,
      }
    })
  },

  onCreatePage (page) {
    page.attributes.injectAllPosts = true
    if (!page.attributes.layout) {
      if (page.attributes.type === 'post') {
        page.attributes.layout = 'Post'
      } else {
        page.attributes.layout = 'Default'
      }
    }
  },
}
