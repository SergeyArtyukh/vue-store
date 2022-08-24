<template lang="html">
  <div class="v-home-wrapper">
    <upperNavbar></upperNavbar>
    <navbar></navbar>
    <underNavbar></underNavbar>
    <cartPage></cartPage>
    <productSlider class="mb-15"></productSlider>
    <footerContainer></footerContainer>
    <copyright></copyright>
  </div>
</template>

<script>
import upperNavbar from '../components/v-home__upper-navbar.vue'
import navbar from '../components/v-home__navbar.vue'
import underNavbar from '../components/v-home__under-navbar.vue'
import cartPage from '../components/v-cart-page.vue'
import productSlider from '../components/v-home__product-slider.vue'
import footerContainer from '../components/v-home__footer.vue'
import copyright from '../components/v-home__copyright.vue'

export default {
  components: {
    upperNavbar,
    navbar,
    underNavbar,
    cartPage,
    productSlider,
    footerContainer,
    copyright
  }
}
</script>

<style lang="scss" scoped>
.mb-15 {
  margin-bottom: 15px!important;
}
</style>
