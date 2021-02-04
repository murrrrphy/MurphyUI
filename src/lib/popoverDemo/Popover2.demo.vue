<demo>
  触发方式!两种触发方式#鼠标移入、点击。
</demo>

<template>
    <Popover>
      <template v-slot:content>
        <div>pop内容</div>
      </template>
      <Button>点击</Button>
    </Popover>
    <Popover trigger="hover">
      <template v-slot:content>
        <div>pop内容</div>
      </template>
      <Button>移入</Button>
    </Popover>
</template>

<script lang="ts">
  import Popover from '../../components/Popover.vue';
  import Button from '../../components/Button.vue';

  export default {
    name: "Popover2.demo.vue",
    components: {Popover,Button}
  }
</script>

<style lang="scss" scoped>
  .popover {
    margin: 10px;
  }
</style>