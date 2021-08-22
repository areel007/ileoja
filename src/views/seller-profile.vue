<template>
  <div class="seller-profile">
    <div class="container">
      <p class="page__title">ileoja / <span>{{ $route.name }}</span></p>
      <div class="seller-profile__inner">
        <div class="column-one">
          <section-title :title="'Seller Profile'"></section-title>
          <div class="seller-profile__details">
            <div class="seller-profile__picture">
              <img src="../assets/images/default-dp.png" alt="default">
              <img class="camera" src="../assets/images/cam.png" alt="camera">
              <div class="overlay"></div>
            </div>
            <p class="seller-name">Olawale Morenikeji</p>
            <rating :rating="4"></rating>
            <p class="registered-date">Registered: <b>1 year</b></p>
            <p class="last-seen">Last Seen: <b>1 year ago</b></p>
            <plain-button display-text="show contact"></plain-button>
            <div class="seller-feedback">
              <div class="feedback-response happy-response">
                <img src="../assets/images/happy.png" alt="happy">
                Happy -
                {{1}}
              </div>
              <div class="feedback-response neutral-response">
                <img src="../assets/images/neutral.png" alt="happy">
                Neutral -
                {{0}}
              </div>
              <div class="feedback-response neutral-response">
                <img src="../assets/images/sad.png" alt="happy">
                Sad -
                {{0}}
              </div>
            </div>
            <div class="ads-followers-followings">
              <div class="column">
                <span>{{2}}</span>
                <span>Ads</span>
              </div>
              <div class="column">
                <span>{{0}}</span>
                <span>Followers</span>
              </div>
              <div class="column">
                <span>{{0}}</span>
                <span>Followings</span>
              </div>
            </div>
          </div>
        </div>
        <div class="column-two">
          <section-title :title="'Seller Ads'"></section-title>
          <search-filter-card
              v-for="(product, index) in searchedFilteredProducts"
              :key="index"
              :amount="product.amount"
              :is-promoted="product.isPromoted"
              :location="product.location"
              :product-description="product.productDescription"
              :product-image="product.productImage"
              :product-name="product.productName"
              :product-spec="product.productSpec"
              :time="product.time"
          ></search-filter-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, reactive} from "vue";
import SectionTitle from "../components/core-ui/titles/section-title";
import Rating from "../components/core-ui/rating/rating";
import PlainButton from "../components/core-ui/buttons/plain-button";
import SearchFilterCard from "../components/core-ui/cards/search-filter-card";

export default defineComponent({
  name: "seller-profile",
  components: {SearchFilterCard, PlainButton, Rating, SectionTitle},
  setup() {
    const searchedFilteredProducts = reactive([
      {
        amount: 25000,
        productImage: "muscle.png",
        isPromoted: true,
        location: "Lagos",
        productDescription: "Clean Used Toyota Car working perfectly buy and drive",
        productName: "Toyota Camry 2021",
        productSpec: [
          "Nigerian Use",
          "Petrol",
          "Automatic",
        ],
        time: "01 - 04 -2021 12:20"
      },
      {
        amount: 25000,
        productImage: "muscle.png",
        isPromoted: true,
        location: "Lagos",
        productDescription: "Clean Used Toyota Car working perfectly buy and drive",
        productName: "Toyota Camry 2021",
        productSpec: [
          "Nigerian Use",
          "Petrol",
          "Automatic",
        ],
        time: "01 - 04 -2021 12:20"
      },
    ])

    return {
      searchedFilteredProducts
    }
  }
})
</script>

<style scoped>
.seller-profile {
  position: relative;
  top: 10rem;
  padding: 2.4rem;
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
.seller-profile__inner {
  display: grid;
  grid-template-columns: 44rem 89rem;
  grid-column-gap: 3rem;
}
.column-one {
  --title-margin-bottom: 2.1rem;
}
.seller-profile__details {
  padding: 3rem 1.3rem;
  background-color: #E9E9E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: .4rem;
  --plain-button-box-shadow: none;
  --plain-button-width: 18.5rem;
  --plain-button-padding: 1.5rem 2.5rem
}
.seller-profile__picture {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  margin-bottom: 1.9rem;
 }
.camera {
  position: absolute;
  bottom: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  z-index: 10;
  background-color: rgba(0, 0, 0, .5);
}
.seller-name {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
  color: var(--secondary-color);
  margin-bottom: 1.3rem;
}
.registered-date,
.last-seen {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  letter-spacing: 0.4px;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}
.seller-feedback {
  width: 100%;
  padding: 1.6rem 2rem;
  margin-top: 2.2rem;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  display: flex;
  justify-content: space-between;
}
.feedback-response {
  display: flex;
  align-items: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  letter-spacing: 0.4px;
}
.happy-response {
  color: #28B446;
}
.feedback-response img {
  margin-right: 1rem;
}
.ads-followers-followings {
  padding: 1.6rem 4rem;
  background-color: var(--primary-color);
  width: 100%;
  border-radius: 0 0 .4rem .4rem;
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-medium);
  font-size: var(--fs-12);
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.4px;
  color: var(--color-white);
}
</style>