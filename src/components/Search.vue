 <template>
 <div class="searchbar">
  <div class="search-container">
    <img class="input-icon" src="../assets/icon-search.png" />
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
  justify-content: center;

  .input-icon {
    width: 25px;
    position: absolute;
    margin-left: 13px;
    margin-top: 15px;
  }
  input[type=text]{
    padding: 20px;
    padding-left: 50px;
    min-width: 400px;
    border:none;
    font-size: 16px;
    text-align: center;
  }
  button{
    background-color: none;
  }
}
</style>