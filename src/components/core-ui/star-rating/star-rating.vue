<template>
  <div class="star-rating">
    <input type="radio" name="star" id="star1"><label for="star1"></label>
    <input type="radio" name="star" id="star2"><label for="star2"></label>
    <input type="radio" name="star" id="star3"><label for="star3"></label>
    <input type="radio" name="star" id="star4"><label for="star4"></label>
    <input type="radio" name="star" id="star5"><label for="star5"></label>
  </div>
</template>

<script>
export default {
  name: "star-rating"
}
</script>

<style scoped>
.star-rating {
  display: flex;
  transform: rotateY(180deg);
  width: min-content;
}
.star-rating input {
  display: none;
}
.star-rating label {
  display: block;
  cursor: pointer;
  width: 3rem;
}
.star-rating label:before {
  content: '\2729';
  font-size: 4rem;
  position: relative;
  display: block;
  /*color: #D4D3D3FF;*/
  color: #6A6B6C;
}
.star-rating label:after {
  content: '\2729';
  font-size: 4rem;
  position: absolute;
  top: 0;
  display: block;
  color: var(--primary-color);
  opacity: 0;
  transition: .5s ease;
}
.star-rating label:hover:after,
.star-rating label:hover ~ label:after,
.star-rating input:checked ~ label:after {
  opacity: 1;
}
</style>