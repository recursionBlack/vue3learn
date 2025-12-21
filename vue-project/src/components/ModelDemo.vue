<template>
  <h3>表单输入绑定</h3>
  <form>
    <input type="text" v-model.lazy="message" />
    <p>{{ message }}</p>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref()
const checked = ref()
</script>
