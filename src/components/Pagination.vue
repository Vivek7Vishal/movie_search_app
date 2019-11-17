<template>
  <nav class="pagination">
    <a class="pagination-previous" @click="getPage(currentPage-1)">Previous</a>
    <a class="pagination-next" @click="getPage(currentPage + 1)">Next page</a>
    <ul class="pagination-list">
      <li>
        <a class="pagination-link" @click="getPage(1)">1</a>
      </li>
      <li v-if="finalPage>5">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li v-if="finalPage>5">
        <a class="pagination-link"  @click="getPage(5)">5</a>
      </li>
      <li v-if="finalPage>5">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li v-if="finalPage>5">
        <a class="pagination-link" v-if="finalPage>5" @click="getPage(finalPage)">{{finalPage}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
const pageSize = 10;
export default {
  name: "Pagination",
  props: ['totalResults', 'currentPage'],
  methods: {
    getPage(pageNumber) {
      if (pageNumber > 0) {
        this.$emit("doSearch", pageNumber);
      }
    }
  },
  computed:{
    finalPage: function(){
      return Math.ceil(this.totalResults / pageSize);
    },
  }
};
</script>

<style lang="scss" scoped>
.pagination{
  margin:20px 0;
}
</style>