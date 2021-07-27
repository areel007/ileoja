<template>
  <div class="search-filter">
    <div class="container">
      <p class="page-tile">ileoja / vehicles / <span class="product">cars | 71273 ads</span></p>
      <div class="search-filter__inner">

        <div class="filter-sidebar">
          <section-title title="Filter"></section-title>
          <div class="filter-sidebar-categories">
            <div class="filter-sidebar__title" @click="toggleCategory">
              Categories
              <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.39255 0.479403L0.712819 6.14732C0.499018 6.36071 0.49869 6.70697 0.712026 6.92071C0.925362 7.13451 1.27162 7.13487 1.48542 6.92153L7.16556 1.2532C7.37878 1.03998 7.72572 1.03998 7.93936 1.25361L13.6191 6.92153C13.8329 7.13487 14.1791 7.13451 14.3925 6.92071C14.499 6.81399 14.5522 6.67418 14.5522 6.53443C14.5522 6.39429 14.4987 6.25415 14.3917 6.14732L8.71234 0.479814C8.07266 -0.159865 7.03182 -0.159865 6.39255 0.479403Z" fill="white"/>
              </svg>

            </div>
            <ul v-if="showCategory">
              <p class="category">Vehicle</p>
              <li>Car <span>| 712734 ads</span></li>
              <li>Trucks & Trailers <span>| 5123 ads</span></li>
              <li>Buses & Microbuses <span>| 3509 ads</span></li>
            </ul>
          </div>

          <div class="filter-sidebar-location">
            <div class="filter-sidebar__title" @click="toggleLocation">
              Location
              <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.39255 0.479403L0.712819 6.14732C0.499018 6.36071 0.49869 6.70697 0.712026 6.92071C0.925362 7.13451 1.27162 7.13487 1.48542 6.92153L7.16556 1.2532C7.37878 1.03998 7.72572 1.03998 7.93936 1.25361L13.6191 6.92153C13.8329 7.13487 14.1791 7.13451 14.3925 6.92071C14.499 6.81399 14.5522 6.67418 14.5522 6.53443C14.5522 6.39429 14.4987 6.25415 14.3917 6.14732L8.71234 0.479814C8.07266 -0.159865 7.03182 -0.159865 6.39255 0.479403Z" fill="white"/>
              </svg>

            </div>
            <ul v-if="showLocation">
              <p class="category">All Lagos State</p>
            </ul>
          </div>

          <div class="filter-sidebar-make">
            <div class="filter-sidebar__title" @click="toggleMake">
              Make
              <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.39255 0.479403L0.712819 6.14732C0.499018 6.36071 0.49869 6.70697 0.712026 6.92071C0.925362 7.13451 1.27162 7.13487 1.48542 6.92153L7.16556 1.2532C7.37878 1.03998 7.72572 1.03998 7.93936 1.25361L13.6191 6.92153C13.8329 7.13487 14.1791 7.13451 14.3925 6.92071C14.499 6.81399 14.5522 6.67418 14.5522 6.53443C14.5522 6.39429 14.4987 6.25415 14.3917 6.14732L8.71234 0.479814C8.07266 -0.159865 7.03182 -0.159865 6.39255 0.479403Z" fill="white"/>
              </svg>

            </div>
            <ul v-if="showMake">
              <li>
                <label class="radio__radio">
                  <input type="radio" value="Show All" v-model="pickedMake">
                  <span class="radio__label">Show All</span>
                  <span class="checkmark"></span>
                </label>
              </li>

              <li>
                <label class="radio__radio">
                  <input type="radio" value="Toyota" v-model="pickedMake">
                  <span class="radio__label">Toyota</span>
                  <span class="checkmark"></span>
                </label>
              </li>

              <li>
                <label class="radio__radio">
                  <input type="radio" value="Lexus" v-model="pickedMake">
                  <span class="radio__label">Lexus</span>
                  <span class="checkmark"></span>
                </label>
              </li>

              <li>
                <label class="radio__radio">
                  <input type="radio" value="Benz" v-model="pickedMake">
                  <span class="radio__label">Benz</span>
                  <span class="checkmark"></span>
                </label>
              </li>

            </ul>
          </div>

          <div class="filter-sidebar-year-of-manufacture">
            <div class="filter-sidebar__title" @click="toggleYear">
              Year of Manufacture
              <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.39255 0.479403L0.712819 6.14732C0.499018 6.36071 0.49869 6.70697 0.712026 6.92071C0.925362 7.13451 1.27162 7.13487 1.48542 6.92153L7.16556 1.2532C7.37878 1.03998 7.72572 1.03998 7.93936 1.25361L13.6191 6.92153C13.8329 7.13487 14.1791 7.13451 14.3925 6.92071C14.499 6.81399 14.5522 6.67418 14.5522 6.53443C14.5522 6.39429 14.4987 6.25415 14.3917 6.14732L8.71234 0.479814C8.07266 -0.159865 7.03182 -0.159865 6.39255 0.479403Z" fill="white"/>
              </svg>

            </div>
            <ul v-if="showYear">
              <li>
                <label class="radio__radio">
                  <input type="radio" value="Show All" v-model="pickedYear">
                  <span class="radio__label">Show All</span>
                  <span class="checkmark"></span>
                </label>
              </li>

              <li>
                <label class="radio__radio">
                  <input type="radio" value="2017 - 2021" v-model="pickedYear">
                  <span class="radio__label">2017 - 2021</span>
                  <span class="checkmark"></span>
                </label>
              </li>

              <li>
                <label class="radio__radio">
                  <input type="radio" value="2021 - 2016" v-model="pickedYear">
                  <span class="radio__label">2021 - 2016</span>
                  <span class="checkmark"></span>
                </label>
              </li>

              <li>
                <label class="radio__radio">
                  <input type="radio" value="2007 2011" v-model="pickedYear">
                  <span class="radio__label">2007 2011</span>
                  <span class="checkmark"></span>
                </label>
              </li>
            </ul>
          </div>

        </div>
        <div class="filter-main">
          <div class="filter-main-header">
            <section-title title="Cars in lagos state"></section-title>
            <div class="header__options">
              <div class="option">Show</div>
              <div class="option">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.99998 0L0 3.99H3V11H4.99997V3.99H7.99997L3.99998 0Z" fill="#6A6B6C"/>
                  <path d="M11 14.01V6.99997H9V14.01H6L9.99998 18L14 14.01H11Z" fill="#6A6B6C"/>
                </svg>
                Relevant
              </div>
              <div class="option">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0ZM13.2803 13.6552C13.134 13.8014 12.942 13.875 12.75 13.875C12.5581 13.875 12.3659 13.8014 12.2198 13.6552L8.46977 9.90527C8.32874 9.76506 8.25005 9.57445 8.25005 9.37505V4.5C8.25005 4.08527 8.58595 3.75005 9 3.75005C9.41405 3.75005 9.74995 4.08527 9.74995 4.5V9.06454L13.2803 12.5947C13.5735 12.8881 13.5735 13.362 13.2803 13.6552Z" fill="#6A6B6C"/>
                </svg>
                Any time
              </div>
            </div>
          </div>
          <search-filter-card></search-filter-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import SectionTitle from "../components/core-ui/titles/section-title";
import SearchFilterCard from "../components/core-ui/cards/search-filter-card";

export default defineComponent({
  name: "search-filter",
  components: {SearchFilterCard, SectionTitle},
  setup () {
    const showCategory = ref(false)
    const showLocation = ref(false)
    const showMake = ref(false)
    const showYear = ref(false)
    const pickedMake = ref('')
    const pickedYear = ref('')

    const toggleCategory = () => {
      showCategory.value = !showCategory.value
    }

    const toggleLocation = () => {
      showLocation.value = !showLocation.value
    }

    const toggleMake = () => {
      showMake.value = !showMake.value
    }

    const toggleYear = () => {
      showYear.value = !showYear.value
    }

    return {
      showCategory,
      showLocation,
      showMake,
      showYear,
      pickedMake,
      pickedYear,
      toggleCategory,
      toggleLocation,
      toggleMake,
      toggleYear,
    }
  }
})
</script>

<style scoped>
.search-filter {
  position: relative;
  top: 10rem;
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
.product {
  color: var(--primary-color);
}
.search-filter__inner {
  display: grid;
  grid-template-columns: 33.4rem 1fr;
  grid-column-gap: 3.5rem;
}
.filter-sidebar {
  --title-margin-bottom: 1.6rem;
}
.filter-sidebar-categories,
.filter-sidebar-location,
.filter-sidebar-make,
.filter-sidebar-year-of-manufacture {
  width: 100%;
  background-color: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  margin-bottom: 1.6rem;
}
.filter-sidebar__title {
  padding: 1.7rem 2.4rem;
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-medium);
  font-size: var(--fs-14);
  line-height: 1.5rem;
  letter-spacing: 0.1px;
  color: #FFFFFF;
  cursor: pointer;
  border-radius: 4px 4px 0 0;
}
.filter-sidebar-categories ul,
.filter-sidebar-location ul,
.filter-sidebar-make ul,
.filter-sidebar-year-of-manufacture ul {
  padding: .7rem 2.4rem;
}
.category {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-14);
  line-height: 2rem;
  letter-spacing: 0.25px;
  color: #6A6B6C;
  margin-bottom: .6rem;
}
.filter-sidebar-categories ul li,
.filter-sidebar-make ul li,
.filter-sidebar-year-of-manufacture ul li {
  margin-bottom: 1rem;
  margin-left: 2.2rem;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  letter-spacing: 0.4px;
  color: #6A6B6C;
}
.filter-sidebar-categories ul li span {
  color: var(--primary-color);
}
.filter-sidebar-make ul li label,
.filter-sidebar-year-of-manufacture ul li label {
  display: flex;
  align-items: center;
}
.filter-sidebar-make ul li label input[type=radio],
.filter-sidebar-year-of-manufacture ul li label input[type=radio]{
  margin-right: 2rem;
}
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
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: var(--color-white);
  border: 1px solid var(--primary-color);
  transform: translateY(-50%);
}
/*.radio__radio:hover input ~ .checkmark {*/
/*  background-color: var(--primary-color);*/
/*}*/
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
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-color);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15%;
}

/* Filter main header */
.filter-main-header {
  --title-margin-bottom: 3.4rem;
  display: flex;
  justify-content: space-between;
}
.header__options {
  display: flex;
  align-items: center;
}
.option {
  display: flex;
  align-items: center;
  margin-right: 2.2rem;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  color: #6A6B6C;
  cursor: pointer;
}
.option:last-child {
  margin-right: 0;
}
.option svg {
  margin-right: 1.8rem;
}
</style>