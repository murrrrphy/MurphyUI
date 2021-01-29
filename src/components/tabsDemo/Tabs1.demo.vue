<demo>
    标签示例!基本#通过currentTab来控制默认选中哪一项
</demo>

<template>
    <Tabs v-model:selected="currentTab">
        <Tab title="Tab1">content of Tab1</Tab>
        <Tab title="Tab2">content of Tab2</Tab>
        <Tab title="Tab3">content of Tab3</Tab>
    </Tabs>
</template>

<script lang="ts">
    import Tabs from "../../lib/Tabs.vue";
    import Tab from "../../lib/Tab.vue";
    import {ref} from "vue";

    export default {
        name: "Tabs.demo.vue",
        components: {
            Tabs,
            Tab
        },
        setup() {
            const currentTab = ref('Tab1');
            return {currentTab}
        }
    }
</script>

<style scoped>

</style>