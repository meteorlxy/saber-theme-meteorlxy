<template>
  <div id="vuepress-theme-meteorlxy">
    <Iconfont />

    <TheHeader />

    <TheMain>
      <slot />
    </TheMain>

    <TheFooter />
  </div>
</template>

<script>
import Iconfont from '../components/Iconfont.vue'
import TheHeader from '../components/TheHeader.vue'
import TheMain from '../components/TheMain.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'ThemeMeteorlxy',

  components: {
    Iconfont,
    TheHeader,
    TheMain,
    TheFooter,
  },
}
</script>

<style lang="stylus" src="../styles/index.styl" />
