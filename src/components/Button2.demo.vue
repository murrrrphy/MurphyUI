<demo>
    按钮大小示例
</demo>

<template>
    <div>
        <Button theme="button"
                size="small">小按钮
        </Button>
        <Button theme="button">普通按钮</Button>
        <Button theme="button"
                size="big">大按钮
        </Button>
    </div>
    <div>
        <Button theme="link"
                size="small">小按钮
        </Button>
        <Button theme="link">普通按钮</Button>
        <Button theme="link"
                size="big">大按钮
        </Button>
    </div>
    <div>
        <Button theme="text"
                size="small">小按钮
        </Button>
        <Button theme="text">普通按钮</Button>
        <Button theme="text"
                size="big">大按钮
        </Button>
    </div>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";

    export default {
        name: "Button2.demo.vue",
        components: {
            Button
        }
    }
</script>

<style scoped>

</style>