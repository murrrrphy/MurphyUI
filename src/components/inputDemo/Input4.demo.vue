<demo>
  错误提示样式!错误提示#用户使用error控制错误提示信息
</demo>

<template>
  <label>
    <Input model-value="赵六" error="格式错误，请输入正确格式。"/>
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