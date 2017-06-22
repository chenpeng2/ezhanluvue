<template>
  <div id="routeTest">
    <h2>路由知识</h2>
    <router-link to="/routeTest/foo/one">To foo</router-link>
    <router-link to="/routeTest/foo/two">To tee</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name:'routeTest'
  }
</script>

<style lang="css">
</style>
