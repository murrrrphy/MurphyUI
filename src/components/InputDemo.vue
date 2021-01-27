<template>
  <h1>Input 输入框</h1>
  <div class="demoWrapper">
    <div class="inlineBlock">
      <Demo :component="InputDemo1"/>
    </div>
  </div>
</template>

<script>
  import Demo from './Demo.vue';
  import InputDemo1 from './Input1.demo.vue';

  export default {
    name: "InputDemo",
    components: {
      Demo,InputDemo1
    },
    setup() {
      return {InputDemo1}
    }
  }
</script>

<style lang="scss" scoped>
  @import "index";
</style>