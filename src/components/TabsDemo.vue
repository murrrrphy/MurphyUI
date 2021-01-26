<template>
  <h1>Tabs 示例</h1>
  <div class="demoWrapper">
    <Demo :component="TabsDemo1"/>
    <Demo :component="TabsDemo2"/>
  </div>
  <h2>API</h2>
  <h3>Tabs</h3>
  <Table :columns="columns1" :data="data1"/>
  <h3>Tab</h3>
  <Table :columns="columns2" :data="data2"/>
</template>

<script lang="ts">
  import Demo from './Demo.vue';
  import TabsDemo1 from './Tabs1.demo.vue';
  import TabsDemo2 from './Tabs2.demo.vue';
  import Table from '../lib/Table.vue';

  export default {
    name: 'TabsDemo',
    components: {
      Table,
      Demo,
      TabsDemo1,
      TabsDemo2
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
          illustrate: '当前激活Tab的title',
          type: 'string',
          default: '第一个Tab'
        },
        {
          property: 'disable',
          illustrate: '选择禁用某个Tab，值为某个Tab的title',
          type: 'string',
          default: '-'
        }
      ]
      const columns2 = [
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
      const data2 = [
        {
          property: 'title',
          illustrate: 'Tab的名称',
          type: 'string',
          default: '-'
        }
      ]
      return {
        columns1,
        data1,
        columns2,
        data2,
        TabsDemo1,
        TabsDemo2
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "index";
</style>