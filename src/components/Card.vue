<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="image">
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['image']
};
</script>
