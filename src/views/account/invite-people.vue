<template>
  <div class="invite-people">
    <img src="../../assets/images/invite-pics.png" alt="invite people">
    <div class="invite-people-form">
      <p>Earn 10% on the subscription of every friend invited for the first 12 months</p>
      <div class="form-control">
        <input type="text" placeholder="https://ileoja.ng/0000001" v-model="shareLink">
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            @click="copy"
        >
          <g clip-path="url(#clip0)">
            <path d="M7.30083 14.625C5.54356 14.625 4.11328 13.1947 4.11328 11.4374V3.75H2.80083C1.66306 3.75 0.738281 4.67464 0.738281 5.81241V15.9374C0.738281 17.0752 1.66306 18 2.80083 18H12.1757C13.3135 18 14.2383 17.0752 14.2383 15.9374V14.625H7.30083Z" fill="#6A6B6C"/>
            <path d="M17.2382 2.06255C17.2382 0.923264 16.315 0 15.1758 0H7.30083C6.16154 0 5.23828 0.923264 5.23828 2.06255V11.4375C5.23828 12.5767 6.16154 13.5 7.30083 13.5H15.1758C16.315 13.5 17.2382 12.5767 17.2382 11.4375V2.06255Z" fill="#6A6B6C"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>

      </div>
      <plain-button display-text="share with friends"></plain-button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import PlainButton from "../../components/core-ui/buttons/plain-button";

export default defineComponent({
  name: "invite-people",
  components: {PlainButton},
  data() {
    return {
      shareLink: 'https://ileoja.ng/0000001'
    }
  },
  methods: {
    copy () {
      navigator.clipboard.writeText(this.shareLink)
    }
  }
})
</script>

<style scoped>
.invite-people {
  width: 100%;
  padding: 49px 32px;
  background-color: #E9E9E9;
  display: grid;
  grid-template-columns: 281px 1fr;
  grid-column-gap: 37px;
  border-radius: 4px;
}
.invite-people-form {
  --plain-button-width: 357px;
}
.invite-people-form p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
  margin-bottom: 15px;
}
.invite-people-form .form-control {
  width: 357px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #6A6B6C;
  border-radius: 4px;
  padding: 16px 29px;
  margin-bottom: 15px;
}
.invite-people-form .form-control input {
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
}
.invite-people-form .form-control svg {
  cursor: pointer;
}
</style>