<template>
  <div>
    <Header />

    <div class="main">
      <Search @doSearch= "searchMovies"/>
      <div class="content columns is-multiline">
        <div class="column is-3 is-mobile" v-for="item in result.Search" :key="item.index">
          <Card :src="item.Poster" :title="item.Title"/>
        </div>
      </div>
      <Pagination v-if="result.length > 0"></Pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";
import getMovieNameByTitle from '../service/movieApi.js'

export default {
  name: "home",
  components: {
    Header,
    Card,
    Search,
    Pagination
  },
  data() {
    return {
      result: []
    };
  },
  methods: {
    async searchMovies(query){
      this.result = await getMovieNameByTitle(query, '1');
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 900px;
  margin: 0 auto;
  box-sizing: border-box;
  margin-top: 20px;
}
.content {
  width: 900px;
  margin-top: 20px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
