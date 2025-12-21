<template>
  <h3>组件事件</h3>
  <ComponentEventChild @someEvent="getHandle" />
</template>

<script setup lang="ts">
import ComponentEventChild from './ComponentEventChild.vue'

const getHandle = (msg: string) => {
  console.log('触发了', msg)
}
</script>
