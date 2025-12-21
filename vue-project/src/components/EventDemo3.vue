<template>
  <h3>方法事件处理器</h3>
  <button @click="addCount">Add {{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function addCount(e: Event) {
  // e是event对象
  // vue的event对象，就是原生Js的Event对象
  // 类型守卫：确保 e.target 是 HTML 元素
  if (e.target instanceof HTMLElement) {
    e.target.innerHTML = 'Add ' + count.value
  }
  count.value++
}
</script>
