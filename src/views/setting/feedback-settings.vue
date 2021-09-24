<template>
  <div class="feedback-settings">
    <p>Disable Feedbacks</p>
    <toggle></toggle>
  </div>
</template>

<script>
import Toggle from "../../components/core-ui/toggle/toggle";
export default {
  name: "feedback-settings",
  components: {Toggle}
}
</script>

<style scoped>
.feedback-settings {
  width: 494px;
  padding: 40px 60px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.feedback-settings p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
</style>