<template>
  <svg class="icon">
    <use :xlink:href=`#icon-${name}` />
  </svg>
</template>

<script>
  export default {
    name: "Icon",
    props: {
      name: String
    }
  }
</script>

<style scoped>

</style>