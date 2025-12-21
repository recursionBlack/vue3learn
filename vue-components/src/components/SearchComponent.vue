<template>搜索：<input type="text" v-model="search" /></template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const search = ref()

const emit = defineEmits<{ (e: 'searchEvent', msg: string): void }>()

watch(search, (newValue) => {
  emit('searchEvent', newValue)
})
</script>
