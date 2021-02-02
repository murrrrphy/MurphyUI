<demo>
  标签示例!基本#通过currentTab来控制默认选中哪一项
</demo>

<template>
  <Popover>
    <template v-slot:content>
      <div>pop内容</div>
    </template>
    <button>点我</button>
  </Popover>
</template>

<script lang="ts">
  import Popover from '../../lib/Popover.vue'

  export default {
    name: "Popover1.demo.vue",
    components: {Popover}
  }
</script>

<style lang="scss" scoped>

</style>