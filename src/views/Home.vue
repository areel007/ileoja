<template>
  <div class="home">
    <banner></banner>
    <main>
      <div class="container">
        <div class="main__inner">
          <div class="side-navi">
            <side-navigation
                :categories="categories"
            ></side-navigation>
          </div>
          <div class="main__main">
            <trending
                :trending-products="trendingProducts"
                @toggle-favorite="toggleFavorite($event)"
            ></trending>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import Banner from "../components/core-ui/banner/banner";
import SideNavigation from "../components/core-ui/side-navigation/side-navigation";
import Trending from "../components/core-ui/trending/trending";
export default {
  name: 'Home',
  components: {Trending, SideNavigation, Banner},
  props: ["categories", "trendingProducts"],
  methods: {
    toggleFavorite(e) {
      this.$emit('toggle-favorite', e)
    }
  }
};
</script>

<style scoped>
.home {
  position: relative;
  top: 10rem;
}
main {
  margin-bottom: 18.5rem;
}
.main__inner {
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-column-gap: 1.2rem;
}

</style>
