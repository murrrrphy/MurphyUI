<demo>
  栅格偏移!偏移栅格#使用offset属性使栅格发生偏移，不用整行全部填充col
</demo>

<template>
  <Row>
    <Col :span="8">col-8</Col>
    <Col :span="8" offset="8">col-8</Col>
  </Row>
  <Row>
    <Col :span="8" offset="8">col-8</Col>
    <Col :span="8">col-8</Col>
  </Row>
  <Row>
    <Col :span="8">col-8</Col>
    <Col :span="8">col-8</Col>
  </Row>
</template>

<script>
  import Row from '../../components/Row.vue'
  import Col from '../../components/Col.vue'

  export default {
    name: "grid2.demo",
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