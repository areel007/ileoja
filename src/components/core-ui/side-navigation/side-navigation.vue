<template>
  <div class="side-navi">
    <navigation
        v-for="(category, index) in categories"
        :key="index"
        :category="category.categoryText"
        :category-image="category.categoryImage"
    ></navigation>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Navigation from "./navigation";

export default defineComponent({
  name: "side-navigation",
  components: {Navigation},
  props: ["categories"]
})
</script>

<style scoped>
.side-navi {
  padding: 2.5rem 3.4rem;
  position: sticky;
  top: 10rem;
  border: 1px solid #E9E9E9;
}

</style>