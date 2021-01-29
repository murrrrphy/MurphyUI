<demo>
  提示Dialog示例!信息提示#各种类型的信息提示，只提供一个按钮用于关闭。
</demo>

<template>
  <Button @click="showInfoDialog">info</Button>
  <Dialog v-model:visible="infoVisible"
          :ok="infoClose"
          type="info">
    <template v-slot:content>
      <p>some messages...some messages...some messages...some messages...</p>
    </template>
  </Dialog>
  <Button @click="showSuccessDialog">success</Button>
  <Dialog v-model:visible="successVisible"
          :ok="successClose"
          type="success">
    <template v-slot:content>
      <p>some messages...some messages...some messages...some messages...</p>
    </template>
  </Dialog>
  <Button @click="showErrorDialog">error</Button>
  <Dialog v-model:visible="errorVisible"
          :ok="errorClose"
          type="error">
    <template v-slot:content>
      <p>some messages...some messages...some messages...some messages...</p>
    </template>
  </Dialog>
  <Button @click="showWarningDialog">warning</Button>
  <Dialog v-model:visible="warningVisible"
          :ok="warningClose"
          type="warning">
    <template v-slot:content>
      <p>some messages...some messages...some messages...some messages...</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
  import Button from '../../lib/Button.vue';
  import Dialog from '../../lib/Dialog.vue';
  import {ref} from 'vue';

  export default {
    name: 'Dialog1.demo.vue',
    components: {
      Button,
      Dialog
    },
    setup() {
      const infoVisible = ref(false);
      const successVisible = ref(false);
      const errorVisible = ref(false);
      const warningVisible = ref(false);
      const showInfoDialog = () => {
        infoVisible.value = true;
      };
      const showSuccessDialog = () => {
        successVisible.value = true;
      };
      const showErrorDialog = () => {
        errorVisible.value = true;
      };
      const showWarningDialog = () => {
        warningVisible.value = true;
      };
      const infoClose = () => {
        infoVisible.value = false;
      };
      const successClose = () => {
        successVisible.value = false;
      };
      const errorClose = () => {
        errorVisible.value = false;
      };
      const warningClose = () => {
        warningVisible.value = false;
      };
      return {
        infoVisible,
        successVisible,
        errorVisible,
        warningVisible,
        showInfoDialog,
        showSuccessDialog,
        showErrorDialog,
        showWarningDialog,
        infoClose,
        successClose,
        errorClose,
        warningClose
      };
    }
  };
</script>

<style scoped>

</style>