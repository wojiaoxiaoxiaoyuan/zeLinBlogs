<template>
  <div class="home"></div>
</template>

<script>
import api from 'shared/api/test'
export default {
  name: 'home',

  mounted () {
    let params = {
      method: api.test,
      test: 'qwerq',
      asdf: [1, 2, 3]
    }
    this.axios.get(params).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
