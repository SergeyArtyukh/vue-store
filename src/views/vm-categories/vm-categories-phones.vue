<template>
    <div class="v-phones-page-wrapper">
        <notificationBar
        :messages="messages"
        >
        </notificationBar>
        <upperNavbar></upperNavbar>
        <navbar></navbar>
        <underNavbar></underNavbar>
        <breadcrambs
        categoryName = 'Смартфона и телефоны'
        >
        </breadcrambs>
        <categoriesTemplate
        v-for="phonesElem in PRODUCTS"
        :key="phonesElem.id"
        :sliderElem="phonesElem"
        @addToCart="addToCart"
        @addToFavorite="addToFavorite"
        @addToComparison="addToComparison"
        @productCardLink="productCardLink"
        >
        </categoriesTemplate>
        <footerContainer></footerContainer>
        <copyright></copyright>
    </div>
</template>
<script>
import notificationBar from '../../components/v-home__notification/v-notification.vue'
import {mapActions, mapGetters} from 'vuex'
import upperNavbar from '../../components/v-home-page/v-home__upper-navbar.vue'
import navbar from '../../components/v-home-page/v-home__navbar.vue'
import underNavbar from '../../components/v-home-page/v-home__under-navbar.vue'
import footerContainer from '../../components/v-home-page/v-home__footer.vue'
import copyright from '../../components/v-home-page/v-home__copyright.vue'
import categoriesTemplate from '@/components/v-categories-template.vue'
import breadcrambs from '@/components/v-breadcrambs.vue'
export default {
  data () {
    return {
        title: this.$route.params['title'],
        BTitle: '',
        messages: []
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
      'ADD_TO_FAVORITE',
      'ADD_TO_COMPARISON'
    ]),
    productCardLink(id) {
      this.$router.push({name: 'productPage', query: {'product' : id}})
    },
    addToFavorite (product) {
      this.ADD_TO_FAVORITE(product)
      .then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.unshift(
          {
            text: 'Товар добавлен в избранное',
            id: timeStamp
          }
        )
      })
      product.isFavorite = true;
    },
    addToComparison(product) {
      this.ADD_TO_COMPARISON(product)
      .then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.unshift(
          {
            text: 'Товар добавлен в сравнение',
            id: timeStamp
          }
        )
      })
    },
    addToCart(data) {
    this.ADD_TO_CART(data)
    .then(() => {
      let timeStamp = Date.now().toLocaleString();
      this.messages.unshift(
        {
          text: 'Товар добавлен в корзину',
          id: timeStamp
        }
      )
    })
    }
  },
  computed: {
    ...mapGetters ([
      'PRODUCTS',
    ]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  },
  components: {
        upperNavbar,
        navbar,
        underNavbar,
        footerContainer,
        copyright,
        categoriesTemplate,
        notificationBar,
        breadcrambs
  }
}
</script>
<style,
    VBreadcrambs lang="scss">

</style>