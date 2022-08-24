<template lang="html">
  <div class="v-home-wrapper">
    <upperNavbar></upperNavbar>
    <navbar></navbar>
    <underNavbar></underNavbar>
    <loginForm></loginForm>
    <footerContainer></footerContainer>
    <copyright></copyright>
  </div>
</template>

<script>
import upperNavbar from '../components/v-home__upper-navbar.vue'
import navbar from '../components/v-home__navbar.vue'
import loginForm from '../components/v-profile-page__login.vue'
import underNavbar from '../components/v-home__under-navbar.vue'
import footerContainer from '../components/v-home__footer.vue'
import copyright from '../components/v-home__copyright.vue'

export default {
  components: {
    upperNavbar,
    navbar,
    loginForm,
    underNavbar,
    footerContainer,
    copyright
  }
}
</script>

<style lang="scss" scoped>
</style>
