<template>
  <div class="col" :class="colClass"
       :style="colStyle">
    <div style="border: 1px solid green; height: 100px;">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
  import {inject, computed} from 'vue'

  export default {
    name: "Col",
    props: {
      span: [Number,String],
      offset: [Number,String]
    },
    setup(props: { span: [Number,String]; offset: [Number,String] }) {
      const gutter: number|string|undefined= inject('gutter')
      const colClass = computed(()=>{
        return [
          props.span && `col-${props.span}`,
          props.offset && `offset-${props.offset}`
        ]
      })
      const colStyle = computed(()=>{
        if(gutter){
          if(typeof gutter === 'number'){
            return {
              paddingLeft: gutter/2+'px',
              paddingRight: gutter/2+'px'
            }
          }else {
            let number = parseInt(gutter)
            return {
              paddingLeft: number/2+'px',
              paddingRight: number/2+'px'
            }
          }
        }
      })
      return {colClass,colStyle}
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    width: 100%;

    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }

    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
</style>