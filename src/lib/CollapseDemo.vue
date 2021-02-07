<template>
  <h1>Collapse 组件</h1>
  <div class="demoWrapper">
    <div class="inlineBlock">
      <Demo :component="Collapse1Demo"/>
      <Demo :component="Collapse3Demo"/>
    </div>
    <div class="inlineBlock">
      <Demo :component="Collapse2Demo"/>
    </div>
  </div>
  <h2>API</h2>
  <h3>Collapse</h3>
  <Table :columns="columns1" :data="data1"/>
  <h3>CollapseItem</h3>
  <Table :columns="columns1" :data="data2"/>
</template>

<script lang="ts">
  import Collapse1Demo from './collapseDemo/Collapse1.demo.vue';
  import Collapse2Demo from './collapseDemo/Collapse2.demo.vue';
  import Collapse3Demo from './collapseDemo/Collapse3.demo.vue';
  import Demo from '../components/Demo.vue';
  import Table from '../components/Table.vue';

  export default {
    name: 'CollapseDemo',
    components: {
      Table,
      Collapse1Demo,
      Collapse2Demo,
      Collapse3Demo,
      Demo
    },
    setup() {
      const columns1 = [
        {
          title: '参数',
          key: 'property'
        },
        {
          title: '说明',
          key: 'illustrate'
        },
        {
          title: '类型',
          key: 'type'
        },
        {
          title: '默认值',
          key: 'default'
        }
      ]
      const data1 = [
        {
          property: 'selected(v-model)',
          illustrate: '当前激活tab面板的name',
          type: 'Array',
          default: '[]'
        },
        {
          property: 'single',
          illustrate: '手风琴模式',
          type: 'boolean',
          default: 'false'
        },
      ]
      const data2 = [
        {
          property: 'title',
          illustrate: '面板标题',
          type: 'string',
          default: '-'
        },
        {
          property: 'name',
          illustrate: '对应的selected',
          type: 'string',
          default: '-'
        }
      ]
      return {
        Collapse1Demo, Collapse2Demo, Collapse3Demo,columns1,data1,data2
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/lib/index";
</style>