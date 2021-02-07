<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {provide, onMounted} from 'vue';
  import mitt from 'mitt';

  export default {
    name: 'Collapse',
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Array,
        default: []
      }
    },
    setup(props: { single: boolean, selected: string[] }, context: { emit: (arg0: string, arg1: string) => void; }) {
      const emitter: mitt.Emitter = mitt();
      provide('eventBus', emitter);
      onMounted(() => {
        emitter.emit('update:selected', props.selected);
        emitter.on('update:addSelected', (name: string) => {
          let selectedCopy = JSON.parse(JSON.stringify(props.selected));
          if (props.single) {
            selectedCopy = [name];
          } else {
            selectedCopy.push(name);
          }
          emitter.emit('update:selected', selectedCopy);
          context.emit('update:selected', selectedCopy);
        });
        emitter.on('update:removeSelected', (name: string) => {
          let selectedCopy = JSON.parse(JSON.stringify(props.selected));
          let index = selectedCopy.indexOf(name);
          selectedCopy.splice(index, 1);
          emitter.emit('update:selected', selectedCopy);
          context.emit('update:selected', selectedCopy);
        });
      });
    }
  };
</script>

<style lang="scss" scoped>
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
    border-bottom: none;
  }
</style>