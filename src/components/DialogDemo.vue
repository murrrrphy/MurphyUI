<template>
  <h1>Dialog 示例</h1>
  <div class="demoWrapper">
    <div class="inlineBlock">
      <Demo :component="Dialog1Demo"/>
      <Demo :component="Dialog3Demo"/>
    </div>
    <div class="inlineBlock">
      <Demo :component="Dialog2Demo"/>
    </div>
  </div>
  <h2>API</h2>
  <Table :columns="columns1" :data="data1"/>
</template>

<script lang="ts">
  import Demo from './Demo.vue';
  import Dialog1Demo from './Dialog1.demo.vue';
  import Dialog2Demo from './Dialog2.demo.vue';
  import Dialog3Demo from './Dialog3.demo.vue';
  import Table from '../lib/Table.vue';

  export default {
    name: 'DialogDemo',
    components: {
      Table,
      Demo,
      Dialog1Demo,
      Dialog2Demo,
      Dialog3Demo
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
          property: 'visible',
          illustrate: '对话框是否可见',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'closeOnClickOverlay',
          illustrate: '点击遮罩是否允许关闭',
          type: 'boolean',
          default: 'true'
        },
        {
          property: 'ok',
          illustrate: '点击确定回调',
          type: 'function(e)',
          default: '-'
        },
        {
          property: 'cancel',
          illustrate: '点击取消回调',
          type: 'function(e)',
          default: '-'
        },
        {
          property: 'loading',
          illustrate: '是否为异步对话框',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'type',
          illustrate: '对话框类型',
          type: 'info|success|error|warning',
          default: '-'
        },
      ]
      return {
        columns1,
        data1,
        Dialog1Demo,
        Dialog2Demo,
        Dialog3Demo
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import 'index'
</style>