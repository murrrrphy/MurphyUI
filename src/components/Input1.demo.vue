<demo>
  111
</demo>

<template>
  <label>
    <Input value="张三" disabled/>
    <Input value="李四" readonly/>
    <Input value="王五" error="姓名不能少于两个字"/>
  </label>
</template>

<script>
  import Input from '../lib/Input.vue'

  export default {
    name: "Input1.demo",
    components: {Input}
  }
</script>

<style scoped>

</style>