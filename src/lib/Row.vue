<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot/>
  </div>
</template>

<script lang="ts">
  import {provide, computed} from 'vue';

  export default {
    name: 'Row',
    props: {
      gutter: [Number, String],
      align: {
        type: String,
        validator(value: string) {
          return ['left','right','center'].includes(value)
        }
      }
    },
    setup(props: { gutter: [String, Number], align: String }) {
      let rowStyle = computed(()=>{
        return {
          marginLeft: -props.gutter/2+'px',
          marginRight: -props.gutter/2+'px'
        }
      })
      let rowClass = computed(()=>{
        return [props.align && `align-${props.align}`]
      })
      provide('gutter', props.gutter);
      return {rowStyle,rowClass}
    }
  };
</script>

<style lang="scss" scoped>
  .row {
    display: flex;

    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
  }
</style>