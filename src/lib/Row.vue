<template>
  <div class="row" :style="rowStyle">
    <slot/>
  </div>
</template>

<script lang="ts">
  import {provide, computed} from 'vue';

  export default {
    name: 'Row',
    props: {
      gutter: [Number, String]
    },
    setup(props: { gutter: [String, Number] }) {
      let rowStyle = computed(()=>{
        return {
          marginLeft: -props.gutter/2+'px',
          marginRight: -props.gutter/2+'px'
        }
      })
      provide('gutter', props.gutter);
      return {rowStyle}
    }
  };
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>