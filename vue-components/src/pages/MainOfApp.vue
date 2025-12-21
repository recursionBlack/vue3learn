<template>
  <div class="main">
    <h3>Main</h3>
    <ArticleOfApp />
    <ArticleOfApp />
  </div>
</template>

<script setup lang="ts">
import ArticleOfApp from './ArticleOfApp.vue'
</script>

<style scoped>
.main {
  float: left;
  width: 70%;
  height: 600px;
  border: 5px solid #999;
  box-sizing: border-box;
}
</style>
