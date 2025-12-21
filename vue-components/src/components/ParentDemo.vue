<template>
  <h3>Parent</h3>
  <ChildDemo :title="message" demo="测试" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildDemo from './ChildDemo.vue'

const message = ref('Parent数据!')

// props传递数据，只能从父级传递到子级，不能反向传递
</script>
