<template>
  <div class="sell">
    <div class="container">
      <p class="page__title">ileoja / {{$route.name}}</p>
      <div class="sell__inner">
        <section-title title="sell"></section-title>
        <div class="sell-form">
          <div class="form-stepper">
            <stepper :step-number="stepNumber"></stepper>
          </div>
          <form>
            <div class="first-step" v-if="stepNumber>0&&stepNumber<2">
              <div class="input-wrapper select-category">
                <select-input placeholder="Select Category *"></select-input>
              </div>
              <div class="add-photo">
                <p class="add-photo-title">Add Photo</p>
                <p class="add-photo-subtitle">First Picture is the title picture. you can also add up to five pictures</p>
                <div class="photo-upload-wrapper">
                  <photo-upload icon="file-upload"></photo-upload>
                </div>
                <p class="add-photo-subtitle">Supported formats are .jpg, .gif, .png
                  Each picture must not exceed 5 Mb.</p>
              </div>
              <div class="input-wrapper select-state">
                <select-input placeholder="Select State *"></select-input>
              </div>
              <div class="input-wrapper select-lga">
                <select-input placeholder="Local Government *"></select-input>
              </div>

            </div>
            <div class="second-step" v-if="stepNumber>1&&stepNumber<3">
<!--              Vehicle Form -->
              <select-input placeholder="Select State"></select-input>
              <text-input placeholder="Mileage (km)"></text-input>
              <select-input placeholder="Select Number of Cylinder"></select-input>
              <select-input placeholder="Select Make"></select-input>
              <text-input placeholder="VIN Number"></text-input>
              <select-input placeholder="Select Engine Size"></select-input>
              <select-input placeholder="Select Model"></select-input>
              <div class="registered-car">
                <p>Registered Car</p>
                <ul>
                  <li>
                    <label class="radio__radio">
                      <input type="radio" value="Yes" v-model="pickedYes">
                      <span class="radio__label">Yes</span>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="radio__radio">
                      <input type="radio" value="No" v-model="pickedYes">
                      <span class="radio__label">No</span>
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <select-input placeholder="Select Horse Power"></select-input>
              <select-input placeholder="Select Year of Manufacture *"></select-input>
              <select-input placeholder="Description *"></select-input>
              <select-input placeholder="Select Trim *"></select-input>
              <div class="exchange">
                <p>Exchange Position</p>
                <div class="checkbox-wrapper">
                  <input type="checkbox" id="exchange" v-model="exchange">
                  <label for="exchange">Yes</label>
                </div>
              </div>
              <div class="exchange">
                <p>Negotiable</p>
                <div class="checkbox-wrapper">
                  <input type="checkbox" id="negotiable" v-model="negotiable">
                  <label for="negotiable">Yes</label>
                </div>
              </div>
              <select-input placeholder="Select Color *"></select-input>
              <select-input placeholder="Select Body *"></select-input>
              <text-input placeholder="Full Name *"></text-input>
              <select-input placeholder="Select Condition"></select-input>
              <select-input placeholder="Select Fuel"></select-input>
              <text-input placeholder="Phone Number *"></text-input>
              <select-input placeholder="Select Second Condition *"></select-input>
              <select-input placeholder="Select Drivetrain *"></select-input>
              <select-input placeholder="Select Transmission *"></select-input>
              <select-input placeholder="Select Seats *"></select-input>
            </div>
            <div class="third-step" v-if="stepNumber>2&&stepNumber<4">
<!--              Third Step -->
              <p class="third-page-title">Promote your adverts</p>
              <p class="third-page-subtitle">Please, choose one of the following options to post your ads</p>
              <div class="standard-ad">
                <p>Standard Ad</p>
                <span>free</span>
              </div>
              <div class="top-ad">
                <div class="top-ad-header">
                  <p>Top</p>
                  <div class="top-ad-header-label">Best Offer</div>
                </div>
                <div class="ads-prices">
                  <div class="ad-duration">
                    <p class="selected-duration">7 days</p>
                    <p>21 days</p>
                    <p>30 days</p>
                  </div>
                  <p class="ad-price">N2,999</p>
                </div>
              </div>
              <div class="top-ad">
                <div class="top-ad-header">
                  <p>Bronze</p>
                  <div class="top-ad-header-label">Premium</div>
                </div>
                <p class="ad-subtitle">Enjoy facebook Adverts on your Post</p>
                <div class="ads-prices">
                  <div class="ad-duration">
                    <p class="selected-duration">1 month</p>
                    <p>3 months</p>
                  </div>
                  <p class="ad-price">N24,999</p>
                </div>
              </div>
              <p class="terms-and-condition">
                By Clicking on Post Adverts, you’ve accepted the <span>Terms of Use</span>,
                confirm that you will abide by the safety tips and declare that
                this posting does not include any prohibited items
              </p>
            </div>
            <div class="next-button" v-if="stepNumber>2">
              <plain-button display-text="post ads" @button-action="postAds"></plain-button>
            </div>
            <div class="next-button" v-else>
              <plain-button display-text="next" @button-action="next"></plain-button>
            </div>
            <div class="clear-button">
              <plain-button display-text="clear"></plain-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import SectionTitle from "../components/core-ui/titles/section-title";
import SelectInput from "../components/core-ui/inputs/select-input";
import Stepper from "../components/core-ui/progress/stepper";
import PhotoUpload from "../components/core-ui/file-upload/photo-upload";
import PlainButton from "../components/core-ui/buttons/plain-button";
import TextInput from "../components/core-ui/inputs/text-input";

export default defineComponent({
  name: "sell",
  components: {TextInput, PlainButton, PhotoUpload, Stepper, SelectInput, SectionTitle},
  setup() {
    let stepNumber = ref(1)

    const pickedYes = ref('')

    const pickedNo = ref('')

    const exchange = ref('')

    const negotiable = ref('')

    const next = () => {
      stepNumber.value = stepNumber.value + 1
    }

    const postAds = () => {
      alert('Ads Posted')
    }

    return { stepNumber, pickedYes, pickedNo, exchange, negotiable, next, postAds }
  }
})
</script>

<style scoped>
.sell {
  position: relative;
  top: 10rem;
  margin-bottom: 10rem;
}
.page__title {
  padding: 2.4rem 0 5rem 0;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.sell__inner {
  --title-margin-bottom: 1.6rem;
}
.sell-form {
  width: 100%;
  background-color: #F9F9F9;
  padding: 6.3rem 0;
}
.sell-form form {
  width: 100%;
  margin: 0 auto;
}
.first-step {
  width: 35.7rem;
  margin: 0 auto;
  --text-input-bg: #f9f9f9;
  --select-input-bg: #f9f9f9;
}
.form-stepper {
  width: 35.7rem;
  margin: 0 auto 6.8rem auto;
}
.input-wrapper {
  margin-bottom: 2.4rem;
}
.add-photo {
  margin-bottom: 2.4rem;
}
.add-photo-title {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 24px;
  letter-spacing: 0.5px;
  color: var(--primary-color);
}
.add-photo-subtitle {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 16px;
  letter-spacing: 0.4px;
  color: var(--secondary-color);
}
.photo-upload-wrapper {
  margin: .9rem 0;
}
.next-button {
  width: 35.7rem;
  margin: 0 auto 2.4rem auto;

}
.clear-button {
  width: 35.7rem;
  margin: 0 auto;
  --plain-button-background-color: var(--secondary-color)
}

/* Second Step */
.second-step {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem 2rem;
}

/* Radio Button */
.radio__radio {
  position: relative;
  cursor: pointer;
}
.radio__label {
  margin-left: 1rem;
}
.radio__radio input {
  /*position: absolute;*/
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid var(--primary-color);
  transform: translateY(-50%);
}
/* When the radio button is checked, add a blue background */
.radio__radio input:checked ~ .checkmark {
  background-color: var(--color-white);
}
/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the indicator (dot/circle) when checked */
.radio__radio input:checked ~ .checkmark:after {
  display: block;
}
/* Style the indicator (dot/circle) */
.radio__radio .checkmark:after {
  /*top: 5px;*/
  /*left: 6px;*/
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary-color);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15%;
}
.registered-car,
.exchange {
  position: relative;
}
.registered-car ul li {
  margin-bottom: 1.6rem;
  margin-left: 2.2rem;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  letter-spacing: 0.4px;
  color: #6A6B6C;
}
.registered-car ul li:last-child {
  margin-bottom: 0;
}
.registered-car ul li span {
  color: var(--secondary-color);
}
.registered-car ul li label {
  display: flex;
  align-items: center;
}
.registered-car ul li label input[type=radio] {
  margin-right: 2rem;
}
.registered-car p,
.exchange p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 24px;
  letter-spacing: 0.5px;
  color: var(--secondary-color);
  margin-bottom: 1.6rem;
}
.second-step {
  margin-bottom: 2.4rem;
  --select-input-bg: transparent;
  --text-input-bg: transparent;
}

/* Checkbox Styling */
.checkbox-wrapper {
  display: flex;
  align-items: center;
}
.checkbox-wrapper label {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: var(--secondary-color);
}
.checkbox-wrapper input[type="checkbox"] {
  cursor: pointer;
  opacity: 0;
  position: absolute;
}
.checkbox-wrapper label:before {
  content: '';
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid var(--primary-color);
  margin-right: 1.9rem;
}
.checkbox-wrapper label:hover:before,
.checkbox-wrapper input[type="checkbox"]:hover + label:before {
  background-color: var(--primary-color);
}
.checkbox-wrapper input[type="checkbox"]:checked + label:before {
  content: '\002714';
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--color-white);
  background-color: var(--primary-color);
}

/* Third Step */
.third-step {
  width: 35.7rem;
  margin: 0 auto 2.4rem auto;
  --text-input-bg: #f9f9f9;
  --select-input-bg: #f9f9f9;
}
.third-page-title {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: #FD6649;
  margin-bottom: 8px;
}
.third-page-subtitle {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6A6B6C;
  margin-bottom: 3.5rem;
}
.standard-ad {
  padding: 1.6rem 3rem;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid var(--primary-color);
  margin-bottom: 1rem;
}
.standard-ad p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #666666;
}
.standard-ad span {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #FD6649;
}
.top-ad {
  padding: 1.6rem 3rem;
  background-color: var(--color-white);
  border-radius: 4px;
  border: 1px solid var(--primary-color);
  margin-bottom: 1rem;
}
.top-ad-header {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}
.top-ad-header p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #666666;
  margin-right: 5px;
}
.top-ad-header-label {
  padding: 5px 7px;
  background-color: var(--primary-color);
  text-transform: uppercase;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 10px;
  color: var(--color-white);
  white-space: nowrap;
}
.ads-prices {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.ad-duration {
  display: flex;
}
.ad-duration p {
  padding: 4px 13px;
  border-radius: 50px;
  border: 1px solid var(--primary-color);
  margin-right: 2px;
  color: var(--primary-color);
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
}
.selected-duration {
  background-color: #FFDDD6;
  border: 1px solid #FFDDD6 !important;
}
.ad-price {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
.ad-subtitle {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6A6B6C;
  margin-bottom: 14px;
}
.terms-and-condition {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6A6B6C;
}
.terms-and-condition span {
  color: var(--primary-color);
}
</style>