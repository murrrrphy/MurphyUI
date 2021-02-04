<template>
  <h1>Input 输入框</h1>
  <div class="demoWrapper">
    <div class="inlineBlock">
      <Demo :component="InputDemo1"/>
      <Demo :component="InputDemo3"/>
      <Demo :component="InputDemo5"/>
    </div>
    <div class="inlineBlock">
      <Demo :component="InputDemo2"/>
      <Demo :component="InputDemo4"/>
    </div>
  </div>
  <h2>API</h2>
  <Table :columns="columns1" :data="data1"/>
  <h2>事件</h2>
  <Table :columns="columns2" :data="data2"/>
</template>

<script>
  import Demo from '../components/Demo.vue'
  import InputDemo1 from './inputDemo/Input1.demo.vue'
  import InputDemo2 from './inputDemo/Input2.demo.vue'
  import InputDemo3 from './inputDemo/Input3.demo.vue'
  import InputDemo4 from './inputDemo/Input4.demo.vue'
  import InputDemo5 from './inputDemo/Input5.demo.vue'
  import Table from '../components/Table.vue'

  export default {
    name: "InputDemo",
    components: {
      Table,
      Demo, InputDemo1, InputDemo2, InputDemo3, InputDemo4, InputDemo5
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
          property: 'modelValue(v-model)',
          illustrate: '输入框内容',
          type: 'string',
          default: '-'
        },
        {
          property: 'readonly',
          illustrate: '是否为只读状态',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'disabled',
          illustrate: '是否为禁用状态',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'error',
          illustrate: '错误提示信息',
          type: 'string',
          default: '-'
        },
        {
          property: 'placeholder',
          illustrate: '输入提示信息',
          type: 'string',
          default: '-'
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
          property: 'input',
          illustrate: '输入内容时执行回调',
          callback: 'function(event)'
        },
        {
          property: 'change',
          illustrate: '内容改变时执行回调',
          callback: 'function(event)'
        },
        {
          property: 'focus',
          illustrate: '聚焦输入框时执行回调',
          callback: 'function(event)'
        },
        {
          property: 'blur',
          illustrate: '失去焦点时时执行回调',
          callback: 'function(event)'
        }
      ]
      return {
        InputDemo1, InputDemo2, InputDemo3, InputDemo4, InputDemo5, columns1
        , data1, columns2, data2
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/lib/index";
</style>