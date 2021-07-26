<template>
  <div class="auth">
    <div class="overlay"></div>
    <div class="auth__inner">
      <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          class="close-svg"
          @click="$router.go(-1)"
      >
        <path d="M15.3636 2.63636C13.6629 0.935606 11.4053 0 9 0C6.5947 0
        4.33712 0.935606 2.63636 2.63636C0.935606 4.33712 0 6.5947 0 9C0
        11.4053 0.935606 13.6629 2.63636 15.3636C4.33712 17.0644 6.5947
        18 9 18C11.4053 18 13.6629 17.0644 15.3636 15.3636C17.0644 13.6629
        18 11.4053 18 9C18 6.5947 17.0644 4.33712 15.3636 2.63636ZM14.6402
        14.6402C13.1326 16.1477 11.1288 16.9773 9 16.9773C6.87121 16.9773
        4.86742 16.1477 3.35985 14.6402C0.25 11.5303 0.25 6.4697 3.35985
        3.35985C4.86742 1.85227 6.87121 1.02273 9 1.02273C11.1288 1.02273
        13.1326 1.85227 14.6402 3.35985C17.75 6.4697 17.75 11.5303 14.6402
        14.6402Z" fill="black"/>
        <path d="M12.9659 5.03405C12.7652 4.83329 12.4432 4.83329 12.2424
        5.03405L9.00002 8.27648L5.7576 5.03405C5.55684 4.83329 5.23487 4.83329
        5.03411 5.03405C4.83336 5.23481 4.83336 5.55678 5.03411 5.75754L8.27653
        8.99996L5.03411 12.2424C4.83336 12.4431 4.83336 12.7651 5.03411 12.9659C5.1326
        13.0644 5.26517 13.1174 5.39396 13.1174C5.52275 13.1174 5.65532 13.0681 5.75381
        12.9659L8.99623 9.72345L12.2386 12.9659C12.3371 13.0644 12.4697 13.1174 12.5985
        13.1174C12.7311 13.1174 12.8599 13.0681 12.9583 12.9659C13.1591 12.7651 13.1591
        12.4431 12.9583 12.2424L9.7235 8.99996L12.9659 5.75754C13.1667 5.55678 13.1667
        5.23481 12.9659 5.03405Z" fill="black"/>
      </svg>

      <div class="google-btn">
        <icon-button
            display-text="login with google"
        >
          <img src="../../assets/images/google.png" alt="google">
        </icon-button>
      </div>
      <div class="facebook-btn">
        <icon-button
            display-text="login with facebook"
        >
          <img src="../../assets/images/facebook.png" alt="google">
        </icon-button>
      </div>
      <div class="plain-btn">
        <plain-button
            display-text="Login with email"
            @button-action="loginAction"
        ></plain-button>
      </div>
      <p class="register">Don't have an account? <router-link to="/register">Register</router-link></p>
      <p class="terms">By proceeding you agree to our <br><span>Terms and Conditions</span></p>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import IconButton from "../../components/core-ui/buttons/icon-button";
import PlainButton from "../../components/core-ui/buttons/plain-button";

export default defineComponent ({
  name: "auth-screen",
  components: {PlainButton, IconButton},
  methods: {
    loginAction () {
      this.$router.push('/login')
    }
  }
})
</script>

<style scoped>
.auth {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay {
  background-color: rgba(0, 0, 0, .9);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 500;
}
.auth__inner {
  padding: 8rem;
  background-color: #F9F9F9;
  z-index: 1000;
  --icon-button-height: 4.8rem;
  --icon-button-border: 1px solid var(--secondary-color);
  position: relative;
}
.google-btn,
.facebook-btn {
  margin-bottom: 1.2rem;
}
.google-btn {
  --icon-button-background-color: var(--color-white);
  --icon-button-color: var(--secondary-color);
}
.facebook-btn {
  --icon-button-background-color: #3B5998;
  --icon-button-color: var(--color-white);
}
.plain-btn {
  margin-bottom: 4rem;
}
.register {
  text-align: center;
  margin-bottom: 2.2rem;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  letter-spacing: 0.4px;
  color: var(--secondary-color);
}
.register>a {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-medium);
  font-size: var(--fs-14);
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: 0.1px;
  color: var(--primary-color);
}
.terms {
  text-align: center;
  margin-bottom: 2.2rem;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  letter-spacing: 0.4px;
  color: var(--secondary-color);
}
.terms>span {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  text-align: center;
  letter-spacing: 0.4px;
  color: var(--primary-color);
}
.close-svg {
  position: absolute;
  right: 2.6rem;
  top: 2.6rem;
  cursor: pointer;
}

</style>