<template lang="html">
  <div class="v-home-wrapper">
    <upperNavbar></upperNavbar>
    <navbar></navbar>
    <underNavbar></underNavbar>
    <productCard></productCard>
    <footerContainer></footerContainer>
    <copyright></copyright>
  </div>
</template>

<script>
import upperNavbar from '../components/v-home__upper-navbar.vue'
import navbar from '../components/v-home__navbar.vue'
import underNavbar from '../components/v-home__under-navbar.vue'
import productCard from '../components/v-product-card.vue'
import footerContainer from '../components/v-home__footer.vue'
import copyright from '../components/v-home__copyright.vue'

export default {
  methods: {
    productCardLink(id) {
      this.$router.push({name: 'productCard', query: {'product' : id}})
    }
  },
  components: {
    upperNavbar,
    navbar,
    underNavbar,
    productCard,
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
