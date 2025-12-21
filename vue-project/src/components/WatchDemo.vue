<template>
  <h3>侦听器</h3>
  <p>{{ message }}</p>
  <button @click="updataHandle">修改数据</button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const message = ref('hello')

const updataHandle = () => {
  message.value = 'world'
}

// message必须与响应式数据message一致，newValue是改变之后的数据，oldValue是改变之前的数据
watch(message, (newValue, oldValue) => {
  // 数据发生变化后，自动执行的函数
  console.log(newValue, oldValue)
})

//watch只能监听响应式数据，也就是ref或reactive包裹着的数据
</script>
