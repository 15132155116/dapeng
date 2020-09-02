<template>
    <div id="nav">
        <div class="middle">
            <left></left>
            <right></right>
        </div>

    </div>
</template>
<script>
import left from '../components/left.vue'
import right from '../components/right.vue'
export default {
    components: {
        left,
        right
    }
}
</script>
<style>
  body {
    background-color: #eef0f3;
  }
  #nav {
    width: 1140px;
    margin: 0 auto;
  }
  .middle {
    background-color: #fff;
    width: 1140px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>