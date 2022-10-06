<template lang="html">
  <div class="v-home__product-slider-wrapper v-container" uk-slider>
    <notificationBar
    :messages="messages"

    >
    </notificationBar>
    <div class="product-slider-title">
      <span>
        <p>{{sliderTitle}}</p>
      </span>
      <span class="arrows-container">
        <a class="arrow-left" href="#" uk-slider-item="previous">
          <font-awesome-icon :icon="productSliderArrowLeft"/>
        </a>
        <a class="arrow-right" href="#" uk-slider-item="next">
          <font-awesome-icon :icon="productSliderArrowRight"/>
        </a>
      </span>
    </div>
    <div class="v-product-item-wrapper uk-slider-items uk-child-width-1-2 uk-child-width-1-1@xs uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl">
      <productItem
      v-for="product in PRODUCTS"
      :key="product.id"
      :sliderElem="product"
      @addToCart="addToCart"
      @addToFavorite="addToFavorite"
      @addToComparison="addToComparison"
      @productCardLink="productCardLink"
      ></productItem>
    </div>
  </div>
</template>

<script>
import productItem from '../v-home__product-slider/v-product-item.vue'
import notificationBar from '../v-home__notification/v-notification.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      isActive: true,
      sliderTitle: 'Смартфоны и планшеты',
      productSliderArrowLeft: 'arrow-left',
      productSliderArrowRight: 'arrow-right',
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
      // if (product.isFavorite = true) {
      //   this.isFavorite = !this.isFavorite
      // } else {
      //   console.log('nichego');
      // }
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
    productItem,
    notificationBar
  }
}
</script>

<style lang="scss" scoped>
.isActive {
  display: block;
}
.alert-absolute {
  background-color: red;
  display: inline;
  padding: 10px 20px;

  position: absolute;

  display: none;
  span {
    color: white;
    font-weight: bold;
  }
}

.v-home__product-slider-wrapper {
  .v-product-item-wrapper {
    display: flex;
  }
  .product-slider-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      font-size: 25px;
      font-weight: bold;
    }
    .arrows-container {
      a {
        font-size: 20px;
        color: #AFD785;
        &:hover {
          color: green;
        }
      }
      .arrow-left {
        margin-right: 30px;
      }
    }
  }
}
</style>
