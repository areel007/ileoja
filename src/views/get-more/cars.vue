<template>
  <div class="cars">
    <nav>
      <router-link to="/account/get-more-sales/cars/standard">Standard</router-link>
      <router-link to="/account/get-more-sales/cars/bronze">Bronze</router-link>
      <router-link to="/account/get-more-sales/cars/silver">Silver</router-link>
      <router-link to="/account/get-more-sales/cars/gold">Gold</router-link>
      <router-link to="/account/get-more-sales/cars/diamond">Diamond</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "cars"
}
</script>

<style scoped>
.cars nav {
  display: flex;
  margin-bottom: 5px;
  width: 556px;
  justify-content: space-between;
}
.cars nav a {
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