<template>
  <h1>Grid 栅格</h1>
  <Grid1Demo />
</template>

<script lang="ts">
  import Grid1Demo from './gridDemo/grid1.demo.vue';
  import Table from '../lib/Table.vue';

  export default {
    name: 'ButtonDemo',
    components: {
      Table,
      Grid1Demo
    },
    setup() {
      // const columns1 = [
      //   {
      //     title: '属性',
      //     key: 'property'
      //   },
      //   {
      //     title: '说明',
      //     key: 'illustrate'
      //   },
      //   {
      //     title: '类型',
      //     key: 'type'
      //   },
      //   {
      //     title: '默认值',
      //     key: 'default'
      //   }
      // ]
      // const data1 = [
      //   {
      //     property: 'theme',
      //     illustrate: '设置按钮类型，可选值为 button link text',
      //     type: 'string',
      //     default: 'button'
      //   },
      //   {
      //     property: 'size',
      //     illustrate: '设置按钮大小，可选值为 small big 或者不设',
      //     type: 'string',
      //     default: 'default'
      //   },
      //   {
      //     property: 'level',
      //     illustrate: '设置按钮类型，可选值为 main danger 或者不设',
      //     type: 'string',
      //     default: 'default'
      //   },
      //   {
      //     property: 'disabled',
      //     illustrate: '按钮失效状态',
      //     type: 'boolean',
      //     default: 'false'
      //   },
      //   {
      //     property: 'loading',
      //     illustrate: '设置按钮载入状态',
      //     type: 'boolean',
      //     default: 'false'
      //   }
      // ]
      // const columns2 = [
      //   {
      //     title: '事件名称',
      //     key: 'property'
      //   },
      //   {
      //     title: '说明',
      //     key: 'illustrate'
      //   },
      //   {
      //     title: '回调参数',
      //     key: 'callback'
      //   }
      // ]
      // const data2 = [
      //   {
      //     property: 'click',
      //     illustrate: '点击按钮时的回调',
      //     callback: '(event) => void'
      //   }
      // ]
      return {
        Grid1Demo
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>