<template>
  <div class="my-adverts">
    <div class="my-adverts-nav">
      <router-link to="/account/my-adverts">
        <p>Active</p>
        {{2}}
      </router-link>
      <router-link to="/account/my-adverts/pending">
        <p>Pending</p>
        {{0}}
      </router-link>
      <router-link to="/account/my-adverts/declined">
        <p>Declined</p>
        {{0}}
      </router-link>
      <router-link to="/account/my-adverts/declined">
        <p>Draft</p>
        {{0}}
      </router-link>
      <router-link to="/account/my-adverts/declined">
        <p>Closed</p>
        {{0}}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "my-adverts"
})
</script>

<style scoped>
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
  padding-bottom: 5px;
}
.router-link-active {
  color: var(--primary-color) !important;
  border-bottom: 2px solid var(--primary-color) !important;
}
.my-adverts-nav a p {
  margin-bottom: 5px;
}


</style>