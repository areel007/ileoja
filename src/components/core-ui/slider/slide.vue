<template>
  <div class="slide">
    <img :src="require(`../../../assets/images/${slide.src}`)" alt="slider">
  </div>
</template>

<script>
export default {
  name: "slide",
  props: ['slide']
}
</script>

<style scoped>
.slide {
  display: inline-block;
}
.slide img {
  max-width: 100%;
}

</style>