<template>
  <h1>Collapse 组件</h1>
  <div class="demoWrapper">
    <div class="inlineBlock">
      <Demo :component="Collapse1Demo"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Collapse1Demo from './collapseDemo/Collapse1.demo.vue';
  import Demo from '../components/Demo.vue';
  import Table from '../components/Table.vue';

  export default {
    name: 'CollapseDemo',
    components: {
      Table,
      Collapse1Demo,
      Demo
    },
    setup() {
      return {
        Collapse1Demo
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/lib/index";
</style>