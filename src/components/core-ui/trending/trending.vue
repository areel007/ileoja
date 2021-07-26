<template>
  <div class="trending">
    <section-title
        title="trending"
    ></section-title>
    <div class="trending-product-cards">
      <trending-card
      v-for="(trendingProduct, index) in allTrendingProducts"
      :key="index"
      :is-product-favorite="trendingProduct['favourite_view']"
      :trending-product-image="trendingProduct['product_image']"
      :trending-product-name="trendingProduct['product_name']"
      :trending-product-price="trendingProduct['price']"
      @toggle-favorite="toggleFavorite(trendingProduct)"
      ></trending-card>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import SectionTitle from "../titles/section-title";
import TrendingCard from "../cards/trending-card";
import {mapGetters, mapActions} from "vuex"

export default defineComponent({
  name: "trending",
  components: {TrendingCard, SectionTitle},
  methods: {
    ...mapActions(['fetchTrendingProduct']),
    toggleFavorite(e) {
      this.$emit('toggle-favorite', e)
    }
  },

  computed: mapGetters(['allTrendingProducts']),

  created() {
    this.fetchTrendingProduct()
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