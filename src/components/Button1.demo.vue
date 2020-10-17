<demo>
    Button 样式示例
</demo>

<template>
    <Button>默认按钮</Button>
    <Button @click="onClick">有点击事件的按钮</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";
    export default {
        name: "Button1.demo.vue",
        components:{
            Button
        },
        setup(){
            const onClick= () =>{
                console.log("hi");
            }
            return {onClick};
        }
    }
</script>

<style scoped>

</style>