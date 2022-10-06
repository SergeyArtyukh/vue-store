<template lang="html">
  <div class="v-home-wrapper">
    <upperNavbar></upperNavbar>
    <navbar></navbar>
    <underNavbar></underNavbar>
    <markedPage></markedPage>
    <footerContainer></footerContainer>
    <copyright></copyright>
  </div>
</template>

<script>
import upperNavbar from '../components/v-home-page/v-home__upper-navbar.vue'
import navbar from '../components/v-home-page/v-home__navbar.vue'
import markedPage from '../components/v-marked-page.vue'
import underNavbar from '../components/v-home-page/v-home__under-navbar.vue'
import footerContainer from '../components/v-home-page/v-home__footer.vue'
import copyright from '../components/v-home-page/v-home__copyright.vue'

export default {
  components: {
    upperNavbar,
    navbar,
    markedPage,
    underNavbar,
    footerContainer,
    copyright
  }
}
</script>

<style lang="scss" scoped>
</style>
