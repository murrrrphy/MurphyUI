<template>
  <div class="popover" @click.stop="toggle">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {ref,nextTick} from 'vue';

  export default {
    name: "Popover",
    setup() {
      let visible = ref(false)
      const toggle = () => {
        visible.value = !visible.value;
        if(visible.value === true) {
          setTimeout(()=> {
            let eventHandler = () => {
              visible.value = false
              document.removeEventListener('click',eventHandler)
            }
            document.addEventListener('click',eventHandler)
          },0)
        }
      }
      return {visible,toggle}
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0,0,0,0.5)
    }
  }
</style>