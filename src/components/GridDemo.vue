<template>
  <h1>Grid 栅格</h1>
  <p>24栅格系统。</p>
  <h2>设计理念</h2>
  <Row class="rowWrapper">
    <Col>100%</Col>
  </Row>
  <Row class="rowWrapper">
    <Col>50%</Col>
    <Col>50%</Col>
  </Row>
  <Row class="rowWrapper">
    <Col>33.3%</Col>
    <Col>33.3%</Col>
    <Col>33.3%</Col>
  </Row>
  <Row class="rowWrapper">
    <Col>25%</Col>
    <Col>25%</Col>
    <Col>25%</Col>
    <Col>25%</Col>
  </Row>
  <Row class="rowWrapper">
    <Col :span="8">33.3%</Col>
    <Col :span="16">66.6%</Col>
  </Row>
  <p>
    在多数业务情况下，我们需要在设计区域内解决大量信息收纳的问题，
    因此在 12 栅格系统的基础上，我将整个设计建议区域按照 24 等分的原则进行划分。
    划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。
    『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。
  </p>
  <h2>概述</h2>
  <p>
    布局的栅格化系统，我是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。
    下面简单介绍一下它的工作原理：
  </p>
  <ol>
    <li>通过row在水平方向建立一组column（简写col）</li>
    <li>你的内容应当放置于col内，并且，只有col可以作为row的直接元素</li>
    <li>
      <pre>栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用&lt;Col :span="8" /&gt;来创建</pre>
    </li>
    <li>如果一个row中的col总和超过 24，那么多余的col会作为一个整体另起一行排列</li>
  </ol>
  <Demo width="long" :component="Grid1Demo"/>
  <Demo width="long" :component="Grid2Demo"/>
  <Demo width="long" :component="Grid3Demo"/>
  <Demo width="long" :component="Grid4Demo"/>
  <h2>API</h2>
  <h3>Row</h3>
  <Table :columns="columns1" :data="data1"/>
  <h3>Col</h3>
  <Table :columns="columns2" :data="data2"/>
</template>

<script lang="ts">
  import Grid1Demo from './gridDemo/grid1.demo.vue';
  import Grid2Demo from './gridDemo/grid2.demo.vue';
  import Grid3Demo from './gridDemo/grid3.demo.vue';
  import Grid4Demo from './gridDemo/grid4.demo.vue';
  import Table from '../lib/Table.vue';
  import Row from '../lib/Row.vue';
  import Col from '../lib/Col.vue';
  import Demo from '../lib/Demo.vue';

  export default {
    name: 'ButtonDemo',
    components: {
      Col,
      Row,
      Table,
      Grid1Demo,
      Grid2Demo,
      Grid3Demo,
      Grid4Demo,
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
      ];
      const columns2 = [
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
      ];
      const data1 = [
        {
          property: 'align',
          illustrate: '水平排列方式：left, right和center',
          type: 'string',
          default: '-'
        },
        {
          property: 'gutter',
          illustrate: '栅格间隔，单位为像素，如写12就是12px。',
          type: 'number|string',
          default: '-'
        }
      ];
      const data2 = [
        {
          property: 'span',
          illustrate: '栅格占位格数，为 0 时宽度为里面内容的宽度。',
          type: 'number|string',
          default: '-'
        },
        {
          property: 'offset',
          illustrate: '栅格左侧的间隔格数，间隔内不可以有栅格',
          type: 'number|string',
          default: '0'
        }
      ];
      return {
        Grid1Demo, Grid2Demo, Grid3Demo, Grid4Demo, columns1, data1, columns2, data2
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "index";
  .row {
    margin-bottom: 10px;

    > .col {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }

    > .col:nth-of-type(odd) {
      background: #49b9ed;
      color: white;
    }

    > .col:nth-of-type(even) {
      background: white;
      color: #999;
    }
  }

  p {
    margin: 16px 0;
    font-size: 14px;
  }

  ol {
    padding-left: 16px;
    list-style: inherit;
    list-style-type: circle;
    font-size: 14px;

    > li {
      > pre {
        font-size: 14px;
        font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial,
        "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC",
        "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti",
        SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
      }
    }
  }
</style>