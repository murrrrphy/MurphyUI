<demo>
  常规使用!基础栅格#从堆叠到水平排列。
  使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。
</demo>

<template>
  <Row>
    <Col :span="12">col-12</Col>
    <Col :span="12">col-12</Col>
  </Row>
  <Row>
    <Col :span="8">col-8</Col>
    <Col :span="16">col-16</Col>

  </Row>
  <Row>
    <Col :span="8">col-8</Col>
    <Col :span="8">col-8</Col>
    <Col :span="8">col-8</Col>
  </Row>
  <Row>
    <Col :span="6">col-6</Col>
    <Col :span="6">col-6</Col>
    <Col :span="6">col-6</Col>
    <Col :span="6">col-6</Col>
  </Row>
</template>

<script>
  import Row from '../../components/Row.vue'
  import Col from '../../components/Col.vue'

  export default {
    name: "grid1.demo",
    components: {Col, Row}
  }
</script>

<style lang="scss" scoped>
  .row {
    margin-bottom: 10px;

    > .col {
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