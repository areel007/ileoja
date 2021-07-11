<template>
  <header v-if="$route.name==='Home'">
    <div class="container">
      <div class="header__inner">
        <router-link to="/">
          <img src="../../../assets/images/ileoja-logo.png" alt="logo">
        </router-link>
        <ul>
          <li
              v-for="(navLink, index) in navLinks"
              :key="index"
          >
            <router-link v-if="navLink.linkName==='Sell'" class="sell" :to="navLink.to">{{ navLink.linkName }}</router-link>
            <router-link v-else :to="navLink.to">{{ navLink.linkName }}</router-link>
          </li>
        </ul>

      </div>
    </div>
  </header>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "web-view-nav",
  props: ["navLinks"]
})
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  background-color: var(--web-view-header-background-color, #F9F9F9);
  z-index: 100;
  /*padding: 0 4.5rem;*/
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
}
.header__inner {
  height: 10rem;
  display: flex;
  align-items: center;
}
.header__inner img {
  width: 10rem;
}
.header__inner ul {
  display: flex;
  margin-left: auto;
}
.header__inner ul li a {
  font-size: var(--fs-16);
  line-height: 2.4rem;
  font-family: var(--inter);
  height: 4.8rem;
  width: 12.2rem;
  border-radius: .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  margin-right: .2rem;
  text-transform: uppercase;
}
.header__inner svg {
  cursor: pointer;
}
.sell {
  margin-left: 1.6rem;
  background-color: var(--primary-color);
  color: var(--color-white) !important;
}
/*To delete*/

</style>