<demo>
  默认打开!用法#初始给selected一个值来控制打开哪一个
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
  import {ref} from 'vue';

  export default {
    name: "Collapse3.demo",
    components: {CollapseItem, Collapse},
    setup(){
      const selectedList = ref(['1', '2'])
      return {selectedList}
    }
  }
</script>

<style scoped>

</style>