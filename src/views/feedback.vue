<template>
  <div class="feedback">
    <div class="feedback-form" v-if="$route.name==='Feedback'">
      <div class="reactions">
<!--        The reactions is going to be a custom radio button -->
        <div class="reaction-button happy">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0C4.03748 0 0 4.03748 0 9C0 13.9625 4.03748 18 9 18C13.9625 18 18 13.9625 18 9C18 4.03748 13.9625 0 9 0ZM9 17.2174C4.4687 17.2174 0.782609 13.5313 0.782609 9C0.782609 4.4687 4.4687 0.782609 9 0.782609C13.5313 0.782609 17.2174 4.4687 17.2174 9C17.2174 13.5313 13.5313 17.2174 9 17.2174Z" fill="#28B446"/>
            <path d="M7.04314 7.43466C7.04314 6.78744 6.51644 6.26074 5.86923 6.26074C5.22201 6.26074 4.69531 6.78744 4.69531 7.43466C4.69531 8.08187 5.22201 8.60857 5.86923 8.60857C6.51644 8.60857 7.04314 8.08187 7.04314 7.43466ZM5.47792 7.43466C5.47792 7.21905 5.65362 7.04335 5.86923 7.04335C6.08483 7.04335 6.26053 7.21905 6.26053 7.43466C6.26053 7.65026 6.08483 7.82596 5.86923 7.82596C5.65362 7.82596 5.47792 7.65026 5.47792 7.43466Z" fill="#28B446"/>
            <path d="M12.1309 6.26074C11.4837 6.26074 10.957 6.78744 10.957 7.43466C10.957 8.08187 11.4837 8.60857 12.1309 8.60857C12.7782 8.60857 13.3048 8.08187 13.3048 7.43466C13.3048 6.78744 12.7782 6.26074 12.1309 6.26074ZM12.1309 7.82596C11.9153 7.82596 11.7396 7.65026 11.7396 7.43466C11.7396 7.21905 11.9153 7.04335 12.1309 7.04335C12.3465 7.04335 12.5222 7.21905 12.5222 7.43466C12.5222 7.65026 12.3465 7.82596 12.1309 7.82596Z" fill="#28B446"/>
            <path d="M12.7817 11.0559C12.6205 10.9115 12.3728 10.9256 12.2292 11.0864C11.413 11.9985 10.2359 12.5213 8.99899 12.5213C7.76247 12.5213 6.58503 11.9985 5.76877 11.0864C5.62438 10.9256 5.37746 10.9115 5.21624 11.0559C5.05503 11.1999 5.04172 11.4472 5.18572 11.6084C6.15029 12.686 7.54021 13.3039 8.99899 13.3039C10.4582 13.3039 11.8481 12.6856 12.8123 11.6084C12.9563 11.4472 12.9426 11.1999 12.7817 11.0559Z" fill="#28B446"/>
          </svg>
          <span>Happy</span>
        </div>
        <div class="reaction-button neutral">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.3833 0 0 5.3833 0 12C0 18.6167 5.3833 24 12 24C18.6167 24 24 18.6167 24 12C24 5.3833 18.6167 0 12 0ZM12 22.9565C5.95826 22.9565 1.04348 18.0417 1.04348 12C1.04348 5.95826 5.95826 1.04348 12 1.04348C18.0417 1.04348 22.9565 5.95826 22.9565 12C22.9565 18.0417 18.0417 22.9565 12 22.9565Z" fill="#6A6B6C"/>
            <path d="M7.82694 11.4781C8.68989 11.4781 9.39215 10.7758 9.39215 9.91287C9.39215 9.04992 8.68989 8.34766 7.82694 8.34766C6.96398 8.34766 6.26172 9.04992 6.26172 9.91287C6.26172 10.7758 6.96398 11.4781 7.82694 11.4781ZM7.82694 9.39113C8.11441 9.39113 8.34868 9.6254 8.34868 9.91287C8.34868 10.2004 8.11441 10.4346 7.82694 10.4346C7.53946 10.4346 7.3052 10.2004 7.3052 9.91287C7.3052 9.6254 7.53946 9.39113 7.82694 9.39113Z" fill="#6A6B6C"/>
            <path d="M16.1746 8.34766C15.3116 8.34766 14.6094 9.04992 14.6094 9.91287C14.6094 10.7758 15.3116 11.4781 16.1746 11.4781C17.0375 11.4781 17.7398 10.7758 17.7398 9.91287C17.7398 9.04992 17.0375 8.34766 16.1746 8.34766ZM16.1746 10.4346C15.8871 10.4346 15.6528 10.2004 15.6528 9.91287C15.6528 9.6254 15.8871 9.39113 16.1746 9.39113C16.4621 9.39113 16.6963 9.6254 16.6963 9.91287C16.6963 10.2004 16.4621 10.4346 16.1746 10.4346Z" fill="#6A6B6C"/>
            <path d="M17.2182 14.6089H6.78346C6.49546 14.6089 6.26172 14.8426 6.26172 15.1306C6.26172 15.4186 6.49546 15.6523 6.78346 15.6523H17.2182C17.5062 15.6523 17.74 15.4186 17.74 15.1306C17.74 14.8426 17.5062 14.6089 17.2182 14.6089Z" fill="#6A6B6C"/>
          </svg>
          <span>Neutral</span>
        </div>
        <div class="reaction-button sad">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.3833 0 0 5.3833 0 12C0 18.6167 5.3833 24 12 24C18.6172 24 24 18.6167 24 12C24 5.3833 18.6172 0 12 0ZM12 22.9565C5.95826 22.9565 1.04348 18.0417 1.04348 12C1.04348 5.95826 5.95826 1.04348 12 1.04348C18.0412 1.04348 22.9565 5.95826 22.9565 12C22.9565 18.0417 18.0412 22.9565 12 22.9565Z" fill="#DF1717"/>
            <path d="M9.39215 9.91287C9.39215 9.04992 8.68989 8.34766 7.82694 8.34766C6.96398 8.34766 6.26172 9.04992 6.26172 9.91287C6.26172 10.7758 6.96398 11.4781 7.82694 11.4781C8.68989 11.4781 9.39215 10.7758 9.39215 9.91287ZM7.3052 9.91287C7.3052 9.6254 7.53946 9.39113 7.82694 9.39113C8.11441 9.39113 8.34868 9.6254 8.34868 9.91287C8.34868 10.2004 8.11441 10.4346 7.82694 10.4346C7.53946 10.4346 7.3052 10.2004 7.3052 9.91287Z" fill="#DF1717"/>
            <path d="M16.1746 8.34766C15.3116 8.34766 14.6094 9.04992 14.6094 9.91287C14.6094 10.7758 15.3116 11.4781 16.1746 11.4781C17.0375 11.4781 17.7398 10.7758 17.7398 9.91287C17.7398 9.04992 17.0375 8.34766 16.1746 8.34766ZM16.1746 10.4346C15.8866 10.4346 15.6528 10.2004 15.6528 9.91287C15.6528 9.6254 15.8866 9.39113 16.1746 9.39113C16.4626 9.39113 16.6963 9.6254 16.6963 9.91287C16.6963 10.2004 16.4626 10.4346 16.1746 10.4346Z" fill="#DF1717"/>
            <path d="M12.0004 14.6089C10.0554 14.6089 8.20216 15.4327 6.91607 16.8696C6.72407 17.0845 6.74233 17.4143 6.95677 17.6063C7.17172 17.7988 7.50146 17.78 7.69346 17.5656C8.78181 16.3494 10.3517 15.6524 12.0004 15.6524C13.6491 15.6524 15.219 16.3494 16.3074 17.5656C16.4102 17.6809 16.5531 17.7393 16.6961 17.7393C16.8197 17.7393 16.9449 17.6955 17.0441 17.6063C17.2585 17.4143 17.2768 17.0845 17.0848 16.8696C15.7987 15.4332 13.946 14.6089 12.0004 14.6089Z" fill="#DF1717"/>
          </svg>
          <span>Sad</span>
        </div>
      </div>
      <input type="text" placeholder="Subject">
      <input type="text" placeholder="Write a detailed feedback">
      <div class="feedback-form-button-wrapper">
        <plain-button display-text="send feedback"></plain-button>
      </div>
    </div>
    <nav v-if="$route.name!=='Feedback'">
      <router-link to="/account/feedback/received">Received</router-link>
      <router-link to="/account/feedback/sent">Sent</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import PlainButton from "../components/core-ui/buttons/plain-button"

export default {
  name: "feedback",
  components: {
    PlainButton
  }
}
</script>

<style scoped>
.feedback-form {
  padding: 59px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
}
.feedback nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 5px;
  width: 414px;
  text-align: center;
}
.feedback nav a {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #6A6B6C;
  padding: 16px 0;
}
.router-link-active {
  color: var(--primary-color) !important;
  border-bottom: 2px solid var(--primary-color) !important;
}
.reactions {
  display: grid;
  grid-template-columns: 220px 220px 220px;
  grid-column-gap: 20px;
  margin-bottom: 43px;
}
.reaction-button {
  padding: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.reaction-button svg {
  margin-right: 10px;
}
.reaction-button span {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
}
.reaction-button.happy {
  border: 1px solid #28B446;
  color: #28B446;
}
.reaction-button.neutral {
  border: 1px solid #6A6B6C;
  color: #6A6B6C;
}
.reaction-button.sad {
  border: 1px solid #DF1717;
  color: #DF1717;
}
.feedback-form-button-wrapper {
  width: 357px;
  margin: 0 auto;
}
.feedback-form input[type="text"] {
  display: block;
  margin: 0 auto 14px auto;
  padding: 16px 29px;
  border: 1px solid #6A6B6C;
  box-sizing: border-box;
  border-radius: 4px;
  width: 357px;
  outline: none;
}
.feedback-form input[type="text"]::placeholder {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #666666;
}
</style>