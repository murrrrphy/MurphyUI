<demo>
  只读示例!只读#只能看到输入框中的值，无法修改。
</demo>

<template>
  <label>
    <Input model-value="李四" readonly/>
  </label>
</template>

<script>
  import Input from '../lib/Input.vue'

  export default {
    name: "Input1.demo",
    components: {Input},
  }
</script>

<style scoped>

</style>