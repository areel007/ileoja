<template>
  <div class="order">
    <div class="container">
      <p class="page-tile">ileoja / {{$route.name}}</p>
      <div class="order__inner">
        <section-title title="order form"></section-title>
        <div class="order-form">
          <form>
            <div class="order-product-image">
              <div class="product-image"></div>
              <div class="name-amount">
                <p class="name">Toyota Camry 2021</p>
                <p class="amount">N2,500,000</p>
              </div>
            </div>
            <div class="form__input">
              <text-input input-type="text" placeholder="Name"></text-input>
            </div>
            <div class="form__input">
              <text-input input-type="text" placeholder="Phone Number"></text-input>
            </div>
            <div class="form__input">
              <text-input input-type="text" placeholder="Delivery Address"></text-input>
            </div>
            <div class="form__input">
              <text-input input-type="text" placeholder="Payment On Delivery"></text-input>
            </div>
            <div class="form__input">
              <text-input input-type="text" placeholder="Quality"></text-input>
            </div>
            <p class="terms">By proceeding you agree to our <br><span>Terms and Conditions</span></p>
            <div class="order-button">
              <plain-button display-text="Order"></plain-button>
            </div>
            <div class="cancel-order-button">
              <plain-button display-text="cancel"></plain-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import SectionTitle from "../components/core-ui/titles/section-title";
import TextInput from "../components/core-ui/inputs/text-input";
import PlainButton from "../components/core-ui/buttons/plain-button";

export default defineComponent({
  name: "order",
  components: {PlainButton, TextInput, SectionTitle}
})
</script>

<style scoped>
.order {
  position: relative;
  top: 10rem;
  margin-bottom: 10rem;
}
.page-tile {
  margin: 2.4rem 0;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.order__inner {
  --title-margin-bottom: 1.6rem;
}
.order-form {
  width: 100%;
  background-color: #F9F9F9;
  padding: 6.3rem 0;
}
.order-form form {
  width: 35.7rem;
  margin: 0 auto;
  --text-input-bg: #f9f9f9;
}
.order-product-image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.9rem;
}
.product-image {
  margin-right: 1.9rem;
  width: 10.6rem;
  height: 10.6rem;
  background-color: var(--primary-color);
}
.name {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #000000;
  margin-bottom: .1rem;
}
.amount {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-wieght-bold);
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.18px;
  color: var(--primary-color);
}
.form__input {
  margin-bottom: 1.4rem;
}
.form__input:last-child {
  margin-bottom: 4.6rem;
  border: 1px solid red;
}
p.terms {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 16px;
  letter-spacing: 0.4px;
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 1.9rem;
}
p.terms span {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 16px;
  letter-spacing: 0.4px;
  color: var(--primary-color);
}
.order-button {
  margin-bottom: 1.2rem;
}
.cancel-order-button {
  --plain-button-background-color: var(--secondary-color);
}
</style>