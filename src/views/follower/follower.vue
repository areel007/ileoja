<template>
  <div class="followers">
    <div class="follower-card">
      <div class="follower-avatar">
        <img src="../../assets/images/avatar-image.png" alt="avatar">
      </div>
      <p class="follower-name">Alias Sibrum</p>
      <plain-button display-text="follow"></plain-button>
    </div>
  </div>
</template>

<script>
import PlainButton from "../../components/core-ui/buttons/plain-button"

export default {
  name: "follower",
  components: {
    PlainButton
  }
}
</script>

<style scoped>
.follower-card {
  display: flex;
  align-items: center;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  padding: 20px 29px;
  --plain-button-width: 142px;
  --plain-button-padding: 12px 36px;
}
.follower-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 24px;
}
.follower-avatar img {
  width: 100%;
  object-fit: cover;
}
p.follower-name {
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