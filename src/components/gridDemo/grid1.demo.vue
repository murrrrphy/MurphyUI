<demo>
  常规使用!基本#第一个对话框
</demo>

<template>
<!--  <Row>-->
<!--    <Col>100%</Col>-->
<!--  </Row>-->
  <Row gutter="12">
    <Col>50%</Col>
    <Col>50%</Col>
  </Row>
<!--  <Row>-->
<!--    <Col>33.3%</Col>-->
<!--    <Col>33.3%</Col>-->
<!--    <Col>33.3%</Col>-->
<!--  </Row>-->
<!--  <Row>-->
<!--    <Col>25%</Col>-->
<!--    <Col>25%</Col>-->
<!--    <Col>25%</Col>-->
<!--    <Col>25%</Col>-->
<!--  </Row>-->
<!--  <Row>-->
<!--    <Col :span="16">66.6%</Col>-->
<!--    <Col :span="8">33.3%</Col>-->
<!--  </Row>-->
<!--  <Row>-->
<!--    <Col :span="16">66.6%</Col>-->
<!--    <Col :span="6" offset="2">33.3%</Col>-->
<!--  </Row>-->
</template>

<script>
  import Row from '../../lib/Row.vue';
  import Col from '../../lib/Col.vue';

  export default {
    name: "grid1.demo",
    components: {Col, Row}
  }
</script>

<style scoped>

</style>