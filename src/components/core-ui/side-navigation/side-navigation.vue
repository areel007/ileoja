<template>
  <div class="side-navis">
    <navigation
        v-for="(category, index) in allCategories"
        :key="index"
        :category="category['cat_name']"
        :category-image="category['picture']"
        @mouseover="selectCategory(category.id)"
    ></navigation>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Navigation from "./navigation";
import {mapGetters, mapActions} from "vuex"

export default defineComponent({
  name: "side-navigation",
  components: {Navigation},
  methods: {
    ...mapActions(['fetchCategories', 'toggleShowSubcategory']),
    selectCategory (id) {
      this.$emit('select-category', id)
    }
  },

  computed: mapGetters(['allCategories']),

  created() {
    this.fetchCategories()
  }
})
</script>

<style scoped>
.side-navis {
  padding: 2.5rem 3.4rem;
  position: sticky;
  top: 10rem;
  border: 1px solid #E9E9E9;
  max-height: 50rem;
  overflow-y: auto;
}
.side-navis::-webkit-scrollbar {
  width: .2rem;
}

.side-navis::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

.side-navis::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 100px;
}

</style>