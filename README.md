# MurphyUI源码仓库
项目预览仓库👉[预览仓库](https://github.com/murrrrphy/MurphyUI-website)  
项目预览地址👉[预览地址](https://murrrrphy.github.io/MurphyUI-website/)
## 项目介绍
本项目是一款基于Vue3和Typescript的UI组件库，其中包含的组件有：  
1. Button
2. Dialog
3. input
4. Switch
5. Tabs
6. Grid
7. Popover
8. Collapse

使用到的Vue3新语法有：
1. setup
2. provide/inject
3. watchEffect
4. ref
5. computed
6. onMounted  
7. ......

不建议将此UI库用于生产环境，如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。

## 安装方法
打开终端运行一下命令：
```
npm install murphy-ui
```
或者
```
yarn add murphy-ui
```

## 使用方法
安装完毕后，在你的代码中导入组件：
```
import {Button, Tabs, Switch, Dialog, Popover, Row, Col} from "murphy-ui"
```
就可以使用组件了。

## Vue单文件组件
代码示例：
```
<template>
  <Button>按钮</Button>
</template>

<script>
import {Button} from "murphy-ui"
  export default {
    components: {Button}
  }
</script>
```
