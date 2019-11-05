<template>
  <div class="home">
    <Header />
    <div class="page">
<Card v-for="item in result" :key="item.Title" :image="item.Poster" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";

export default {
  name: "home",
  components: {
    Header,
    Card
  },
  data() {
    return {
      result: []
    };
  },
  methods: {
    async getData() {
      let res = await fetch("http://www.omdbapi.com/?apikey=6c3a2d45&s=bat");
      this.result = res.Search;
      window.console.log(res);
    }
  },
   created: async function() {
    // this.getData();
      let res = await fetch("http://www.omdbapi.com/?apikey=6c3a2d45&s=bat");
      this.result = await res.json();
      window.console.log(this.result);
  },
};
</script>
