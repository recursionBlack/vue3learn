<template>
  <h3>方法事件处理器</h3>
  <button @click="addCount('hello')">Add {{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function addCount(msg: string) {
  // e是event对象
  // vue的event对象，就是原生Js的Event对象
  console.log(msg)

  count.value++
}
</script>
