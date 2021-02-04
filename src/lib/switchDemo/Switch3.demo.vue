<demo>
  带内容!文字和图标#带有文字和图标
</demo>

<template>
  <div>
    <Switch v-model:value="bool1" left-child="开" right-child="关"></Switch>
  </div>
  <div>
    <Switch v-model:value="bool2" left-child="Y" right-child="N"></Switch>
  </div>
  <div>
    <Switch v-model:value="bool3" left-child="☀" right-child="🌙"></Switch>
  </div>
</template>

<script lang="ts">
  import {ref} from "vue";
  import Switch from "../../components/Switch.vue";

  export default {
    name: "Switch1.demo.vue",
    components: {Switch},
    component: {
      Switch
    },
    setup() {
      const bool1 = ref(false)
      const bool2 = ref(false)
      const bool3 = ref(false)
      return {bool1,bool2,bool3}
    }
  }
</script>

<style scoped>

</style>