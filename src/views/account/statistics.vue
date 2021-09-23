<template>
  <div class="statistics">
    <div class="ad-engagements">
      <div class="ad-engagement">
        <p>Impressions</p>
        <p class="count">{{ 0 }}</p>
      </div>
      <div class="ad-engagement">
        <p>Visitors</p>
        <p class="count">{{ 0 }}</p>
      </div>
      <div class="ad-engagement">
        <p>Phone Views</p>
        <p class="count">{{ 0 }}</p>
      </div>
      <div class="ad-engagement">
        <p>Chat Requests</p>
        <p class="count">{{ 0 }}</p>
      </div>
    </div>
    <div class="engagement-date">
      <div class="start-date">
        <input type="date" v-model="startDate">
      </div>
      <div class="end-date">
        <input type="date" v-model="endDate">
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "statistics",
  setup () {
    const startDate = ref(null)
    const endDate = ref(null)

    return {
      startDate,
      endDate
    }
  }

})
</script>

<style scoped>
.statistics {
  padding: 28px;
  background-color: #F9F9F9;
  display: grid;
  grid-template-columns: 366px 344px;
  grid-column-gap: 57px;
}
.ad-engagement {
  width: 100%;
  padding: 20px 33px;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  margin-bottom: 15px;
}
.ad-engagement:last-child {
  margin-bottom: 0;
}
.ad-engagement p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #FD6649;
}
.count {
  font-weight: 500 !important;
  font-size: 20px !important;
  line-height: 24px !important;
  letter-spacing: 0.15px !important;
  color: #FD6649;
}
.engagement-date {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--primary-color);
  position: relative;
}
</style>