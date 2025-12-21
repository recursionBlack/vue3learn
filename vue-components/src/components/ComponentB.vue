<template>
  <h3>ComponentB</h3>
  <p>{{ props.title }}</p>
  <p>{{ props.age }}</p>
  <p>{{ props.name }}</p>
</template>

<script setup lang="ts">
//import { ref } from 'vue'
const props = defineProps<{
  title: string
  age?: number // 默认值，你不传我自己填一个
  name: string
}>()

// 警告！props是只读的！
// 选项式api处理默认值问题时，是有问题的
</script>
