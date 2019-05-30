<template>
  <div class="custom-pages">
    <div class="main-div">
      <h2>Table of Contents</h2>

      <TOC />
    </div>

    <div class="main-div">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomPages',
}
</script>
