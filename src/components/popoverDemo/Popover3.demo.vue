<demo>
  卡片位置!位置#有上下左右四个位置。
</demo>

<template>
  <Popover>
    <template v-slot:content>
      <div>pop内容</div>
    </template>
    <Button>上面</Button>
  </Popover>
  <Popover position="bottom">
    <template v-slot:content>
      <div>pop内容</div>
    </template>
    <Button>下面</Button>
  </Popover>
  <Popover position="left">
    <template v-slot:content>
      <div>pop内容</div>
    </template>
    <Button>左面</Button>
  </Popover>
  <Popover position="right">
    <template v-slot:content>
      <div>pop内容</div>
    </template>
    <Button>右面</Button>
  </Popover>
</template>

<script lang="ts">
  import Popover from '../../lib/Popover.vue';
  import Button from '../../lib/Button.vue';

  export default {
    name: 'Popover3.demo.vue',
    components: {Popover, Button}
  };
</script>

<style lang="scss" scoped>
  .popover {
    margin: 10px;
  }
</style>