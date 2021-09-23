<template>
  <div class="account">
    <div class="container">
      <p class="page__title" v-if="$route.name==='Account'">ileoja / {{$route.name}}</p>
      <p class="page__title" v-else>ileoja / Account / {{$route.name}}</p>
      <div class="account__inner">
        <div class="column-one">
          <section-title title="Account"></section-title>
          <div class="dp-and-name">
            <div class="account-dp">
              <div class="account-dp-overlay"></div>
              <img src="../assets/images/default-dp.png" alt="default dp">
              <div class="account-camera">
                <img src="../assets/images/cam.png" alt="camera">
              </div>
            </div>
            <p class="account-name">Olawale Morenikeji</p>
          </div>
          <router-link
              :to="accountSideNavigation.navLink"
              class="account-side-navigation"
              v-for="(accountSideNavigation, index) in accountSideNavigations"
              :key="index"
          >
            <p class="account-side-navigation-title">{{ accountSideNavigation.accountSideNavigationTitle }}</p>
            <p class="account-side-navigation-subtitle">{{ accountSideNavigation.accountSideNavigationSubtitle }}</p>
            <svg width="23" height="12" viewBox="0 0 23 12" fill="none">
              <path d="M22.3469 5.33638C22.3467 5.3361 22.3465 5.33577 22.3462
              5.33549L17.7499 0.460497C17.4056 0.095294 16.8486 0.096653 16.5059
              0.463684C16.1632 0.830668 16.1645 1.42424 16.5088 1.78949L19.5948
              5.06249H0.966055C0.480236 5.06249 0.0864258 5.48221 0.0864258 5.99999C0.0864258
              6.51777 0.480236 6.93749 0.966055 6.93749H19.5947L16.5089 10.2105C16.1646
              10.5757 16.1632 11.1693 16.5059 11.5363C16.8487 11.9034 17.4057 11.9046
              17.75 11.5395L22.3462 6.66449C22.3465 6.66421 22.3467 6.66388 22.347
              6.6636C22.6915 6.29713 22.6904 5.70163 22.3469 5.33638Z" fill="#E9E9E9"
              />
            </svg>
          </router-link>

        </div>
        <div class="column-two">
          <section-title :title="$route.name"></section-title>
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
  name: "account",
  components: {SectionTitle},
  setup() {
    const accountSideNavigations = reactive([
      {
        accountSideNavigationTitle: 'Invite a friend',
        accountSideNavigationSubtitle: 'Invite a friend and get rewarded',
        navLink: '/account/invite-people'
      },
      {
        accountSideNavigationTitle: 'Statistics',
        accountSideNavigationSubtitle: 'Reports of activities',
        navLink: '/account/statistics'
      },
      {
        accountSideNavigationTitle: 'My Adverts',
        accountSideNavigationSubtitle: 'Manage your adverts',
        navLink: '/account/my-adverts'
      },
    ])

    return {
      accountSideNavigations
    }
  }
})
</script>

<style scoped>
.account {
  position: relative;
  top: 10rem;
  margin-bottom: 40px;
}
.account__inner {
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
.column-one,
.column-two {
  --title-margin-bottom: 1.6rem;
}
.dp-and-name {
  width: 100%;
  height: 231px;
  background-color: #F9F9F9;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}
.account-dp {
  width: 120px;
  height: 120px;
  position: relative;
  margin-bottom: 1.9rem;
}
.account-dp-overlay {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: black;
  opacity: .5;
}
.account-dp img {
  width: 100%;
}
.account-camera {
  width: 29px;
  height: 22px;
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
}
.account-camera img {
  width: 100%;
}
.account-name {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.account-side-navigation {
  padding: 12px 23px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  position: relative;
  margin-bottom: 5px;
  cursor: pointer;
  display: block;
}
.account-side-navigation-title {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.1px;
  color: #6A6B6C;
}
.account-side-navigation-subtitle {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #9E9E9E;
}
.account-side-navigation svg {
  position: absolute;
  right: 23px;
  top: 50%;
  transform: translateY(-50%);
}
</style>