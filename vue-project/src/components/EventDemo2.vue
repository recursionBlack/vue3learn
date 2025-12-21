<template>
  <h3>内联事件处理器</h3>
  <button @click="count++">Add {{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
