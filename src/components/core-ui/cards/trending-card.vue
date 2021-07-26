<template>
  <div class="trending-card">
    <div class="trending-product-image">
      <img :src="trendingProductImage.length > 0 ? trendingProductImage[0]['image_files'] : require('../../../assets/images/trending-images/default-image.png')" alt="trending product">
    </div>
    <p class="trending-product-name">{{ trendingProductName }}</p>
    <div class="trending-product-price-and-star">
      <p class="trending-product-price">&#8358;{{ trendingProductPrice }}</p>
      <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          :class="{'is-liked': isProductFavorite}"
          @click="$emit('toggle-favorite')"
      >
        <path d="M17.9529 6.90402C17.8344 6.53955 17.5111 6.2815 17.1302 6.24703L11.9341
        5.7753L9.88058 0.9676C9.72896 0.614384 9.38399 0.386414 9.00001 0.386414C8.61603
        0.386414 8.27092 0.614384 8.12026 0.9676L6.06675 5.7753L0.869853 6.24703C0.488895
        6.28219 0.166304 6.54023 0.0471003 6.90402C-0.0714167 7.2685 0.0380364 7.66827
        0.326158 7.92096L4.25397 11.3651L3.09586 16.4659C3.01112 16.8409 3.15669 17.2287
        3.46789 17.4537C3.63516 17.5752 3.83168 17.6359 4.02889 17.6359C4.19835 17.6359
        4.36796 17.5909 4.51943 17.5002L9.00001 14.8212L13.4798 17.5002C13.8084 17.6966
        14.2216 17.6786 14.5321 17.4537C14.8433 17.2287 14.9889 16.8409 14.9042 16.4659L13.746
        11.3651L17.6739 7.92096C17.9618 7.66827 18.0714 7.26933 17.9529 6.90402V6.90402Z" stroke="black"
        />
      </svg>

    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "trending-card",
  props: [
      "trendingProductName",
      "trendingProductImage",
      "trendingProductPrice",
      "isProductFavorite"
  ]
})
</script>

<style scoped>
.trending-card {
  width: 100%;
  box-shadow: 0 .1rem .2rem rgba(0, 0, 0, .15);
}
.trending-product-image {
  width: 100%;
  height: 23.8rem;
  background-color: var(--primary-color);
  border-radius: .6rem .6rem 0 0;
  margin-bottom: .742rem;
}
.trending-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.trending-product-name {
  font-size: var(--fs-18);
  font-family: var(--inter);
  font-weight: var(--font-weight-normal);
  color: #000;
  line-height: 3.2rem;
  padding: 0 1rem;
}
.trending-product-price-and-star {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trending-product-price {
  font-size: var(--fs-18);
  font-family: var(--inter);
  font-weight: var(--font-wieght-bold);
  color: #000;
  line-height: 3.2rem;
}
.is-liked {
  fill: #000;
}
.trending-product-price-and-star {
  padding: 1rem;
}
.trending-product-price-and-star svg {
  cursor: pointer;
}
</style>