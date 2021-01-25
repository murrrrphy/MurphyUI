<template>
  <button class="murphy-button"
          :class="classes"
          :disabled="disabled">
        <span v-if="loading"
              class="murphy-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
  import {computed} from 'vue';

  export default {
    name: 'Button',
    props: {
      theme: {
        type: String,
        default: 'button',
      },
      size: {
        type: String,
        default: 'normal',
      },
      level: {
        type: String,
        default: 'normal',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      }
    },
    setup(props: { theme: string; size: string; level: string; }) {
      const {theme, size, level} = props;
      const classes = computed(() => {
        return {
          [`murphy-theme-${theme}`]: theme,
          [`murphy-size-${size}`]: size,
          [`murphy-level-${level}`]: level,
        };
      });
      return {classes};
    }
  };
</script>

<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #1890ff;
  $radius: 4px;
  $red: red;
  $grey: grey;
  .murphy-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;

    & + & {
      margin-left: 8px;
    }

    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }

    &.murphy-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;

      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }

      &.murphy-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }

      &[disabled] {
        cursor: not-allowed;
        color: $grey;
      }
    }

    &.murphy-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;

      &:hover,
      &:focus {
        background: darken(white, 5%);
      }
    ;

      &.murphy-level-main {
        color: $blue;

        &:hover,
        &:focus {
          color: darken($blue, 10%);
        }
      }

      &.murphy-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }

      &[disabled] {
        cursor: not-allowed;
        color: $grey;
      }
    }

    &.murphy-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }

    &.murphy-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }

    &.murphy-theme-button {
      &.murphy-level-main {
        background: $blue;
        color: white;
        border-color: $blue;

        &:hover,
        &:focus {
          background: darken($blue, 10%);
          border-color: darken($blue, 10%);
        }

        > .murphy-loadingIndicator {
          border-color: white white white transparent;
        }
      }

      &.murphy-level-danger {
        background: $red;
        border-color: $red;
        color: white;

        &:hover,
        &:focus {
          background: darken($red, 10%);
          border-color: darken($red, 10%);
        }

        > .murphy-loadingIndicator {
          border-color: white white white transparent;
        }
      }

      &[disabled] {
        cursor: not-allowed;
        color: $grey;

        &:hover {
          border-color: $grey;
        }
      }
    }

    > .murphy-loadingIndicator {
      width: 10px;
      height: 10px;
      display: inline-block;
      margin-right: 8px;
      border-radius: 8px;
      border-style: solid;
      border-color: $blue $blue $blue transparent;
      border-width: 2px;
      animation: murphy-span 1s infinite linear;
    }
  }

  @keyframes murphy-span {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>