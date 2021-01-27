<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
    <footer>感谢使用MurphyUI</footer>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import {inject, Ref} from 'vue';
  import Footer from '../components/Footer.vue';

  export default {
    name: 'Doc.vue',
    components: {Footer, Topnav},
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      return {asideVisible};
    }
  };
</script>


<style lang="scss" scoped>
  $aside-index: 15;
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    > footer {
      border-top: 1px solid #e5e5e5;
      margin-left: 150px;
      line-height: 64px;
      text-align: center;
      color: #aaa
    }

    > .nav {
      flex-shrink: 0;
    }

    > .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;

    > aside {
      flex-shrink: 0;
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
      z-index: 12;
    }
  }

  aside {
    background: #4457c0;
    color: #eff8ff;
    width: 150px;
    padding-bottom: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: $aside-index;

    > h2 {
      padding: 0 16px;
      margin-bottom: 4px;
      color: #94b4a4;
    }

    > ol {
      > li {
        > a {
          display: block;
          padding: 4px 16px;
        }

        .router-link-active {
          color: #4abc88;
          font-weight: bold;
          background: white;
        }
      }
    }
  }

  main {
    overflow: auto;
  }
</style>
