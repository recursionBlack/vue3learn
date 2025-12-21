<template>
  <h3>Child</h3>
  <p>{{ props.title }}</p>
  <p>{{ props.age }}</p>
  <ul>
    <li v-for="(item, index) in props.names" :key="index">{{ item }}</li>
  </ul>
  <p>{{ userInfo.name }}</p>
  <p>{{ userInfo.age }}</p>
</template>

<script setup lang="ts">
// defineProps用来定义一个对象，该对象可以从父类接收数据
const props = defineProps<{
  title: string // 字符串类型
  age: number // 数字类型
  names: string[] // 字符串数组类型（方案1传递时解包的情况）
  userInfo: { name: string; age: number }
}>()

console.log(props)
</script>
