<demo>
    常规使用!基本#第一个对话框
</demo>

<template>
    <Button @click="showDialog">打开对话框</Button>
    <Dialog v-model:visible="dialogVisible"
            :closeOnClickOverlay="false"
            :ok="f1"
            :cancel="f2">
        <template v-slot:content>
            <div>hi</div>
            <div>hello world!</div>
        </template>
        <template v-slot:title>
            <strong>标题</strong>
        </template>
    </Dialog>
</template>

<script lang="ts">
    import Button from "../../components/Button.vue";
    import Dialog from "../../components/Dialog.vue";
    import {ref} from "vue";

    export default {
        name: "Dialog1.demo.vue",
        components: {
            Button,
            Dialog
        },
        setup() {
            const dialogVisible = ref(false);
            const showDialog = () => {
                dialogVisible.value = true;
            };
            const f1 = () => {
                dialogVisible.value = false;
            };
            const f2 = () => {
                dialogVisible.value = false;
            };
            return {
                dialogVisible,
                showDialog,
                f1,
                f2
            }
        }
    }
</script>

<style scoped>

</style>