<template>
  <div class="trending">
    <section-title
        title="trending"
    ></section-title>
    <div class="trending-product-cards">
      <trending-card
      v-for="(trendingProduct, index) in trendingProducts"
      :key="index"
      :is-product-favorite="trendingProduct.isProductFavorite"
      :trending-product-image="trendingProduct.trendingProductImage"
      :trending-product-name="trendingProduct.trendingProductName"
      :trending-product-price="trendingProduct.trendingProductPrice"
      @toggle-favorite="toggleFavorite(trendingProduct)"
      ></trending-card>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import SectionTitle from "../titles/section-title";
import TrendingCard from "../cards/trending-card";

export default defineComponent({
  name: "trending",
  components: {TrendingCard, SectionTitle},
  props: ["trendingProducts"],
  methods: {
    toggleFavorite(e) {
      this.$emit('toggle-favorite', e)
    }
  }
})
</script>

<style scoped>
.trending {
  padding: 3.5rem 0;
  --title-font-size: 2rem;
}
.trending-product-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 3rem;
  width: 100%;
}

</style>