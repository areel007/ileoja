<template>
  <div class="property">
    <nav>
      <router-link to="/account/get-more-sales/property/standard">Standard</router-link>
      <router-link to="/account/get-more-sales/property/bronze">Bronze</router-link>
      <router-link to="/account/get-more-sales/property/silver">Silver</router-link>
      <router-link to="/account/get-more-sales/property/gold">Gold</router-link>
      <router-link to="/account/get-more-sales/property/diamond">Diamond</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "property"
})
</script>

<style scoped>
.property nav {
  display: flex;
  margin-bottom: 5px;
  width: 556px;
  justify-content: space-between;
}
.property nav a {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #6A6B6C;
  padding: 16px 25px;
}
.router-link-active {
  color: var(--primary-color) !important;
  border-bottom: 2px solid var(--primary-color) !important;
}
</style>