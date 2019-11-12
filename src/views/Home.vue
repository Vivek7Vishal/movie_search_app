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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";

export default {
  name: "home",
  components: {
    Header,
    Card,
    Search
  },
  data() {
    return {
      result: []
    };
  },
  methods: {
    async getData(query) {
      let res = await fetch("http://www.omdbapi.com/?apikey=6c3a2d45&s=" + query);
      this.result = await res.json();
    },
    searchMovies(query){
      this.getData(query);
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
