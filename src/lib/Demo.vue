<template>
    <div class="demo">
        <h2>{{Header}}</h2>
        <div class="demo-component">
            <component :is="component"/>
        </div>
        <Card :title="title" :content="content" />
        <div class="demo-actions">
            <Button @click="showCode" v-if="!codeVisible">查看代码</Button>
            <Button @click="hideCode" v-else>隐藏代码</Button>
        </div>
        <div class="demo-code" v-if="codeVisible">
                <pre class="language-html"
                     v-html="html"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Button from "./Button.vue";
    import "prismjs";
    import "prismjs/themes/prism.css";
    import {computed, ref} from "vue";
    import Card from './Card.vue';

    const Prism = (window as any).Prism;

    export default {
        name: "Demo",
        components: {
            Card,
            Button
        },
        props: {
            component: Object,
        },
        setup(props: any) {
            const html = computed(() => {
                return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
            })
            const codeVisible = ref(false)
            const showCode = () => {
                codeVisible.value = true
            }
            const hideCode = () => {
                codeVisible.value = false
            }
            const Header = props.component.__sourceCodeTitle.slice(1,props.component.__sourceCodeTitle.indexOf("!"))
            const title = props.component.__sourceCodeTitle
                .slice(props.component.__sourceCodeTitle.indexOf("!")+1,props.component.__sourceCodeTitle.indexOf("#"))
            const content = props.component.__sourceCodeTitle
                .slice(props.component.__sourceCodeTitle.indexOf("#")+1)
            return {
                Prism,
                html,
                codeVisible,
                showCode,
                hideCode,
                Header,
                title,
                content
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;
        width: 500px;

        @media (max-width: 500px) {
            width: 300px;
        }

        > h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }

        &-component {
            padding: 16px;
        }

        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }

        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;

            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>