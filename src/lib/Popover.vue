<template>
  <div class="popover"  ref="popoverRef">
    <div ref="contentRef"
         class="content-wrapper"
         v-if="visible"
         :class="{[`position-${position}`]: true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerRef" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
  import {ref, nextTick, onMounted} from 'vue';

  export default {
    name: 'Popover',
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value: string) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value: string) {
          return ['click','hover'].indexOf(value) >= 0;
        }
      }
    },
    setup(props: { position: string, trigger: string }) {
      const contentRef = ref<HTMLDivElement | null>(null);
      const triggerRef = ref<HTMLSpanElement | null>(null);
      const popoverRef = ref<HTMLDivElement | null>(null);
      let visible = ref(false);
      onMounted(()=>{
        if(props.trigger === 'click'){
          popoverRef.value!.addEventListener('click', toggle)
        }else {
          popoverRef.value!.addEventListener('mouseenter', open)
          popoverRef.value!.addEventListener('mouseleave', close)
        }
      })
      const positionContent = () => {
        document.body.appendChild(contentRef.value!);
        const {width, height, top, left} = triggerRef.value!.getBoundingClientRect();
        if (props.position === 'top') {
          contentRef.value!.style.left = left + window.scrollX + 'px';
          contentRef.value!.style.top = top + window.scrollY + 'px';
        } else if (props.position === 'bottom') {
          contentRef.value!.style.left = left + window.scrollX + 'px';
          contentRef.value!.style.top = top + height + window.scrollY + 'px';
        } else if (props.position === 'left') {
          contentRef.value!.style.left = left + window.scrollX + 'px';
          let {height: h2} = contentRef.value!.getBoundingClientRect();
          contentRef.value!.style.top = top + window.scrollY + (height - h2) / 2 + 'px';
        } else if (props.position === 'right') {
          contentRef.value!.style.left = left + width + window.scrollX + 'px';
          let {height: h2} = contentRef.value!.getBoundingClientRect();
          contentRef.value!.style.top = top + window.scrollY + (height - h2) / 2 + 'px';
        }
      };
      const onClickDocument = (e: { target: Node | null; }) => {
        if (popoverRef.value &&
          (popoverRef.value === e.target || popoverRef.value.contains(e.target))
        ) { return }
        if (contentRef.value &&
          (contentRef.value === e.target || contentRef.value.contains(e.target))
        ) { return }
        close()
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
      return {visible, toggle, contentRef, triggerRef, popoverRef, close};
    }
  };
</script>

<style lang="scss" scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    z-index: 30;
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background: #ffffff;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    max-width: 20em;
    word-break: break-all;
    padding: .5em 1em;

    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before, &::after {
        left: 10px;
        border-bottom: none;
      }

      &::before {
        border-top-color: black;
        top: 100%;
      }

      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }

    &.position-bottom {
      margin-top: 10px;

      &::before, &::after {
        left: 10px;
        border-top: none;
      }

      &::before {
        border-bottom-color: black;
        bottom: 100%;
      }

      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;

      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
        border-right: none;
      }

      &::before {
        left: 100%;
        border-left-color: black;
      }

      &::after {
        left: calc(100% - 1px);
        border-left-color: white;
      }
    }

    &.position-right {
      margin-left: 10px;

      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
        border-left: none;
      }

      &::before {
        right: 100%;
        border-right-color: black;
      }

      &::after {
        right: calc(100% - 1px);
        border-right-color: white;
      }
    }
  }
</style>