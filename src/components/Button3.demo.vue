<demo>
  按钮等级示例!按钮等级#按钮有普通、主要、默认三种等级。
  通过设置level为main、danger分别把按钮设为主要、危险两种等级。
  若不设置level，默认为普通。
</demo>

<template>
  <div>
    <Button>普通按钮</Button>
    <Button level="main">主要按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link">普通按钮</Button>
    <Button theme="link" level="main">主要按钮</Button>
    <Button theme="link" level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="text">普通按钮</Button>
    <Button theme="text" level="main">主要按钮</Button>
    <Button theme="text" level="danger">危险按钮</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    name: 'Button3.demo.vue',
    components: {
      Button
    }
  };
</script>

<style scoped>

</style>