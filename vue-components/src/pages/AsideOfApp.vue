<template>
  <div class="aside">
    <h3>Aside</h3>
    <ItemOfApp />
    <ItemOfApp />
    <ItemOfApp />
  </div>
</template>

<script setup lang="ts">
import ItemOfApp from './ItemOfApp.vue'
</script>

<style scoped>
.aside {
  float: right;
  width: 30%;
  height: 600px;
  border: 5px solid #999;
  box-sizing: border-box;
}
</style>
