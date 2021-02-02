<template>
  <div class="popover" @click.stop="toggle">
    <div ref="contentRef" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerRef">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
  import {ref, nextTick} from 'vue';

  export default {
    name: 'Popover',
    setup() {
      const contentRef = ref<HTMLDivElement | null>(null);
      const triggerRef = ref<HTMLSpanElement | null>(null);
      let visible = ref(false);
      const positionContent = () => {
        document.body.appendChild(contentRef.value!);
        const {width, height, top, left} = triggerRef.value!.getBoundingClientRect();
        contentRef.value!.style.left = left + window.scrollX + 'px';
        contentRef.value!.style.top = top + window.scrollY + 'px';
      };
      const onClickDocument = (e: { target: Node | null; }) => {
        if (contentRef.value && contentRef.value!.contains(e.target)) {
          return;
        }
        close();
      };
      const open = () => {
        visible.value = true;
        nextTick(() => {
          positionContent();
          document.addEventListener('click', onClickDocument);
        });
      };
      const close = () => {
        visible.value = false;
        document.removeEventListener('click', onClickDocument);
      };
      const toggle = (event: { target: Node | null; }) => {
        if (triggerRef.value!.contains(event.target)) {
          if (visible.value === true) {
            close();
          } else {
            open();
          }
        }
      };
      return {visible, toggle, contentRef, triggerRef};
    }
  };
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    z-index: 30;
    position: absolute;
    border: 1px solid red;
    transform: translateY(-100%);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)
  }
</style>