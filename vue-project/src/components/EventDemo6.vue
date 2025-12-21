<template>
  <h3>事件修饰符</h3>
  <a @click.prevent="clickHandle" href="https://itbaizhan.com">百战程序员</a>
  <div @click="clickDiv">
    <p @click.stop="clickP">测试冒泡</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clickHandle = (e: Event) => {
  //阻止默认事件，导致不会跳转到连接上
  //e.preventDefault()  // 用修饰符.prevent阻止了该事件
  console.log('点击了')
}

const clickDiv = () => {
  console.log('DIV')
}

const clickP = () => {
  console.log('P')
}
</script>
