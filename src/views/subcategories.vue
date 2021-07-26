<template>
  <div class="subcategories">
    <sub-side-navigation :selected="$route.query.selectedCategory"></sub-side-navigation>
  </div>
</template>

<script>
import SubSideNavigation from "../components/core-ui/side-navigation/sub-side-navigation";
import {mapGetters, mapActions} from "vuex"

export default {
  name: "subcategories",
  components: {SubSideNavigation},
  methods: {
    ...mapActions(['getSelectedCategory'])
  },
  computed: mapGetters(['allSelectedCategory']),
}
</script>

<style scoped>

</style>