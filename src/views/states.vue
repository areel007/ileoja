<template>
  <div class="states">
    <div class="back" @click="goBack">
      <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </svg>
      Back
    </div>
    <p class="states__title">All Nigeria
      <span class="ads">- 712734 ads</span>
    </p>
    <div class="states__inner">
      <ul>
        <li
            v-for="state in allStates"
            :key="state.id"
            @click="getLGA(state)"
        >
          <span>
            {{ state.name }}
            <span class="count">- 712734 ads</span>
          </span>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.6019 8.1597L0.933977 13.8394C0.720586 14.0532 0.374333 14.0536 0.160587 13.8402C-0.053214 13.6269 -0.0535695 13.2806 0.159766 13.0668L5.82809 7.38669C6.04132 7.17346 6.04132 6.82652 5.82768 6.61289L0.159766 0.933159C-0.0535695 0.719357 -0.053214 0.373103 0.160587 0.159768C0.267309 0.053237 0.407118 0 0.546871 0C0.687008 0 0.827145 0.0535374 0.933977 0.160588L6.60148 5.83991C7.24116 6.47959 7.24116 7.52043 6.6019 8.1597Z" fill="#6A6B6C"/>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
// import router from "../router";
import {mapGetters, mapActions} from "vuex"

export default defineComponent({
  name: "states",
  methods: {
    ...mapActions(['fetchStates']),
    goBack () {
      this.$router.go(-1)
    },
    getLGA (state) {
      this.$router.push({ path: '/states/:lga', query: { stateName: state.name, stateId: state.id }})
    }
  },
  computed: mapGetters(['allStates']),
  created() {
    this.fetchStates()
  }

})
</script>

<style scoped>
.states {
  width: 100%;
  height: 100vh;
  background-color: #F9F9F9;
  padding: 3.2rem 4.7rem;
  z-index: 5000;
  position: relative;
}
.states__title {
  font-family: var(--montserat);
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  color: var(--secondary-color);
  margin-bottom: 3.3rem;
}
.states__title span.ads {
  font-family: var(--montserat);
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  color: var(--primary-color);
}
.states__inner {
  padding: 2.2rem 2.5rem;
  width: 100%;
  background-color: var(--color-white);
}
.states__inner {
}
.states__inner ul {
  height: 40rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 4rem;
}
.states__inner ul li {
  font-family: var(--montserat);
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  color: #6A6B6C;
  margin-bottom: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.count {
  color: #FD6649;
}
.back {
  display: flex;
  align-items: center;
  font-family: var(--montserat);
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  color: #6A6B6C;
  cursor: pointer;
  margin-bottom: 2rem;
}
.back svg {
  margin-right: 1.9rem;
  fill: #6A6B6C;
}

</style>