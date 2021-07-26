<template>
  <footer v-if="$route.name==='Home'">
    <div class="container">
      <div class="footer__inner">
        <div class="top__footer__inner">
          <div
              v-for="(footerDetail, index) in footerDetails"
              :key="index"
              class="column">
            <p class="column__title">{{ footerDetail.columnHeader }}</p>
            <ul>
              <li
                  v-for="(link, index) in footerDetail.subLinks"
                  :key="index"
              >
                <router-link to="/">{{ link }}</router-link>
              </li>
            </ul>
          </div>
          <div class="column">
            <p class="column__title">Apps</p>
            <ul>
              <li>
                <router-link to="/">
                  <img src="../../../assets/images/apple.png" alt="apple">
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <img src="../../../assets/images/android.png" alt="android">
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom__footer__inner">
          <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.to"
          >
            <img :src="require(`../../../assets/images/svgs/${social.imageUrl}`)" alt="twitter">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "footer-component",
  props: ["footerDetails", "socials"],
})
</script>

<style scoped>
footer {
  padding: 10.4rem 0;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
}
.footer__inner {
  width: 94.6rem;
  margin: 0 auto;
}
.top__footer__inner {
  display: flex;
  justify-content: space-between;
}
.column__title {
  margin-bottom: 3.1rem;
  color: var(--primary-color);
  font-size: var(--fs-14);
  line-height: 1.5rem;
  font-weight: var(--font-weight-medium);
  font-family: var(--montserat);
}
.column ul li {
  margin-bottom: 3rem;
  line-height: 1.6rem;
  font-weight: var(--font-weight-normal);
  font-family: var(--montserat);
}
.column ul li a {
  font-size: var(--fs-12);
  color: var(--secondary-color);
}
.bottom__footer__inner {
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
}
.bottom__footer__inner a img {
  margin-right: 3.3rem;
}

</style>