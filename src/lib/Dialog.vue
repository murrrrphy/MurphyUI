<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="murphy-dialog-overlay" @click="onClickOverlay"></div>
      <div class="murphy-dialog-wrapper">
        <div class="murphy-dialog">
          <header v-if="!type">
            <slot name="title"/>
            <span class="murphy-dialog-close" @click="close"></span>
          </header>
          <main>
            <svg v-if="type==='info'">
              <use xlink:href="#icon-info"></use>
            </svg>
            <svg v-if="type==='success'">
              <use xlink:href="#icon-success"></use>
            </svg>
            <svg v-if="type==='error'">
              <use xlink:href="#icon-error"></use>
            </svg>
            <svg v-if="type==='warning'">
              <use xlink:href="#icon-warning"></use>
            </svg>
            <slot name="content"/>
          </main>
          <div class="footerTop" v-if="!type"></div>
          <footer>
            <Button v-if="ok" level="main" @click="ok" :loading="loading">确定</Button>
            <Button v-if="cancel" @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
  import Button from './Button.vue';

  export default {
    name: 'Dialog',
    components: {
      Button
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true,
      },
      ok: {
        type: Function,
      },
      cancel: {
        type: Function,
      },
      loading: {
        type: Boolean
      },
      type: {
        type: String
      }
    },
    setup(props: { closeOnClickOverlay: any; ok: () => boolean; cancel: () => void; }, context: { emit: (arg0: string, arg1: boolean) => void; }) {
      const close = () => {
        context.emit('update:visible', false);
      };
      const onClickOverlay = () => {
        if (props.closeOnClickOverlay) {
          close();
        }
      };
      return {
        close,
        onClickOverlay
      };
    }
  };
</script>

<style lang="scss">
  $radius: 4px;
  $border-color: #d9d9d9;
  .murphy-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;

    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: fade_out(black, 0.5);
      z-index: 13;
    }

    &-wrapper {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 14;
    }

    > header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }

    > main {
      padding: 24px 16px;
      display: flex;
      flex-wrap: nowrap;
      > svg {
        height: 1.5em;
        width: 1.5em;
        margin-right: 16px;
      }
    }
    > .footerTop {
      border-top: 1px solid $border-color;
    }

    > footer {
      padding: 12px 16px;
      text-align: right;
    }

    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;

      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
      }

      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
</style>