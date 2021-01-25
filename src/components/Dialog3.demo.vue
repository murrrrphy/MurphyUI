<demo>
  异步Dialog示例!异步关闭#点击确定后异步关闭对话框，例如提交表单
</demo>

<template>
  <Button @click="showDialog">打开对话框</Button>
  <Dialog v-model:visible="x"
          :closeOnClickOverlay="false"
          :ok="f1"
          :cancel="f2"
          :loading="loading">
    <template v-slot:content>
      <div>提交表单</div>
    </template>
    <template v-slot:title>
      <strong>标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
  import Button from "../lib/Button.vue";
  import Dialog from "../lib/Dialog.vue";
  import {ref} from "vue";

  export default {
    name: "Dialog1.demo.vue",
    components: {
      Button,
      Dialog
    },
    setup() {
      const x = ref(false);
      const loading =ref(false);
      const showDialog = () => {
        x.value = true;
      };
      const f1 = () => {
        loading.value = true;
        setTimeout(()=>{
          console.log(111);
          x.value = false;
          loading.value = false;
        },1500)
      };
      const f2 = () => {
        x.value = false;
      };
      return {
        x,
        showDialog,
        f1,
        f2,
        loading
      }
    }
  }
</script>

<style scoped>

</style>