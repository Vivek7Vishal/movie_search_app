<template>
  <div class="card">
    <div class="card-image">
        <img :src="src" >
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">{{name}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    src: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  },
  data(){
    return {
      name:this.title,
    }
  }
};
</script>

<style lang="scss" scoped>
.card{
  width: 290px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
