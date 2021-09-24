<template>
  <div class="setting">
    <div class="container">
      <p class="page__title" v-if="$route.name==='Account'">ileoja / {{$route.name}}</p>
      <p class="page__title" v-else>ileoja / Account / {{$route.name}}</p>
      <div class="setting__inner">
        <div class="left-column">
          <section-title title="Setting"></section-title>
          <div class="back-button">
            <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
            >
              <path d="M18.1437 7.25018H3.2156L8.93183 1.79318C9.23114 1.50743 9.24274 1.03268
              8.95764 0.732683C8.67292 0.433058 8.19925 0.421058 7.89955 0.706808L1.37142
              6.93931C1.08894 7.22281 0.932922 7.59931 0.932922 8.00018C0.932922 8.40068
              1.08894 8.77756 1.38452 9.07343L7.89993 15.2932C8.04472 15.4316 8.2303 15.5002
              8.41588 15.5002C8.61343 15.5002 8.81098 15.4222 8.95802 15.2673C9.24312 14.9673
              9.23152 14.4929 8.9322 14.2072L3.19203 8.75018H18.1437C18.5568 8.75018 18.892
              8.41418 18.892 8.00018C18.892 7.58618 18.5568 7.25018 18.1437 7.25018Z" fill="#6A6B6C"
              />
            </svg>
          </div>
          <div class="setting-options">
            <router-link
                v-for="(_option, index) in settingOptions"
                :to="_option.url"
                :key="index"
                class="setting-option"
            >
              <p class="option">{{ _option.option }}</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M18.9999 12.046C18.447 12.046 18 12.494 18 13.0459V21.046C18 21.5969 17.5519 22.0459 17.0001 22.0459H3C2.44794 22.0459 2.00006 21.5969 2.00006 21.046V7.0459C2.00006 6.49493 2.44794 6.04596 3 6.04596H11.0001C11.553 6.04596 12 5.5979 12 5.04602C12 4.49396 11.553 4.0459 11.0001 4.0459H3C1.34601 4.0459 0 5.39191 0 7.0459V21.046C0 22.7 1.34601 24.046 3 24.046H17.0001C18.6541 24.046 20.0001 22.7 20.0001 21.046V13.0459C20.0001 12.4929 19.5529 12.046 18.9999 12.046Z" fill="#6A6B6C"/>
                  <path d="M9.37591 11.1356C9.30597 11.2056 9.25891 11.2946 9.23895 11.3905L8.53198 14.9266C8.49902 15.0905 8.55102 15.2595 8.66894 15.3785C8.76398 15.4736 8.89197 15.5245 9.02307 15.5245C9.05493 15.5245 9.08807 15.5215 9.12103 15.5146L12.6561 14.8076C12.754 14.7875 12.843 14.7406 12.912 14.6705L20.824 6.75848L17.289 3.22363L9.37591 11.1356Z" fill="#6A6B6C"/>
                  <path d="M23.2679 0.778152C22.2931 -0.196884 20.707 -0.196884 19.7329 0.778152L18.349 2.16206L21.884 5.6971L23.2679 4.313C23.74 3.84206 24 3.214 24 2.54604C24 1.87807 23.74 1.25002 23.2679 0.778152Z" fill="#6A6B6C"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

            </router-link>
          </div>
        </div>
        <div class="right-column">
          <section-title :title="$route.name.toLowerCase()==='setting'?'Profile':$route.name"></section-title>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, reactive} from "vue";
import SectionTitle from "../components/core-ui/titles/section-title";

export default defineComponent({
  name: "setting",
  components: {SectionTitle},
  setup() {
    const settingOptions = reactive([
      {
        option: 'Profile',
        url: '/setting/profile'
      },
      {
        option: 'Phone Number Settings',
        url: '/setting/phone-number-settings'
      },
      {
        option: 'Chat Settings',
        url: '/setting/chat-settings'
      },
      {
        option: 'Feedback Settings',
        url: '/setting/feedback-settings'
      },
      {
        option: 'Social Settings',
        url: '/setting/social-settings'
      },
      {
        option: 'Notification Settings',
        url: '/setting/notification-settings'
      },
      {
        option: 'Change Password',
        url: '/setting/change-password'
      },
      {
        option: 'Manage Account',
        url: '/setting/manage-account'
      },
      {
        option: 'Rate Us',
        url: '/setting/rate-us'
      },
      {
        option: 'About Ileoja',
        url: '/setting/about-ileoja'
      },
    ])

    return {
      settingOptions
    }
  }
})
</script>

<style scoped>
.setting {
  position: relative;
  top: 10rem;
  margin-bottom: 40px;
  --title-margin-bottom: 1.6rem;
}
.setting__inner {
  display: grid;
  grid-template-columns: 440px 1fr;
  grid-column-gap: 1.3rem;
}
.page__title {
  padding: 2.4rem 0;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.back-button {
  display: flex;
  align-items: center;
  justify-content: left;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  padding: 20px 30px;
  cursor: pointer;
  margin-bottom: 7px;
}
.setting-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  border: 1px solid #E9E9E9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 20px 30px;
  cursor: pointer;
  margin-bottom: 7px;
}
p.option {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
</style>