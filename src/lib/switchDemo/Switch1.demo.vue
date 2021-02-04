<demo>
    常规用法!基本用法#最常规的用法
</demo>

<template>
    <Switch v-model:value="bool"></Switch>
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
            const bool = ref(false);
            return {bool}
        }
    }
</script>

<style scoped>

</style>