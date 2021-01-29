<template>
  <div class="col">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "Col"
  }
</script>

<style lang="scss" scoped>
  .col {
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;

    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24)*100%;
      }
    }
  }
</style>