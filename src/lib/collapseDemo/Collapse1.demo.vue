<demo>
  常规使用!基本#collapse的基本用法
</demo>

<template>
  <Collapse v-model:selected="selectedList">
    <CollapseItem title="标题1" name="1">
      A dog is a type of domesticated animal.Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    </CollapseItem>
    <CollapseItem title="标题2" name="2">
      A dog is a type of domesticated animal.Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    </CollapseItem>
    <CollapseItem title="标题3" name="3">
      A dog is a type of domesticated animal.Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    </CollapseItem>
  </Collapse>
</template>

<script>
  import Collapse from '../../components/Collapse.vue'
  import CollapseItem from '../../components/CollapseItem.vue'
  import {ref} from 'vue'

  export default {
    name: "Collapse1.demo",
    components: {CollapseItem, Collapse},
    setup() {
      const selectedList = ref([])
      return {selectedList}
    }
  }
</script>

<style scoped>

</style>