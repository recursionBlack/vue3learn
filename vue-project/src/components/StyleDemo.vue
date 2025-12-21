<template>
  <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">Style绑定1</p>
  <p :style="styleObject">Style绑定2</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeColor = ref('green')
const fontSize = ref(32)
const styleObject = ref({ color: 'red', fontSize: '30px' })
</script>
