<template>
  <h3>列表渲染</h3>
  <p v-for="item in names" :key="item">{{ item }}</p>
  <p v-for="item of names" :key="item">{{ item }}</p>
  <p v-for="(item, index) in names" :key="item">{{ item }}-{{ index }}</p>
  <div>
    <p v-for="value in userInfo" :key="value">{{ value }}</p>
    <p v-for="(value, key, index) in userInfo" :key="value">{{ key }}--{{ value }}--{{ index }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const names = ref(['百战程序员', '尚学堂', 'IT'])
const userInfo = ref({ name: 'iwen', age: 20, sex: 'man' })
</script>
