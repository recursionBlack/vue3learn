<template>
  <h3>ComponentC</h3>
  <p>父元素：{{ message }}</p>
  <ComponentD :onEvent="dataFn" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentD from './ComponentD.vue'

const message = ref()
const dataFn = (data: string) => {
  message.value = data
}

// 通过向子元素传递一个需要填入参数的函数，可以秘密的将子元素的数据，带回到父亲元素
</script>
