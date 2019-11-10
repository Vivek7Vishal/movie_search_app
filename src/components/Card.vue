<template>
  <div class="card">
    <div class="card-image">
        <img :src="src" >
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    src: {
      type: String,
      required: false
    }
  },
  mounted() {
    console.log(this.src);
  }
};
</script>

<style lang="scss" scoped>
// .card{
//   height: 400px;
//   width: 300px;
// }
</style>
