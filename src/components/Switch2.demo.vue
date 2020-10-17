<demo>
    支持 disabled
</demo>

<template>
    <Switch v-model:value="bool" disabled></Switch>
</template>

<script lang="ts">
    import {ref} from "vue";
    import Switch from "../lib/Switch.vue";

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