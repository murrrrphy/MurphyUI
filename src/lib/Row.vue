<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
    <slot/>
  </div>
</template>

<script lang="ts">
  import {provide} from 'vue';

  export default {
    name: 'Row',
    props: {
      gutter: [Number, String]
    },
    setup(props: { gutter: [String, Number] }) {
      provide('gutter', props.gutter);
    }
  };
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>