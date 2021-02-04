<template>
  <h1>Popover 组件示例 </h1>
  <div class="demoWrapper">
    <div class="inlineBlock">
      <Demo :component="Popover1Demo"/>
      <Demo :component="Popover2Demo"/>
    </div>
    <div class="inlineBlock">
      <Demo :component="Popover3Demo"/>2
      <Demo :component="Popover4Demo"/>
    </div>
  </div>
  <h2>API</h2>
  <Table :columns="columns" :data="data"/>
</template>

<script lang="ts">
  import Popover1Demo from './popoverDemo/Popover1.demo.vue';
  import Popover2Demo from './popoverDemo/Popover2.demo.vue';
  import Popover3Demo from './popoverDemo/Popover3.demo.vue';
  import Popover4Demo from './popoverDemo/Popover4.demo.vue';
  import Demo from '../lib/Demo.vue';
  import Table from '../lib/Table.vue';

  export default {
    name: 'PopoverDemo.vue',
    components: {
      Table,
      Popover1Demo,
      Popover2Demo,
      Popover3Demo,
      Popover4Demo,
      Demo
    },
    setup() {
      const columns = [
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
      const data = [
        {
          property: 'content',
          illustrate: '卡片内容',
          type: 'string | slot | VNode',
          default: '-'
        },
        {
          property: 'position',
          illustrate: '气泡位置',
          type: 'top | bottom | left | right',
          default: 'top'
        },
        {
          property: 'trigger',
          illustrate: '触发方式',
          type: 'click | hover',
          default: 'click'
        },
        {
          property: 'close',
          illustrate: '关闭接口',
          type: 'Function',
          default: '-'
        },
      ]
      return {
        Popover1Demo, Popover2Demo, Popover3Demo, Popover4Demo,columns,data
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