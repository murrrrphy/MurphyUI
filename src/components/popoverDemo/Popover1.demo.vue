<demo>
  标签示例!基本#通过currentTab来控制默认选中哪一项
</demo>

<template>
  <Popover>
    <template v-slot:content>
      <div>pop内容11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
    </template>
    <Button>点我</Button>
  </Popover>
  <Popover position="bottom">
    <template v-slot:content>
      <div>pop内容11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
    </template>
    <Button>点我</Button>
  </Popover>
  <Popover position="left">
    <template v-slot:content>
      <div>pop内容11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
    </template>
    <Button>点我</Button>
  </Popover>
  <Popover position="right">
    <template v-slot:content>
      <div>pop内容11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
    </template>
    <Button>点我</Button>
  </Popover>
</template>

<script lang="ts">
  import Popover from '../../lib/Popover.vue';
  import Button from '../../lib/Button.vue';

  export default {
    name: "Popover1.demo.vue",
    components: {Popover,Button}
  }
</script>

<style lang="scss" scoped>

</style>