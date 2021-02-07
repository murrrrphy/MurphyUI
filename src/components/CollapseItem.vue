<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <transition name="switch">
      <div class="content" v-if="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import {ref, inject, onMounted} from 'vue';

  export default {
    name: 'CollapseItem',
    props: {
      title: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true
      }
    },
    setup(props: { name: string }) {
      const visible = ref(false);
      const emitter = inject<{ emit: Function, all: Object, on: Function, off: Function }>('eventBus');
      const toggle = () => {
        if (visible.value) {
          emitter && emitter.emit('update:removeSelected', props.name);
        } else {
          emitter && emitter.emit('update:addSelected', props.name);
        }
      };
      onMounted(() => {
        emitter && emitter.on('update:selected', (names: string[]) => {
          visible.value = names.indexOf(props.name) >= 0;
        });
      });
      return {visible: visible, toggle};
    }
  };
</script>

<style lang="scss" scoped>
  $grey: #ddd;
  $border-radius: 4px;
  .collapseItem {
    > .title {
      border: 1px solid $grey;
      margin: -1px -1px 0 -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }

    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }

    &:last-child {
      > .title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }

    > .content {
      padding: 8px;
      word-break: break-all;
    }

    > .content:last-child {
      border-bottom: 1px solid $grey;
    }
  }
</style>