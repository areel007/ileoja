<template>
  <web-view-nav :nav-links="navLinks"></web-view-nav>
  <router-view
      :categories="categories"
      :trendingProducts="trendingProducts"
      @toggle-favorite="toggleFavorite($event)"
  >
  </router-view>
  <footer-component
      :footer-details="footerDetails"
  ></footer-component>
</template>

<script>
import {defineComponent, reactive} from "vue";
import WebViewNav from "./components/core-ui/header/web-view-nav";
import FooterComponent from "./components/core-ui/footer/footer-component";

export default defineComponent({
  components: {FooterComponent, WebViewNav},
  setup() {
    const navLinks = reactive([
      { linkName: 'Login', to: '/login'},
      { linkName: 'Register', to: '/register'},
      { linkName: 'Sell', to: '/sell'},
    ])

    const categories = reactive([
      {
        categoryImage: 'fruits-1.png',
        categoryText: 'Agriculture & Food'
      },
      {
        categoryImage: 'pawprint.png',
        categoryText: 'Animals & Pets'
      },
      {
        categoryImage: 'pacifier.png',
        categoryText: 'Babies & Kids'
      },
      {
        categoryImage: 'electronics.png',
        categoryText: 'Electronics'
      },
    ])

    const trendingProducts = reactive([
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
      {
        trendingProductImage: "",
        trendingProductPrice: "$25",
        trendingProductName: "Red new carpet",
        isProductFavorite: false,
      },
    ])

    /** Methods */
    const toggleFavorite = (e) => {
      trendingProducts.filter(trendingProduct => {
        if (trendingProduct.trendingProductName === e.trendingProductName) {
          trendingProduct.isProductFavorite = true
        }
      })
    }

    const footerDetails = reactive([
      {
        columnHeader: "Company",
        subLinks: ["About Ileoja", "Privacy", "Terms & Conditions"]
      },
      {
        columnHeader: "Supports",
        subLinks: ["supports@ileoja.com", "Contact us", "FAQs"]
      },
      {
        columnHeader: "Resources",
        subLinks: ["Our blog", "Ileoja on FB", "Ileoja on Instagram", "Ileoja on Youtube", "Ileoja on Twitter"]
      },
      {
        columnHeader: "Hotlinks",
        subLinks: ["Brand", "Ileoja sellers", "Location"]
      },
    ])

    return {
      navLinks,
      categories,
      trendingProducts,
      toggleFavorite,
      footerDetails,
    }
  }
})
</script>

<style>
@import "./styles/guide.css";
</style>
