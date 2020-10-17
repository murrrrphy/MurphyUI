<demo>
    一键打开Dialog
</demo>

<template>
    <Button @click="toggle">打开对话框</Button>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";
    import {openDialog} from "../lib/openDialog";

    export default {
        name: "Dialog2.demo.vue",
        components: {
            Button,
        },
        setup(){
            const toggle=()=>{
                openDialog({
                    title: '标题',
                    content: '你好',
                    ok(){
                        console.log('ok')
                    },
                    cancel(){
                        console.log('cancel')
                    }
                })
            }
            return {
                toggle
            }
        }
    }
</script>

<style scoped>

</style>