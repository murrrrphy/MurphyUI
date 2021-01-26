<template>
  <div class="murphy-tabs">
    <div class="murphy-tabs-nav" ref="container">
      <div class="murphy-tabs-nav-item"
           :class="{selected: t===selected,disable: t===disable}"
           @click="select(t)"
           v-for="(t,index) in titles"
           :ref="el => {if(t===selected) selectedItem = el}"
           :key="index">{{t}}
      </div>
      <div class="murphy-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="murphy-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue';
import {ref, onMounted, watchEffect, computed} from 'vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String
    },
    disable: String
  },
  setup(props: { selected: string, disable: string; }, context: { slots: { default: () => any; }; emit: (arg0: string, arg1: string) => void; }) {
    const selectedItem = ref<HTMLDivElement>();
    const indicator = ref<HTMLDivElement>();
    const container = ref<HTMLDivElement>();
    onMounted(() => {
      watchEffect(() => {
        const {width} = selectedItem.value!.getBoundingClientRect();
        indicator.value!.style.width = width + 'px';
        const {left: left1} = container.value!.getBoundingClientRect();
        const {left: left2} = selectedItem.value!.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value!.style.left = left + 'px';
      }, {flush: 'post'});
    });
    const defaults = context.slots.default();
    defaults.forEach((tag: any) => {
      if (tag.type != Tab) {
        throw new Error('Tabs子标签只能是Tab');
      }
    });
    const current = computed(() => {
      return defaults.find((tag: { props: { title: any; }; }) => tag.props.title == props.selected);
    });
    const titles = defaults.map((tag: any) => {
      return tag.props.title;
    });
    if (props.disable === titles[0]) {
      context.emit('update:selected', titles[1]);
    }
    const select = (title: string) => {
      if (props.disable !== title) {
        context.emit('update:selected', title);
      }
    };
    return {
      defaults, titles, selectedItem, indicator, container, select, current
    };
  }
};
</script>

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .murphy-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }

        &.disable {
          cursor: not-allowed;
          color: #bfbfbf;
        }
      }

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms;
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>