<template>
  <h3>ComponentA</h3>
  <ComponentB :title="title" :name="name" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentB from './ComponentB.vue'

const title = ref('标题')
const name = ref('iwen')
</script>
