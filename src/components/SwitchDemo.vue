<template>
  <h1>Switch 组件示例 </h1>
  <div class="demoWrapper">
    <div class="inlineBlock">
      <Demo :component="Switch1Demo"/>
      <Demo :component="Switch2Demo"/>
    </div>
    <div class="inlineBlock">
      <Demo :component="Switch3Demo"/>
    </div>
  </div>
  <h2>API</h2>
  <Table :columns="columns1" :data="data1"/>
  <h2>事件</h2>
  <Table :columns="columns2" :data="data2"/>
</template>

<script lang="ts">
  import Switch1Demo from './switchDemo/Switch1.demo.vue';
  import Switch2Demo from './switchDemo/Switch2.demo.vue';
  import Switch3Demo from './switchDemo/Switch3.demo.vue';
  import Table from '../lib/Table.vue';
  import Demo from '../lib/Demo.vue';

  export default {
    name: 'SwitchDemo.vue',
    components: {
      Demo,
      Table
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
          property: 'value(v-model)',
          illustrate: '指定当前组件是否选中',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'disabled',
          illustrate: '是否禁用',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'leftChild',
          illustrate: '选中时的内容',
          type: 'string',
          default: '-'
        },
        {
          property: 'rightChild',
          illustrate: '未选中时的内容',
          type: 'string',
          default: '-'
        },
      ]
      const columns2 = [
        {
          title: '事件名称',
          key: 'property'
        },
        {
          title: '说明',
          key: 'illustrate'
        },
        {
          title: '回调参数',
          key: 'callback'
        }
      ]
      const data2 = [
        {
          property: 'change',
          illustrate: '变化时回调函数',
          callback: 'Function(checked:Boolean, event: Event)'
        },
        {
          property: 'click',
          illustrate: '点击时回调函数',
          callback: 'Function(checked:Boolean, event: Event)'
        }
      ]
      return {
        Switch1Demo,
        Switch2Demo,
        Switch3Demo,
        columns1,
        data1,
        columns2,
        data2
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