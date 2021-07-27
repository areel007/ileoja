<template>
  <div
      class="sub-side-navigation"
      v-if="showSubcategory"
  >
    <navigation
        v-for="(category, index) in allSubcategories"
        :key="index"
        :category-image="category['picture']"
        :category="category['sub_cat_name']"
    ></navigation>
  </div>
</template>

<script>
import {defineComponent, watch} from "vue";
import Navigation from "./navigation";
import {mapGetters, mapActions} from "vuex"

export default defineComponent({
  name: "sub-side-navigation",
  components: {Navigation},
  props: ['selected', 'showSubcategory'],
  methods: {
    ...mapActions(['fetchSubcategories', 'toggleShowSubcategory', 'getSelectedCategory']),
  },

  computed: mapGetters(['allSubcategories', 'showSubcategory', 'allSelectedCategory']),

  created () {
    watch(() => {
      this.fetchSubcategories(this.selected)
    })
    console.log(this.selected)
  }
})
</script>

<style scoped>
.sub-side-navigation {
  position: absolute;
  left: 100%;
  z-index: 10;
  background-color: var(--color-white);
  padding: 2.5rem 3.4rem;
  top: 0;
  border: 1px solid #E9E9E9;
  width: calc(100% + 10rem);
  max-height: 50rem;
  overflow-y: auto;
}
.sub-side-navigation::-webkit-scrollbar {
  width: .2rem;
}

.sub-side-navigation::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

.sub-side-navigation::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 100px;
}

</style>