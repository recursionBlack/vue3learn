<template>
  <h3>Key属性添加到v-for中</h3>
  <p v-for="(item, index) in names" :key="index">{{ item }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const names = ref(['百战程序员', '尚学堂', 'IT'])

// 为了给vue一个提示，以便它追踪每个节点的标识，从而重用和重新排序现有的元素（而不是因为位置调整导致的重新渲染）
// 你需要为每个元素对应的块，提供一个唯一的key attribute：
</script>
