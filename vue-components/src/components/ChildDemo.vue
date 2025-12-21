<template>
  <h3>Child</h3>
  <p>{{ props.title }}</p>
  <p>{{ props.demo }}</p>
</template>

<script setup lang="ts">
// defineProps用来定义一个对象，该对象可以从父类接收数据
const props = defineProps(['title', 'demo'])
</script>
