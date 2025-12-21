<template>
  <h3>Main</h3>
  <p>搜索内容为：{{ search }}</p>
  <SearchComponent @search-event="getSearch" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchComponent from './SearchComponent.vue'

const search = ref()

const getSearch = (msg: string) => {
  search.value = msg
}
</script>
