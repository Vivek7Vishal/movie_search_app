 <template>
 <div class="searchbar">
  <div class="search-container">
    <img width ="15" src="./icon-search.png">
    <input type="text" v-model="query" placeholder="type a movie name" @keyup.enter="doSearch"/>
  </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: () => {
    return {
      query: ""
    };
  },
  methods:{
    doSearch(){
      this.$emit('doSearch', this.query)
    }
  }
};
</script>
<style lang="scss" scoped>
.searchbar {
  display: flex;
  justify-content: center ;

  .search-container {
    width:500px;
    border: 1px solid whitesmoke;
  }
  img{
  }
  input{
    padding:5px;
    width: 462px;
    border:none;
    font-size: 16px;
  }
  button{
    background-color: none;
  }
}
</style>