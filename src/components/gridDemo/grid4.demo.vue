<demo>
  Flex布局!对齐方式#通过align属性，控制这些列的对齐方式。
  使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。
</demo>

<template>
  <Row align="left">
    <Col :span="4">col-4</Col>
    <Col :span="4">col-4</Col>
    <Col :span="4">col-4</Col>
    <Col :span="4">col-4</Col>
  </Row>
  <Row align="right">
    <Col :span="4">col-4</Col>
    <Col :span="4">col-4</Col>
    <Col :span="4">col-4</Col>
    <Col :span="4">col-4</Col>
  </Row>
  <Row align="center">
    <Col :span="4">col-4</Col>
    <Col :span="4">col-4</Col>
    <Col :span="4">col-4</Col>
    <Col :span="4">col-4</Col>
  </Row>
</template>

<script>
  import Row from '../../lib/Row.vue'
  import Col from '../../lib/Col.vue'

  export default {
    name: "grid1.demo",
    components: {Col, Row}
  }
</script>

<style lang="scss" scoped>
  .row {
    margin-bottom: 10px;

    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      height: 50px;
    }
    > .col:nth-of-type(odd) {
      background: #4cbcf0;
      color: white;
    }

    > .col:nth-of-type(even) {
      background: #00a0e9;
      color: white;
    }
  }
</style>