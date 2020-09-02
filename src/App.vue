<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import mainpart from './views/mainpart.vue'
import login from './views/login.vue'
export default {
  components: {
    mainpart: mainpart,
    login: login
  }
}
</script>
<style>
</style>

