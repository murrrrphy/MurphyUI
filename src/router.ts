import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./lib/SwitchDemo.vue";
import ButtonDemo from "./lib/ButtonDemo.vue";
import DialogDemo from "./lib/DialogDemo.vue";
import TabsDemo from "./lib/TabsDemo.vue";
import InputDemo from "./lib/InputDemo.vue";
import GridDemo from "./lib/GridDemo.vue";
import PopoverDemo from "./lib/popoverDemo.vue";
import {h} from "vue";
import Markdown from "./components/Markdown.vue";
import intro from "./markdown/intro.md";
import install from "./markdown/install.md";
import getStarted from "./markdown/get-started.md";

const history = createWebHashHistory();
const md = (string: any) => h(Markdown, {content: string, key: string});
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc',
            component: Doc,
            children: [
                {path: '', redirect: '/doc/intro'},
                {path: 'intro', component: md(intro)},
                {path: 'get-started', component: md(getStarted)},
                {path: 'install', component: md(install)},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo},
                {path: 'input', component: InputDemo},
                {path: 'grid', component: GridDemo},
                // {path: 'toast', component: ToastDemo},
                {path: 'popover', component: PopoverDemo}
            ]
        },

    ]
})