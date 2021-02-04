<demo>
  禁用按钮示例!不可用状态#添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
</demo>

<template>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用文本按钮</Button>
</template>

<script lang="ts">
  import Button from '../../components/Button.vue';

  export default {
    name: 'Button4.demo.vue',
    components: {
      Button
    }
  };
</script>

<style scoped>

</style>