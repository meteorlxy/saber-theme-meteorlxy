import Layout from './components/Layout.vue'
import 'prismjs/themes/prism.css'
import 'saber-highlight-css/default.css'

export default ({
  setRootComponent,
  Vue,
}) => {
  setRootComponent(Layout)
  Vue.mixin({
    computed: {
      $pageObj () {
        return this.$route.matched[0].instances.default && this.$route.matched[0].instances.default.$page || { attributes: {} }
      },

      $attributes () {
        return this.$pageObj && this.$pageObj.attributes || {}
      },

      $posts () {
        return []
      },
    },
  })
}
