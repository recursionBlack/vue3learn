<template>
  <h3>{{ itbaizhan.name }}</h3>
  <p>{{ hasContent }}</p>
  <p>{{ hasContent2() }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const itbaizhan = ref({ name: '百战程序员', content: ['前端', 'java', 'python'] })

// 计算属性来处理，主要解决模板语法（{{}}）过于复杂的问题
const hasContent = computed(() => {
  // 必须 return 结果（计算属性的核心：返回处理后的值）
  return itbaizhan.value.content.length > 0 ? 'Yes' : 'No'
})

// 函数或方法
const hasContent2 = () => {
  return itbaizhan.value.content.length > 0 ? 'Yes' : 'No'
}

// 计算属性 vs 缓存方法
// 根据上面的例子，可以看到，二者可以达到相同的功能，那为啥还要引入一个计算属性的概念呢？
// 计算属性值，会基于响应式依赖被缓存，一个计算属性仅会在其响应式依赖更新时，才会重新计算
// 方法调用总是会在重渲染发生时再次执行函数
</script>
