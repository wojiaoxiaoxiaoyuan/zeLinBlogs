<template>
  <div class="adminLayout">
    <div class="adminLayout_header">
      <Navigation></Navigation>
    </div>
    <div class="adminLayout_main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navigation from './header'
export default {
  name: 'adminLayout',

  components: { Navigation }
}
</script>

<style lang="stylus" scoped>
  .adminLayout
    width 100%
    height 100%
    .adminLayout_header
      width 100%
      height 50px
      background linear-gradient(left, red, yellow 15%, green 30%)
    .adminLayout_main
      width 100%
      height calc(100% - 50px)
</style>
