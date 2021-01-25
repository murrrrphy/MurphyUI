<demo>
  按钮加载示例!加载中状态#添加 loading 属性即可让按钮处于加载状态。
</demo>

<template>
  <Button loading>加载中</Button>
  <Button level="main" loading>加载中</Button>
  <Button level="danger" loading>加载中</Button>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    name: 'Button5.demo.vue',
    components: {
      Button
    }
  };
</script>

<style scoped>

</style>