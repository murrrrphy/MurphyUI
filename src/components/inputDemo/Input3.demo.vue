<demo>
  disabled样式!不可操作#无法点击输入框
</demo>

<template>
  <label>
    <Input model-value="王五" disabled/>
  </label>
</template>

<script>
  import Input from '../../lib/Input.vue'

  export default {
    name: "Input1.demo",
    components: {Input},
  }
</script>

<style scoped>

</style>