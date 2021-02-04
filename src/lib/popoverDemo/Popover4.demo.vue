<demo>
  卡片内关闭!点击关闭#暴露关闭接口，可将关闭事件放在气泡内。
</demo>

<template>
    <Popover>
      <template v-slot:content="{close}">
        <div>pop内容</div>
        <Button @click="close">关闭</Button>
      </template>
      <Button>点我</Button>
    </Popover>
</template>

<script lang="ts">
  import Popover from '../../components/Popover.vue';
  import Button from '../../components/Button.vue';

  export default {
    name: "Popover4.demo.vue",
    components: {Popover,Button}
  }
</script>

<style lang="scss" scoped>
</style>