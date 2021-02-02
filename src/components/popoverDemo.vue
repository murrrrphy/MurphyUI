<template>
  <h1>Popover 组件示例 </h1>
  <Demo :component="Popover1Demo"/>
</template>

<script lang="ts">
  import Popover1Demo from './popoverDemo/Popover1.demo.vue';
  import Demo from '../lib/Demo.vue';

  export default {
    name: 'PopoverDemo.vue',
    components: {
      Popover1Demo,
      Demo
    },
    setup() {
      return {
        Popover1Demo
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "index";

  $border-color: #d9d9d9;
  .demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    > h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }

    &-component {
      padding: 16px;
    }

    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
    }

    &-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;

      > pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
</style>