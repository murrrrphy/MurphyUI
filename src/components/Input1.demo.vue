<demo>
  基本样式!基本使用#基本使用，框内的值用modelValue控制，可用v-model双向绑定。
</demo>

<template>
  <label>
    <Input v-model:model-value="message"/>
  </label>
</template>

<script>
  import Input from '../lib/Input.vue'
  import {ref} from 'vue'

  export default {
    name: "Input1.demo",
    components: {Input},
    setup() {
      const message = ref('张三')
      return {message}
    }
  }
</script>

<style scoped>

</style>