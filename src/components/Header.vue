<template>
  <div class="header">
    <nav class="navbar is-light">
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <a class="navbar-item" href="#">Movielookup</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <button class="profile">
              <img src="../assets/profile.png" />
            </button>
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
$breakpoint: 820px;

.navbar {
  margin: 0 auto;
  box-sizing: border-box;
}
.header {
  border: 1px solid white;
  background-color: whitesmoke;
}
.profile {
  border: none;
  background-color: transparent;
  button {
    width: 45px;
    padding: 5px;
  }
}
</style>
