<template>
  <!--这是一个注释，哈哈哈-->
  <h3>模板语法</h3>
  <p>{{ msg }}</p>
  <p>{{ hello }}</p>
  <p>{{ rawHtml }}</p>
  <!--原始html-->
  <p v-html="rawHtml"></p>
</template>

<script lang="ts">
export default {
  data() {
    return {
      msg: '神奇的语法',
      hello: 'hello world',
      rawHtml: "<a href='https://baidu.com'>百战程序员</a>",
    }
  },
}
</script>
