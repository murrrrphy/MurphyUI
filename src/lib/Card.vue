<template>
  <div class="cardWrapper">
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      title: {
        type: String
      },
      content: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cardWrapper {
    margin-top: 20px;

    &::before {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background: #d9d9d9;
      position: relative;
      top: 11px;
      left: 0;
    }

    > h1 {
      display: inline-block;
      margin-left: 20px;
      background: #ffffff;
      font-size: 16px;
      padding: 0px 18px 0 18px;
      position: relative;
    }

    > p {
      font-size: 14px;
      padding: 10px 0;
      margin: 0 20px;
    }
  }
</style>