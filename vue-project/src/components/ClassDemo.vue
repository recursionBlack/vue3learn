<template>
  <h3>Class样式绑定</h3>
  <p :class="{ active: isActive, 'text-danger': hasError }">Class样式绑定</p>
  <p :class="classObject">Class样式绑定2</p>
  <p :class="[arrActive, arrHasError]">Class样式绑定3</p>
  <p :class="[isActive ? 'active' : '']">Class样式绑定4</p>
  <!-- 数组里再嵌套对象 -->
  <p :class="[isActive ? 'active' : '', { 'text-danger': hasError }]">Class样式绑定5</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(true)
const hasError = ref(true)
const classObject = ref({ active: isActive, 'text-danger': hasError })
const arrActive = ref('active')
const arrHasError = ref('text-danger')

// 由于class比较特殊，vue专门针对class的绑定进行了增强，别的属性，只能绑定字符串，
// 而class，还能绑定对象，和数组，以应对各种复杂的情况
</script>

<style>
.active {
  font-size: 32px;
}
.text-danger {
  color: red;
}
</style>
