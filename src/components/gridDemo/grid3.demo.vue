<demo>
  间隔空隙!栅格空隙#每个col中间设置一定间隔的空隙
</demo>

<template>
  <Row :gutter="20">
    <Col :span="16">col-16</Col>
    <Col :span="16">col-16</Col>

  </Row>
  <Row :gutter="20">
    <Col :span="8">col-8</Col>
    <Col :span="8">col-8</Col>
    <Col :span="8">col-8</Col>
  </Row>
  <Row :gutter="20">
    <Col :span="6">col-6</Col>
    <Col :span="6">col-6</Col>
    <Col :span="6">col-6</Col>
    <Col :span="6">col-6</Col>
  </Row>
</template>

<script>
  import Row from '../../lib/Row.vue'
  import Col from '../../lib/Col.vue'

  export default {
    name: "grid3.demo",
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
      background: #4cbcf0;
      color: white;
    }

  }
</style>