<template lang="html">
  <div class="v-home-wrapper">
    <upperNavbar></upperNavbar>
    <navbar></navbar>
    <underNavbar></underNavbar>
    <comparisonPage></comparisonPage>
    <footerContainer></footerContainer>
    <copyright></copyright>
  </div>
</template>

<script>
import upperNavbar from '../components/v-home-page/v-home__upper-navbar.vue';
import navbar from '../components/v-home-page/v-home__navbar.vue';
import underNavbar from '../components/v-home-page/v-home__under-navbar.vue';
import comparisonPage from '../components/v-comparison-page.vue';
import footerContainer from '../components/v-home-page/v-home__footer.vue';
import copyright from '../components/v-home-page/v-home__copyright.vue';
// import { mapGetters } from 'vuex'

export default {
  components: {
    upperNavbar,
    navbar,
    comparisonPage,
    underNavbar,
    footerContainer,
    copyright
  }
}
</script>

<style lang="scss" scoped>
</style>
