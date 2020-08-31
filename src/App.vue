<template>
  <div id="app">
    <div id="nav">
      <mainpart class="middle"></mainpart>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import mainpart from './views/mainpart.vue'
export default {
  components: {
    mainpart: mainpart
  }
}
</script>

<style>
  #nav {
    width: 1140px;
    margin: 0 auto;
  }
  .middle {
    width: 1140px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
