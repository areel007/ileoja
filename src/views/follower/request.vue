<template>
  <div class="request">
    <div class="request-card">
      <div class="request-avatar">
        <img src="../../assets/images/avatar-image.png" alt="avatar">
      </div>
      <p class="request-name">Alias Sibrum</p>
      <div style="margin-right: 7px">
        <plain-button display-text="accept"></plain-button>
      </div>
      <div style="--plain-button-background-color: #6A6B6C">
        <plain-button display-text="decline"></plain-button>
      </div>
    </div>
  </div>
</template>

<script>
import PlainButton from "../../components/core-ui/buttons/plain-button"

export default {
  name: "request",
  components: {
    PlainButton
  }
}
</script>

<style scoped>
.request-card {
  display: flex;
  align-items: center;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  padding: 20px 29px;
  --plain-button-width: 142px;
  --plain-button-padding: 12px 36px;
}
.request-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 24px;
}
.request-avatar img {
  width: 100%;
  object-fit: cover;
}
p.request-name {
  margin-right: auto;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #FD6649;
}
</style>