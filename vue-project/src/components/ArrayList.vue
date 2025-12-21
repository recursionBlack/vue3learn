<template>
  <h3>数组侦听</h3>
  <button @click="addListHandle">添加数据</button>
  <ul>
    <li v-for="(item, index) in names" :key="index">{{ item }}</li>
  </ul>
  <button @click="concatHandle">合并数组</button>
  <h3>数组1</h3>
  <p v-for="(item, index) in nums1" :key="index">{{ item }}</p>
  <h3>数组2</h3>
  <p v-for="(item, index) in nums2" :key="index">{{ item }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const names = ref(['iwen', 'ime', 'frank'])
const nums1 = ref([1, 2, 3, 4, 5])
const nums2 = ref([6, 7, 8, 9, 10])

const addListHandle = () => {
  // 引起ui的自动变化
  names.value.push('sakura')
}

const concatHandle = () => {
  // 必须有这个赋值操作，才可以更新ui
  nums1.value = nums1.value.concat(nums2.value)
}

// 数组变化，有两类方法：变更方法，和替换一个数组
// 变更方法类方法，修改数组时，立马触发ui更新
// 替换数组类方法，修改数组，ui仍然不会变化
// 后者需要注意：filter，concat，slice
</script>
