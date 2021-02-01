<template>
  <div class="col" :class="colClass"
       :style="colStyle">
    <slot/>
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
          let number
          typeof gutter ==='number' ? number = gutter : number = parseInt(gutter)
          return {
            marginLeft: number/2+'px',
            marginRight: number/2+'px'
          }
        }
      })
      return {colClass,colStyle}
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    height: 80px;

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