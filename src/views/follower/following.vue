<template>
  <div class="following">
    <div class="following-card">
      <div class="following-avatar">
        <img src="../../assets/images/avatar-image.png" alt="avatar">
      </div>
      <p class="following-name">Alias Sibrum</p>
      <plain-button display-text="unfollow"></plain-button>
    </div>
  </div>
</template>

<script>
import PlainButton from "../../components/core-ui/buttons/plain-button"

export default {
  name: "following",
  components: {
    PlainButton
  }
}
</script>

<style scoped>
.following-card {
  display: flex;
  align-items: center;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  padding: 20px 29px;
  --plain-button-width: 142px;
  --plain-button-padding: 12px 23px;
  --plain-button-background-color: #6A6B6C;
}
.following-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 24px;
}
.follower-avatar img {
  width: 100%;
  object-fit: cover;
}
p.following-name {
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