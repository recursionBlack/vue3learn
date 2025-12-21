<template>
  <div ref="container" class="container">{{ content }}</div>
  <input type="text" ref="username" />
  <button @click="getElementHandle">获取元素</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref('内容')

// 步骤 1：声明引用变量，类型标注为 HTMLElement | null（TS 可选）
const container = ref<HTMLElement | null>(null)
const username = ref<HTMLInputElement | null>(null)

const getElementHandle = () => {
  console.log(container.value)
  if (container.value) {
    // innerHTML是原生js的属性
    container.value.innerHTML = '哈哈哈'
    if (username.value) {
      console.log(username.value.value)
    }
  }
}
/**
 * 内容改变：用{{模板语法}}；
 * 属性改变：用v-bind:的指令
 * 事件：v-on：或@
 * 虽然上面三种，已经可以解决绝大多数对DOM操作的情况
 * 但某些情况下，我们仍然需要直接访问底层的DOM元素
 * 要实现这点，就需要ref attribute了
 *
 * 如果没有特别的需求，不要直接操作DOM
 */
</script>
