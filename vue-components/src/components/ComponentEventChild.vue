<template>
  <h3>Child</h3>
  <button @click="clickEventHandle">数据冒泡</button>
</template>

<script setup lang="ts">
// 写法 2：TS 类型标注（推荐，支持事件参数类型校验）
const emit = defineEmits<{
  (e: 'someEvent', msg: string): void // someEvent 带 string 类型参数
}>()

const clickEventHandle = () => {
  emit('someEvent', 'child数据')
}

// 组件之间数据传递的方案：
// 父传子： props
// 子传父： emit
</script>
