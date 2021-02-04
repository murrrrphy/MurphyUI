<demo>
  基本示例!基本#最简单的用法，浮层的大小由内容区域决定。
</demo>

<template>
  <Popover>
    <template v-slot:content>
      <div>pop内容</div>
    </template>
    <Button>点击</Button>
  </Popover>
</template>

<script lang="ts">
  import Popover from '../../lib/Popover.vue';
  import Button from '../../lib/Button.vue';

  export default {
    name: 'Popover1.demo.vue',
    components: {Popover, Button}
  };
</script>

<style lang="scss" scoped>
</style>