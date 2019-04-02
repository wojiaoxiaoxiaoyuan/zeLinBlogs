<template>
  <div class="Header">
    <div class="logo">
      <img src="/static/image/home/logo.png" alt="">
    </div>
    <ul class="nav">
      <li><span>主页</span></li>
      <li><span>音乐</span></li>
      <li><span>家庭</span></li>
      <li><span>生活</span></li>
      <li><span>小袁圈</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  .Header
    width 1024px
    height 100%
    margin 0 auto
    overflow hidden
    .logo
      float left
      height 100%
      margin-right 60px
      img
        height 40px
        margin-top 5px
    .nav
      line-height 50px
      li
        float left
        margin-right 30px
        font-size 18px
        font-weight bold
        letter-spacing 2px
        transition transform .2s
        transform rotateZ(0deg)
        cursor pointer
        &:hover
          transform rotateZ(30deg)
</style>
