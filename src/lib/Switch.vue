<template>
  <button @click="toggle"
          class="murphy-switch"
          :class="{'murphy-checked':value}"
  >
    <span class="leftChild" v-if="leftChild">{{leftChild}}</span>
    <span class="circle"/>
    <span class="rightChild" v-if="rightChild">{{rightChild}}</span>
  </button>
</template>

<script lang="ts">
  export default {
    name: 'Switch',
    props: {
      value: Boolean,
      leftChild: String,
      rightChild: String
    },
    setup(props: { value: any }, context: { emit: (arg0: string, arg1: boolean) => void }) {
      const toggle = () => {
        context.emit('update:value', !props.value);
      };
      return {toggle};
    }
  };
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .murphy-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;

    > .leftChild {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      display: none;
      color: white;
      font-size: 14px;
    }

    > .rightChild {
      position: absolute;
      top: 2px;
      left: 24px;
      height: $h2;
      width: $h2;
      color: white;
      font-size: 14px;
    }

    > .circle {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2 / 2;
      transition: all 250ms;
    }

    &.murphy-checked {
      background: lightseagreen;

      > .circle {
        left: 24px;
      }

      >.rightChild{
        display: none;
      }

      > .leftChild{
        display: block;
      }
    }

    &:focus {
      outline: none;
    }

    &:active {
      > .circle {
        width: $h2 + 4px;
      }
    }

    &.murphy-checked:active {
      > .circle {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
</style>