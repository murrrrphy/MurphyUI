<demo>
  常规使用!基本#第一个对话框
</demo>

<template>
  <Collapse>
    <CollapseItem title="标题1">内容1</CollapseItem>
    <CollapseItem title="标题2">内容2</CollapseItem>
    <CollapseItem title="标题3">内容3</CollapseItem>
  </Collapse>
</template>

<script>
  import Collapse from '../../components/Collapse.vue'
  import CollapseItem from '../../components/CollapseItem.vue'
  export default {
    name: "Collapse1.demo",
    components: {CollapseItem, Collapse}
  }
</script>

<style scoped>

</style>