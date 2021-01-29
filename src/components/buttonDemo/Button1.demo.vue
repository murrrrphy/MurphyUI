<demo>
  Button 样式示例!按钮类型#按钮有三种类型：普通按钮、链接按钮和文本按钮。
</demo>

<template>
  <Button theme="button">普通按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button theme="text">文本按钮</Button>
</template>

<script lang="ts">
  import Button from '../../lib/Button.vue';

  export default {
    name: 'Button1.demo.vue',
    components: {
      Button
    }
  };
</script>

<style scoped>

</style>