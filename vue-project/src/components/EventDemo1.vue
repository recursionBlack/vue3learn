<template>
  <h3>方法事件处理器</h3>
  <button @click="addCount">Add {{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function addCount() {
  count.value++
}
</script>
