<template>
  <div>
    <a class="button">Anchor</a>
    <button class="button">Button</button>
    <input class="button" type="submit" value="Submit input" />
    <input class="button" type="reset" value="Reset input" />
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
