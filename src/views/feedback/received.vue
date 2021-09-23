<template>
  <div class="received" v-if="$route.path==='/account/feedback/received'">
    <div class="reactions">
      <div class="reaction happy">
        <img src="../../assets/images/happy.png" alt="happy">
        <span>Happy - {{ 1 }}</span>
      </div>
      <div class="reaction neutral">
        <img src="../../assets/images/neutral.png" alt="neutral">
        <span>Neutral - {{ 1 }}</span>
      </div>
      <div class="reaction sad">
        <img src="../../assets/images/sad.png" alt="sad">
        <span>Sad - {{ 1 }}</span>
      </div>
    </div>
    <div class="feedback-info">
      <div class="avatar">
        <img src="../../assets/images/avatar-image.png" alt="avatar">
      </div>
      <div class="full-name-and-edit">
        <div class="full-name-and-reaction">
          <p class="full-name">Sunday Morenikeji</p>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0C4.03748 0 0 4.03748 0 9C0 13.9625 4.03748 18 9 18C13.9625 18 18 13.9625 18 9C18 4.03748 13.9625 0 9 0ZM9 17.2174C4.4687 17.2174 0.782609 13.5313 0.782609 9C0.782609 4.4687 4.4687 0.782609 9 0.782609C13.5313 0.782609 17.2174 4.4687 17.2174 9C17.2174 13.5313 13.5313 17.2174 9 17.2174Z" fill="#28B446"/>
            <path d="M7.04314 7.43466C7.04314 6.78744 6.51644 6.26074 5.86923 6.26074C5.22201 6.26074 4.69531 6.78744 4.69531 7.43466C4.69531 8.08187 5.22201 8.60857 5.86923 8.60857C6.51644 8.60857 7.04314 8.08187 7.04314 7.43466ZM5.47792 7.43466C5.47792 7.21905 5.65362 7.04335 5.86923 7.04335C6.08483 7.04335 6.26053 7.21905 6.26053 7.43466C6.26053 7.65026 6.08483 7.82596 5.86923 7.82596C5.65362 7.82596 5.47792 7.65026 5.47792 7.43466Z" fill="#28B446"/>
            <path d="M12.1309 6.26074C11.4837 6.26074 10.957 6.78744 10.957 7.43466C10.957 8.08187 11.4837 8.60857 12.1309 8.60857C12.7782 8.60857 13.3048 8.08187 13.3048 7.43466C13.3048 6.78744 12.7782 6.26074 12.1309 6.26074ZM12.1309 7.82596C11.9153 7.82596 11.7396 7.65026 11.7396 7.43466C11.7396 7.21905 11.9153 7.04335 12.1309 7.04335C12.3465 7.04335 12.5222 7.21905 12.5222 7.43466C12.5222 7.65026 12.3465 7.82596 12.1309 7.82596Z" fill="#28B446"/>
            <path d="M12.7817 11.0559C12.6205 10.9115 12.3728 10.9256 12.2292 11.0864C11.413 11.9985 10.2359 12.5213 8.99899 12.5213C7.76247 12.5213 6.58503 11.9985 5.76877 11.0864C5.62438 10.9256 5.37746 10.9115 5.21624 11.0559C5.05503 11.1999 5.04172 11.4472 5.18572 11.6084C6.15029 12.686 7.54021 13.3039 8.99899 13.3039C10.4582 13.3039 11.8481 12.6856 12.8123 11.6084C12.9563 11.4472 12.9426 11.1999 12.7817 11.0559Z" fill="#28B446"/>
          </svg>

        </div>
        <div class="bio-and-edit">
          <p>Lorem ipsum dolor sit amet....</p>
          <div class="edit-and-date">
            <p class="date">1 day ago</p>
            <div class="edit">
              <p>Edit</p>
              <img src="../../assets/images/edit.png" alt="edit">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="post-feedback">
      <div class="post-feedback-avatar">
        <img src="../../assets/images/avatar-image.png" alt="avatar">
      </div>
      <div class="post-feedback-text-box">
        <input type="text" placeholder="Reply">
        <div>
          <span>send</span>
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.00855804 0.285645L0 6.28563L12.8571 7.99993L0 9.71423L0.00855804 15.7142L18 7.99993L0.00855804 0.285645Z" fill="white"/>
          </svg>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "received"
}
</script>

<style scoped>
.reactions {
  width: 414px;
  height: 50px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-bottom: 4px;
}
.reaction {
  display: flex;
  align-items: center;
}
.reaction img {
  margin-right: 10px;
}
.reaction span {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
}
.happy span {
  color: #28B446;
}
.neutral span {
  color: #6A6B6C;
}
.sad span {
  color: #DF1717;
}
.feedback-info {
  padding: 28px 32px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-column-gap: 15px;
  margin-bottom: 4px;
}
.avatar,
.post-feedback-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.avatar img,
.post-feedback-avatar img {
  width: 100%;
}
.full-name-and-reaction {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.full-name-and-reaction .full-name {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #6A6B6C;
}
.bio-and-edit {
  display: flex;
  justify-content: space-between;
}
.bio-and-edit p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #666666;
}
.edit-and-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.edit {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.edit-and-date .date {
  margin-right: 13px;
  color: #D83718;
}
.edit p {
  margin-right: 13px;
}
.post-feedback {
  padding: 12px 32px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-column-gap: 15px;
  align-items: center;
}
.post-feedback-text-box {
  width: 539px;
  border-radius: 4px;
  display: flex;
}
.post-feedback-text-box input {
  padding: 20px 29px;
  width: calc(100% - 149px);
  border: 1px solid #6A6B6C;
  outline: none;
  background-color: inherit;
  border-radius: 4px 0 0 4px;
}
.post-feedback-text-box div {
  padding: 18px 29px;
  width: 149px;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-feedback-text-box div span {
  margin-right: 12px;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #FFFFFF;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
}
</style>