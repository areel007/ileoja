<template>
  <div class="search-filter-card">
    <div class="search-filter-card-image">
      <img src="../../../assets/images/muscle.png" alt="car">
    </div>
    <div class="search-filter-card-details">
      <div class="product-name__star">
        <p>Toyota Camry 2021</p>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.9582 7.04549C16.8528 6.70742 16.5655 6.46806 16.2268 6.43609L11.6081 5.99853L9.78275 1.53909C9.64798 1.21146 9.34134 1 9.00002 1C8.65871 1 8.35194 1.21146 8.21803 1.53909L6.39268 5.99853L1.77322 6.43609C1.43459 6.4687 1.14784 6.70805 1.04188 7.04549C0.936532 7.38357 1.03382 7.75438 1.28993 7.98877L4.78132 11.1834L3.75189 15.9147C3.67657 16.2626 3.80596 16.6223 4.08258 16.831C4.23126 16.9437 4.40595 17 4.58125 17C4.73188 17 4.88264 16.9582 5.01729 16.8741L9.00002 14.3891L12.982 16.8741C13.2741 17.0563 13.6415 17.0396 13.9175 16.831C14.1941 16.6223 14.3235 16.2626 14.2482 15.9147L13.2187 11.1834L16.7101 7.98877C16.9661 7.75438 17.0635 7.38433 16.9582 7.04549V7.04549Z" stroke="black"/>
        </svg>

      </div>
      <span class="product-description">Clean Used Toyota Car working perfectly buy and drive</span>
      <div class="product__spec">
        <div class="spec">Nigerian Use</div>
        <div class="spec">Petrol</div>
        <div class="spec">Automatic</div>
      </div>
      <span class="amount">$2,500,000</span>
      <div class="location-time-promoted">
        <div class="location__loc">
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99997 0C3.05922 0 0.666626 2.39259 0.666626 5.33334C0.666626 6.21616 0.887345 7.09147 1.30694 7.86784L5.70831 15.8281C5.7669 15.9342 5.87856 16 5.99997 16C6.12137 16 6.23303 15.9342 6.29162 15.8281L10.6946 7.86522C11.1126 7.09147 11.3333 6.21613 11.3333 5.33331C11.3333 2.39259 8.94071 0 5.99997 0ZM5.99997 8C4.52959 8 3.33331 6.80372 3.33331 5.33334C3.33331 3.86297 4.52959 2.66669 5.99997 2.66669C7.47034 2.66669 8.66662 3.86297 8.66662 5.33334C8.66662 6.80372 7.47034 8 5.99997 8Z" fill="#6A6B6C"/>
          </svg>
          Lagos State
        </div>
        <div class="time__ti">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.58862 0 0 3.58862 0 8C0 12.4114 3.58862 16 8 16C12.4114 16 16 12.4114 16 8C16 3.58862 12.4114 0 8 0ZM11.8047 12.1379C11.6747 12.2679 11.504 12.3334 11.3334 12.3334C11.1627 12.3334 10.9919 12.2679 10.8621 12.1379L7.52869 8.80469C7.40332 8.68005 7.33337 8.51062 7.33337 8.33337V4C7.33337 3.63135 7.63196 3.33337 8 3.33337C8.36804 3.33337 8.66663 3.63135 8.66663 4V8.05737L11.8047 11.1953C12.0653 11.4561 12.0653 11.8773 11.8047 12.1379Z" fill="#6A6B6C"/>
          </svg>
          01 - 04 -2021 12:20
        </div>
        <div class="promoted_pro">Promoted</div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "search-filter-card"
})
</script>

<style scoped>
.search-filter-card {
  width: 100%;
  display: grid;
  grid-template-columns: 16.8rem 1fr;
  grid-column-gap: 0;
  height: 16.7rem;
}
.search-filter-card-image {
  width: 100%;
  height: 16.7rem;
}
.search-filter-card-details {
  height: 100%;
  background-color: #F9F9F9;
  padding: 2.3rem 3rem;
}
.product-name__star {
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
}
.product-name__star p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  letter-spacing: 0.15px;
  color: #000000;
}
.product-description {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: 12px;
  line-height: 1.6rem;
  letter-spacing: 0.4px;
  color: #6A6B6C;
  margin-bottom: .5rem;
}
.product__spec {
  display: flex;
  margin-bottom: .5rem;
}
.spec {
  margin-right: .2rem;
  padding: .5rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--secondary-color);
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-medium);
  font-size: .9rem;
  line-height: 1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #6A6B6C;
}
.spec:last-child {
  margin-right: 0;
}
.amount {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-wieght-bold);
  font-size: var(--fs-24);
  line-height: 2.4rem;
  letter-spacing: 0.18px;
  color: #FD6649;
  margin-bottom: 1.2rem;
  display: block;
}
.location-time-promoted {
  display: flex;
}
.location__loc {
  display: flex;
  align-items: center;
  margin-right: 3.3rem;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-14);
  line-height: 2rem;
  letter-spacing: 0.25px;
  color: var(--secondary-color);
}
.location__loc svg {
  margin-right: 1.2rem;
}
.time__ti {
  margin-right: auto;
  display: flex;
  align-items: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-14);
  line-height: 2rem;
  letter-spacing: 0.25px;
  color: var(--secondary-color);
}
.time__ti svg {
  margin-right: 1.2rem;
}
.promoted_pro {
  padding: .5rem 2.3rem;
  width: 10.96rem;
  height: 2.5rem;
  background: rgba(102, 102, 102, 0.08);
  border-radius: 5rem;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  letter-spacing: 0.4px;
  color: var(--secondary-color);
}
</style>