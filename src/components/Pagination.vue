<template>
  <nav class="pagination">
    <a class="pagination-previous" @click="getPage(currentPage-1)">Previous</a>
    <a class="pagination-next" @click="getPage(currentPage + 1)">Next page</a>
    <ul class="pagination-list">
      <li>
        <a class="pagination-link" @click="getPage(1)">1</a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link" @click="getPage(5)" >5</a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link" @click="getPage()">{{totalResults}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: ["totalResults", "currentPage"],
  methods: {
    getPage(pageNumber) {
      if(pageNumber > 0){
this.$emit("doSearch", pageNumber);
      }
    }
  },
};
</script>

<style>
</style>