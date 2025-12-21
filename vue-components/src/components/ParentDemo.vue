<template>
  <h3>Parent</h3>
  <ChildDemo :title="message" :age="age" :names="names" :userInfo="userInfo" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildDemo from './ChildDemo.vue'

const message = ref('Parent数据!')

const age = ref(20)

const names = ref(['iwen', 'ime', 'frank'])

const userInfo = ref({ name: 'iwen', age: 20 })

// props传递数据，只能从父级传递到子级，不能反向传递
</script>
