<template>
  <h1>Button 按钮</h1>
  <div class="demoWrapper">
    <div class="inlineBlock">
      <Demo :component="Button1Demo"/>
      <Demo :component="Button3Demo"/>
      <Demo :component="Button4Demo"/>
    </div>
    <div class="inlineBlock">
      <Demo :component="Button2Demo"/>
      <Demo :component="Button5Demo"/>
    </div>
  </div>
  <h2>API</h2>
  <p>
    通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：theme -> level -> size -> loading -> disabled。

    按钮的属性说明如下：
  </p>
  <Table :columns="columns1" :data="data1"/>
  <h2>事件</h2>
  <Table :columns="columns2" :data="data2"/>
  <p>
    支持原生 button 的其他所有属性。
  </p>
</template>

<script lang="ts">
  import Button1Demo from './buttonDemo/Button1.demo.vue';
  import Button2Demo from './buttonDemo/Button2.demo.vue';
  import Button3Demo from './buttonDemo/Button3.demo.vue';
  import Button4Demo from './buttonDemo/Button4.demo.vue';
  import Button5Demo from './buttonDemo/Button5.demo.vue';
  import Demo from '../lib/Demo.vue';
  import Table from '../lib/Table.vue';

  export default {
    name: 'ButtonDemo',
    components: {
      Table,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      Demo
    },
    setup() {
      const columns1 = [
        {
          title: '属性',
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
          property: 'theme',
          illustrate: '设置按钮类型，可选值为 button link text',
          type: 'string',
          default: 'button'
        },
        {
          property: 'size',
          illustrate: '设置按钮大小，可选值为 small big 或者不设',
          type: 'string',
          default: 'default'
        },
        {
          property: 'level',
          illustrate: '设置按钮类型，可选值为 main danger 或者不设',
          type: 'string',
          default: 'default'
        },
        {
          property: 'disabled',
          illustrate: '按钮失效状态',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'loading',
          illustrate: '设置按钮载入状态',
          type: 'boolean',
          default: 'false'
        }
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
          property: 'click',
          illustrate: '点击按钮时的回调',
          callback: '(event) => void'
        }
      ]
      return {
        Button1Demo,
        Button2Demo,
        Button3Demo,
        Button4Demo,
        Button5Demo,
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
</style>