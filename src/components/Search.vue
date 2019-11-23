 <template>
  <div class="searchbar">
    <img class="input-icon" src="../assets/icon-search.png" />
    <input type="text" v-model="query" placeholder="type a movie name" @keyup.enter="doSearch" />
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
  methods: {
    doSearch() {
      this.$emit("doSearch", this.query);
    }
  }
};
</script>
<style lang="scss" scoped>
$breakpoint: 820px;

.searchbar {
  .input-icon {
    width: 25px;
    position: absolute;
    margin-left: 13px;
    margin-top: 15px;
  }
  input[type="text"] {
    padding: 20px;
    padding-left: 50px;
    min-width: 400px;
    border: none;
    font-size: 16px;
    text-align: center;
    border: 1px solid whitesmoke;
  }
  button {
    background-color: none;
  }

  @media (max-width: $breakpoint) {
    .input-icon {
      width: 15px;
      position: absolute;
      margin-left: 13px;
      margin-top: 15px;
    }
    input[type="text"] {
      padding: 20px;
      padding-left: 50px;
      min-width: 400px;
      border: none;
      font-size: 16px;
      text-align: center;
      border: 1px solid whitesmoke;
    }
  }
}
</style>