<template lang="html">
  <div class="v-home-wrapper">
    <upperNavbar></upperNavbar>
    <navbar></navbar>
    <underNavbar></underNavbar>
    <bannerList></bannerList>
    <productSlider></productSlider>
    <sales></sales>
    <specialProducts></specialProducts>
    <sales></sales>
    <productSlider></productSlider>
    <productSlider></productSlider>
    <popularBrands></popularBrands>
    <reviews></reviews>
    <footerContainer></footerContainer>
    <copyright></copyright>
  </div>
</template>

<script>
import upperNavbar from '../components/v-home__upper-navbar.vue'
import navbar from '../components/v-home__navbar.vue'
import underNavbar from '../components/v-home__under-navbar.vue'
import bannerList from '../components/v-home__banner-list.vue'
import productSlider from '../components/v-home__product-slider.vue'
import sales from '../components/v-home__sales.vue'
import specialProducts from '../components/v-home__special-products.vue'
import popularBrands from '../components/v-home__popular-brands.vue'
import reviews from '../components/v-home__reviews.vue'
import footerContainer from '../components/v-home__footer.vue'
import copyright from '../components/v-home__copyright.vue'

export default {
  components: {
    upperNavbar,
    navbar,
    underNavbar,
    bannerList,
    productSlider,
    sales,
    specialProducts,
    popularBrands,
    reviews,
    footerContainer,
    copyright
  }
}
</script>

<style lang="scss" scoped>
</style>
