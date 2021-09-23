<template>
  <div class="favorite">
    <div class="my-adverts-nav">
      <router-link to="/account/favorite/adverts">
        <p>Adverts</p>
      </router-link>
      <router-link to="/account/favorite/search">
        <p>Search</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "favorite"
}
</script>

<style scoped>
.favorite {
}
.my-adverts-nav {
  display: flex;
  margin-bottom: 5px;
}
.my-adverts-nav a {
  margin-right: 22px;
  text-align: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #6A6B6C;
  border-bottom: 2px solid transparent;
  padding: 16px 72px;
}
.router-link-active {
  color: var(--primary-color) !important;
  border-bottom: 2px solid var(--primary-color) !important;
}
.my-adverts-nav a p {
  margin-bottom: 5px;
}
</style>