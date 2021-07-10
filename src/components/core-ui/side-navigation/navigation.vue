<template>
  <div class="nav">
    <img :src="require(`../../../assets/images/category-images/${categoryImage}`)" alt="fruit 1">
    <p class="category">{{ category }}</p>
    <svg
        width="10"
        height="18"
        viewBox="0 0 10 18"
        fill="none"
    >
      <path d="M8.48816 10.491L1.20083 17.7936C0.926469 18.0684 0.481285 18.0689 0.206469
      17.7946C-0.0684181 17.5203 -0.0688751 17.0751 0.205414 16.8002L7.49327
      9.49718C7.76742 9.22303 7.76742 8.77697 7.49274 8.50229L0.205414 1.19978C-0.0688751
      0.924891 -0.0684181 0.479706 0.206469 0.205418C0.343684 0.068449 0.523437 0 0.703121
      0C0.883297 0 1.06347 0.0688343 1.20083 0.206472L8.48763 7.50846C9.31007 8.33091
      9.31007 9.66913 8.48816 10.491Z" fill="#6A6B6C"
      />
    </svg>

  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "navigation",
  props: ["category", "categoryImage"]
})
</script>

<style scoped>
.nav {
  width: 100%;
  height: 2.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 3.6rem;
}
.nav img {
  margin-right: 2.5rem;
}
.category {
  font-size: var(--fs-14);
  line-height: 1.6rem;
  font-family: var(--montserat);
  font-weight: var(--font-weight-medium);
  color: var(--secondary-color);
  text-transform: uppercase;
  margin-right: auto;
}

</style>