<template>
<div class="header">
<nav class="navbar is-light">
  <div class="navbar-menu"> 
    <div class="navbar-start">
      <a class="navbar-item" href="#">HOME - Find a Movie</a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
      <input type="search">
      </div>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>
<style lang="scss" scoped>
.navbar{
  margin: 0 auto;
  box-sizing: border-box;
 
}
.header{
 border: 1px solid white;
  background-color: whitesmoke;
}
</style>