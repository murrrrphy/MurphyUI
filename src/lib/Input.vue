<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"/>

  </div>
</template>

<script lang="ts">
  export default {
    name: "Input",
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $red: #F1453D;
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $font-size: 12px;
  $box-shadow-color: rgba(0,0,0,0.5);
  .wrapper {
    font-size: $font-size;
    display: inline-block;
    &.error {
      > input {
        border-color: $red;
        &:hover {
          border-color: $red;
        }
      }
    }
    > input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: 4px;
      padding: 0 8px;
      font-size: inherit;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }
  }
</style>