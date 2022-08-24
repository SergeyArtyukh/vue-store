<template lang="html">
  <div class="v-container">
    <notificationBar
    :messages="messages"

    >
    </notificationBar>
    <div class="v-marked-page-wrapper">
      <p>{{markedPageTitle}}</p>
      <div class="marked-conainer">
        <productItem
        v-for="(productInFavorite, index) in FAVORITE"
        :key="index"
        :sliderElem="productInFavorite"
        @addToFavorite="removeFromFavorite"
        @addToCart="addToCart"
        ></productItem>
      </div>
      <span v-if="FAVORITE.length < 1">{{vremenno}}</span>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import productItem from './v-home__product-slider/v-product-item.vue'
import notificationBar from './v-home__notification/v-notification.vue'
export default {
  data () {
    return {
      markedPageTitle: 'Избранное',
      vremenno: 'Список избранного пуст',
      messages: []
    }
  },
  methods: {
    ...mapActions([
      'REMOVE_FROM_FAVORITE',
      'ADD_TO_CART'
    ]),
    addToCart (productInFavorite) {
      this.ADD_TO_CART(productInFavorite)
      .then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.unshift(
          {
            text: 'Товар добавлен в корзину',
            id: timeStamp
          }
        )
      })
    },
    removeFromFavorite(index) {
      this.REMOVE_FROM_FAVORITE(index)
      .then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.unshift(
          {
            text: 'Товар удален из избранного',
            id: timeStamp
          }
        )
      })
    }
  },
  computed: {
    ...mapGetters ([
      'FAVORITE'
    ])
  },
  components: {
    productItem,
    notificationBar
  }
}
</script>

<style lang="scss" scoped>
.v-marked-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 15px 0;
  .marked-conainer {
    display: flex;
  }
  p {
    font-size: 15px;
    font-weight: bold;
    font-family: sans-serif;
  }
  span {
    font-size: 25px;
    font-weight: bold;
    font-family: sans-serif;
  }
}
</style>
