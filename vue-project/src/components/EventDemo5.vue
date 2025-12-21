<template>
  <h3>事件传参</h3>
  <p @click="getNameHandler(item, $event)" v-for="(item, index) in names" :key="index">
    {{ item }}
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const names = ref(['iwen', 'ime', 'frank'])
// 同时传参和获取event对象，调用地方要用$event
const getNameHandler = (name: string, e: Event) => {
  console.log(name)
  console.log(e)
}
</script>
