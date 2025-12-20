<template>
  <h3>条件渲染v-if</h3>
  <div v-if="flag">你能看见我吗</div>
  <div v-else>那你还是看看我吧</div>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
  <div v-show="flag">你还想看我吗</div>
</template>

<script lang="ts">
export default {
  data() {
    return { flag: true, type: 'D' }
  },
}
// 为什么有了v-if还要增加v-show？
// 因为v-if是惰性的，如果初次渲染为false，则不会做任何事，只有条件区块首先变为true时，才会渲染
// v-show则是始终被渲染，只是根据条件决定是否显示，而v-if是根据条件进行了销毁与重建，
// 总的来说，频繁切换是否显示，用v-show更好，它只渲染一次，但如果需要else，则只能用v-if
</script>
