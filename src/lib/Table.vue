<template>
  <table>
    <thead>
      <tr>
        <th v-for="item in columns">
          <p class="headContent">{{item.title}}</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="source in data">
        <template v-for="item in columns">
          <td :class="item.key==='type'? 'type':''||item.key==='property'?'property':''">{{source[item.key]}}</td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "Table",
    props: {
      columns: Array,
      data: Array
    }
  }
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
  thead {
    background: #fafafa;
    border-bottom: 2px solid #e8e8e8;
  }
  td {
    border-bottom: 1px solid #e8e8e8;
    padding: 14px 16px;
    text-align: left;
  }
  .headContent {
    padding: 14px 16px;
    font-weight: 500;
    color: #555;
    text-align: left;
  }
  .type {
    color: #c41d7f;
  }
  .property {
    color: #003a8c;
  }
</style>