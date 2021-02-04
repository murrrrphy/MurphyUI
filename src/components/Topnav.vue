<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <Icon name="M"/>
      <p>urphyUI</p>
    </router-link>
    <Icon v-if="toggleMenuButtonVisible"
          name="menu"
          class="toggleAside"
          @click="toggleMenu"/>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';
  import Icon from './Icon.vue';

  export default {
    name: 'Topnav.vue',
    components: {Icon},
    props: {
      toggleMenuButtonVisible: {
        type: Boolean,
        default: false,
      }
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleMenu = () => {
        if (asideVisible?.value != undefined) {
          asideVisible.value = !asideVisible.value;
        }
      };
      return {toggleMenu};
    }
  };
</script>

<style lang="scss" scoped>
  $color: #286b68;
  .topnav {
    color: $color;
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 16;
    justify-content: center;
    align-items: center;

    > .logo {
      max-width: 6em;
      margin-right: auto;
      display: flex;
      align-items: center;

      > .icon {
        width: 32px;
        height: 32px;
      }

      > p {
        color: #2d88b7;
        margin-left: -5px;
        margin-bottom: -5px;
      }
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        margin: 0 1em;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    > .toggleAside {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }

    @media (max-width: 500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: inline-block;
      }
    }
  }
</style>