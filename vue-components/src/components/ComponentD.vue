<template>
  <h3>ComponentD</h3>
  <p>{{ props.onEvent('子元素数据') }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{ onEvent: (msg: string) => void }>()
</script>
