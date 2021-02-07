<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`"></use>
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