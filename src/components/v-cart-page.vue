<template lang="html">
  <div class="v-container v-cart-page-wrapper">
    <p class="talign-left parag">{{cartTitle}}</p>
    <notificationBar
    :messages="messages"

    >
    </notificationBar>
    <div v-if="CART.length" class="v-cart-page-container">
      <div class="v-cart-product-container uk-width-3-5">
        <div
        class="v-product-card-container"
        v-for="(product, index) in CART"
        :key="product.id"
        >
          <div class="img-container uk-width-1-4">
            <img :src="require('../assets/images/product-slider-imgs/' + product.url)" alt="#">
          </div>
          <div class="product-info-container uk-width-3-4">
            <div class="product-info">
              <div class="product-text">
                <p>{{product.text}}</p>
                <span>({{product.deviceMemory}}GB)</span>
              </div>
              <span class="price">{{product.newPrice + '.00' + product.currencySign}}</span>
            </div>
            <div class="product-price">
              <div class="product-buttons-container">
                <span class="favorite-button" :class="{'active': product.isFavorite}">
                  <font-awesome-icon :icon="product.iconFavorite"/>
                  <button @click="addToFavorite(product)" type="button">В избранное</button>
                </span>
                <span class="delete-button">
                  <font-awesome-icon :icon="product.iconRemoveFromCart"/>
                  <button @click="removeFromCart(index)" type="button">Удалить</button>
                </span>
              </div>
              <span class="price-counter-buttons">
                <button @click="decrementCartQty(index)" type="button" name="button">-</button>
                <span>{{product.quantity}}</span>
                <button @click="incrementCartQty(index)" type="button" name="button">+</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="v-cart-info-block uk-width-2-5">
        <div class="v-cib-product-info">
          <p class="parag">В корзине</p>
          <span class="product-count">Товаров: {{CART.length}}</span>
          <span class="promocode">Введите промокод</span>
          <span class="total" v-text="TOTAL"></span>
        </div>
        <div class="v-cib-make-order">
          <button type="button">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
    <span v-else>{{emptyCart}}</span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import notificationBar from './v-home__notification/v-notification.vue'
export default {
  data () {
    return {
      isFavorite: false,
      cartTitle: 'Корзина',
      emptyCart: 'Ваша корзина пуста',
      messages: [],
      productCart: [
        {
          card: 'title'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'CART',
      'TOTAL',
      'FAVORITE'
    ])
  },
  methods: {
    ...mapActions([
      'REMOVE_FROM_CART',
      'DECREMENT_CART_QUANTITY',
      'INCREMENT_CART_QUANTITY',
      'ADD_TO_FAVORITE',
    ]),
    removeFromCart(index) {
      this.REMOVE_FROM_CART(index);
    },
    decrementCartQty(index) {
      this.DECREMENT_CART_QUANTITY(index)
    },
    incrementCartQty(index) {
      this.INCREMENT_CART_QUANTITY(index)
    },
    addToFavorite(product) {
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
    }
  },
  components: {
    notificationBar
  }
}
</script>

<style lang="scss" scoped>
.parag {
  color: black;
  font-size: 25px;
  font-weight: bold;
}
.v-cib-product-info {
  display: flex;
  flex-direction: column;
}
.v-cart-page-wrapper {
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  .v-cart-page-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    .v-cart-product-container {
      display: flex;
      flex-direction: column;
      width: inherit;
      border-bottom: 1px dotted lightgrey;
      margin-bottom: 25px;
      .v-product-card-container {
        display: flex;
        justify-content: space-around;
        width: inherit;
        .product-info-container {
          display: flex;
          flex-direction: column;
          .product-info {
            .price {
              font-size: 25px;
            }
            .product-text {
              display: flex;
              flex-direction: column;
              align-items: baseline;
              p {
                font-weight: bold;
                font-size: 23px;
                margin-bottom: 0;
              }
            }
          }
          .product-info,
          .product-price {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .product-price {
            .price-counter-buttons {
                display: inline-flex;
                background-color: #EDEDED;
                max-height: 30px;
                padding: 2px;
                button {
                  font-size: 25px;
                  font-family: fantasy;
                  border: none;
                  background-color: white;
                  display: flex;
                  align-items: center;
                }
                span {
                  width: 50px;
                  font-family: cursive;
                }
            }
            .product-buttons-container {
              .favorite-button,
              .delete-button {
                color: #9C9C9C;
                button {
                  background: transparent;
                  border: none;
                  color: #9C9C9C;
                  font-weight: bold;
                  font-family: inherit;
                }
              }
            }
          }
        }
        .img-container {
          img {
            width: 30%;
          }
        }
      }
    }
    .v-cart-info-block {
      margin-left: 40px;
      .v-cib-product-info {
        background-color: #F7F7F7;
        text-align: left;
        padding: 25px;
        .product-count {
          font-size: 15px;
          font-weight: 500;
        }
        .promocode {
          color: #76bc21;
          cursor: pointer;
          font-size: 15px;
          font-weight: bold;
          margin: 15px 0;
        }
        .total {
          font-size: 25px;
        }
      }
      .v-cib-make-order {
        background-color: #76bc21;
        padding: 10px 0;
        button {
          background: transparent;
          border: none;
          color: white;
          font-size: 17px;
          font-weight: 500;
        }
      }
    }
    .talign-left {
      text-align: left;
    }
    span {
      color: black;
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
