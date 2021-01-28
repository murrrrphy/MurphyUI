<template>
  <div class="wrapper" :class="{error}">
    <label>
      <input :value="modelValue"
             @input="$emit('update:modelValue',$event.target.value)"
             @change="$emit('update:modelValue',$event.target.value)"
             @focus="$emit('update:modelValue',$event.target.value)"
             @blur="$emit('update:modelValue',$event.target.value)"
             type="text"
             :disabled="disabled"
             :placeholder="placeholder"
             :readonly="readonly">
    </label>
    <template v-if="error">
      <Icon name="error"/>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script lang="ts">
  import Icon from './Icon.vue';

  export default {
    name: 'Input',
    components: {Icon},
    emits: ['update:modelValue'],
    props: {
      modelValue: {
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
      },
      placeholder: {
        type: String
      }
    }
  };
</script>

<style lang="scss" scoped>
  $red: #F1453D;
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;

    > label {
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

    > :not(:last-child) {
      margin-right: .5em;
    }

    &.error {
      > label {
        > input {
          border-color: $red;
      }

        &:hover {
          border-color: $red;
        }
      }

      > .errorMessage {
        color: $red;
      }
    }
  }
</style>