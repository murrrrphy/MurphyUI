<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>欢迎来到Murphy UI</h1>
        <h1>一款基于Vue3+TS的基础组件库</h1>
        <p class="actions">
          <router-link to="/doc">起步</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <Icon name="Vue"/>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <Icon name="ts" />
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <Icon name="light"/>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import Footer from '../components/Footer.vue';
  import Icon from '../components/Icon.vue';

  export default {
    components: {Icon, Footer, Topnav},
  };
</script>

<style lang="scss" scoped>
  $green: #02bcb0;
  $border-radius: 4px;
  $color: #286b68;
  .topnavAndBanner {
    background: linear-gradient(to top, #1978AA, #98DCFF);
    clip-path: ellipse(80% 60% at 50% 40%);
    height: 55vh;
  }

  .features {
    margin: 40px auto -40px auto;
    padding: 0 16px;
    height: 20vh;
    @media (max-width: 1200px){
      height: 40vh;
    }
    @media (max-width: 800px){
      height: 60vh;
    }
    @media (min-width: 800px) {
      width: 800px;
      > ul {
        > li {
          width: 50%;
        }
      }
    }
    @media (min-width: 1200px) {
      width: 1200px;
      > ul {
        > li {
          width: 33.3333%;
        }
      }
    }

    > ul {
      display: flex;
      flex-wrap: wrap;

      > li {
        margin: 16px 0;
        display: grid;
        justify-content: center;
        align-content: space-between;
        grid-template-areas: "icon title" "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;

        > .icon {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }

        > h3 {
          grid-area: title;
          font-size: 28px;
        }

        > p {
          grid-area: text
        }
      }
    }
  }

  .banner {
    color: white;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    > .actions {
      padding: 40px 0;

      a {
        margin: 0 8px;
        background: $green;
        color: white;
        display: inline-block;
        padding: 8px 24px;
        border-radius: $border-radius;
      }
    }
  }
</style>