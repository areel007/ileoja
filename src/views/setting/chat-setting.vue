<template>
  <div class="chat-setting">
    <p>Receive Message</p>
    <toggle></toggle>
  </div>
</template>

<script>
import Toggle from "../../components/core-ui/toggle/toggle";
export default {
  name: "chat-setting",
  components: {Toggle}
}
</script>

<style scoped>
.chat-setting {
  width: 494px;
  padding: 40px 60px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chat-setting p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
</style>