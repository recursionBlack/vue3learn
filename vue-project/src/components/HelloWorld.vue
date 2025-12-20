<template>
  <div v-bind:id="dynamicId" :class="dynamicClass" v-bind:title="dynamicTitle">测试</div>
  <button :disabled="isButtonDisabled">Button</button>
  <div v-bind="objectofAttrs">编译</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dynamicClass: 'appClass',
      dynamicId: 'appId',
      dynamicTitle: undefined,
      isButtonDisabled: false,
      objectofAttrs: {
        id: 'appid',
        class: 'appclass',
      },
    }
  },
}
</script>

<style>
.appClass {
  color: red;
  font-size: 20px;
}
</style>
