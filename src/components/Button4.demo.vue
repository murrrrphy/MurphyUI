<demo>
    禁用按钮示例
</demo>

<template>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";

    export default {
        name: "Button4.demo.vue",
        components: {
            Button
        }
    }
</script>

<style scoped>

</style>