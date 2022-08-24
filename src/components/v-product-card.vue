<template lang="html">
  <div class="v-product-card-wrapper v-container">
    <div
    class="v-product-card-container"
    >
      <div class="product-card-upper">
        <h3 class="product-card-title">{{product.text}}</h3>
        <div class="under-title-container">
          <div class="upper-buttons">
            <span>ЗВЕЗДОЧКИ</span>
            <span :class="{active: product.isFavorite}" class="favorite-button">
              <font-awesome-icon :icon="product.iconFavorite"/>
              <button @click="addToFavorite(product)" type="button">В избранное</button>
            </span>
            <span :class="{active: product.isCompare}" class="comparison-button">
              <font-awesome-icon :icon="product.iconCompare"/>
              <button @click="addToComparison(product)" type="button">Добавить в сравнение</button>
            </span>
          </div>
          <div class="article-container">
            <span>арт. {{product.article}}</span>
          </div>
        </div>
      </div>
      <div class="product-card-device-info">
        <div class="device-info-wrapper">
          <div class="device-image">
            <div class="img-container">
              <img :src="require('./../assets/images/product-slider-imgs/' + product.url)" alt="#">
            </div>
          </div>
          <div class="device-info">
            <div class="device-memory">
              <span class="title">Обьем памяти</span>
              <div class="memory">
                <span>{{product.deviceMemory}}GB</span>
              </div>
            </div>
            <div class="features">
              <p class="title">Характеристики</p>
              <ul class="features-info">
                <li>
                  Цвет:
                  <span>{{product.deviceColor}}</span>
                </li>
                <li>эран:
                  <span>{{product.deviceResolution}}</span>
                </li>
                <li>оперативная память:
                  <span>{{product.deviceRAM}}</span>
                </li>
                <li>память:
                  <span>{{product.deviceMemory}}</span>
                </li>
                <li>камера:
                  <span>{{product.deviceCamera}}</span>
                </li>
                <li>беспроводные интерфейсы:
                  <span>{{product.deviceOtherInfo}}</span>
                </li>
              </ul>
              <span class="all-features">Все характеристики</span>
            </div>
          </div>
        </div>
        <div class="product-card-price-wrapper">
          <div class="price-container">
            <div class="old-price">
              <span>{{product.oldPrice + '.00' + ' ' + product.currencySign}}</span>
            </div>
            <div class="new-price">
              <span>
                {{product.newPrice + '.00' + ' ' + product.currencySign}}
                <span class="new-price-discount">{{product.productDiscount + product.productDiscountSign}}</span>
              </span>
            </div>
            <div class="add-to-cart">
              <button type="button">
                В корзину
                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="additional-info-container">
        <div class="title" uk-switcher>
          <span class="uk-margin-medium-right">
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-sliders" />
              Характеристики
            </a>
          </span>
          <span>
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-comments" />
              Отзывы
            </a>
          </span>
        </div>
        <div class="info uk-switcher">
          <div class="features-info-container">
            <div class="features-info">
              <div class="first-half-info uk-width-1-3">
                <div>
                  Цвет:
                  <span class="dotted-line"></span>
                  <span>{{product.deviceColor}}</span>
                </div>
                <div>оперативная память:
                  <span class="dotted-line"></span>
                  <span>{{product.deviceRAM}}</span>
                </div>
                <div>камера:
                  <span class="dotted-line"></span>
                  <span>{{product.deviceCamera}}</span>
                </div>
                <div>интернет:
                  <span class="dotted-line"></span>
                  <span>{{product.deviceRAM}}</span>
                </div>
              </div>
              <div class="second-half-info uk-width-1-3">
                <div>эран:
                  <span class="dotted-line"></span>
                  <span>{{product.deviceResolution}}</span>
                </div>
                <div>память:
                  <span class="dotted-line"></span>
                  <span>{{product.deviceMemory}}</span>
                </div>
                <div>беспроводные интерфейсы:
                  <span class="dotted-line"></span>
                  <span>{{product.deviceOtherInfo}}</span>
                </div>
                <div>вес:
                  <span class="dotted-line"></span>
                  <span>{{product.deviceMemory}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="reviews">
            <p>отзывы</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
    product() {
      let result = []
      let vm = this
      this.PRODUCTS.map(function (item) {
        if (item.id === vm.$route.query.product) {
          result = item;
        }
      })
      return result;
    }
  },
  methods: {
    ...mapActions([
      'ADD_TO_FAVORITE',
      'ADD_TO_COMPARISON'
    ]),
    addToFavorite(product) {
      this.ADD_TO_FAVORITE(product);
    },
    addToComparison(product) {
      this.ADD_TO_COMPARISON(product);
    }
  }
}
</script>

<style lang="scss" scoped>
.v-product-card-container {
  margin: 20px 0;
  .product-card-upper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .under-title-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 15px;
      border-bottom: 1px dotted lightgrey;
      .upper-buttons {
        .active {
          color: green;
        }
        .favorite-button,
        .comparison-button {
          button {
            background: transparent;
            border: none;
            font-size: 15px;
          }
        }
        .favorite-button {
          margin: 0 20px;
        }
      }
    }
  }
  .product-card-device-info {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    .device-info-wrapper {
      display: flex;
      justify-content: space-evenly;
      width: 75%;
      .device-image {
        img {
          width: 30%;
        }
      }
      .device-info {
        text-align: left;
        .device-memory {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          .title {
            font-size: 14px;
            font-weight: bold;
            font-family: inherit;
          }
          .memory {
            margin-top: 10px;
            span {
              border: 2px solid #81c624;
              padding: 3px 10px;
              font-weight: 500;
            }
          }
        }
        .features {
          .title {
            font-weight: bold;
            font-size: 17px;
            color: black;
            letter-spacing: -1px;
            margin-bottom: 10px;
          }
          .features-info {
            list-style: none;
            padding: 0;
            li {
              margin: 10px 0;
              color: grey;
              font-family: inherit;
              font-weight: 500;
              span {
                color: black;
              }
            }
          }
          .all-features {
            cursor: pointer;
            color: green;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: -0.5px;
          }
        }
      }
    }
    .product-card-price-wrapper {
      width: 25%;
      .price-container {
        display: flex;
        flex-direction: column;
        border: 1px dotted lightgrey;
        padding: 16px;
        text-align: left;
        .old-price {
          text-decoration: line-through;
          font-size: 1.3rem;
          font-weight: bold;
          color: grey;
        }
        .new-price {
          position: relative;
          font-size: 2.3rem;
          font-weight: bold;
          color: black;
          margin-bottom: 15px;
          .new-price-discount {
              position: absolute;
              right: 70px;
              top: -10px;
              padding: 1px 5px;
              font-size: 1.125rem;
              color: white;
              background-color: #76bc21;
          }
        }
        .add-to-cart {
          width: 100%;
          padding: 10px 0;
          background-color: #81c624;
          display: flex;
          justify-content: center;
          button {
            background-color: #81c624;
            border: none;
            color: white;
            font-size: 15px;
            font-weight: bold;
          }
        }
      }
    }
  }
  .additional-info-container {
    margin-top: 50px;
    .title {
      display: flex;
      align-items: center;
      span {
        a {
          text-decoration: none;
          font-size: 20px;
          font-weight: bold;
          color: grey;
          &:hover {
            color:black;
          }
        }
      }
    }
    .features-info-container {
      .features-info {
          display: flex;
          text-align: left;
          .first-half-info,
          .second-half-info {
            div {
              display: flex;
              justify-content: space-between;
              .dotted-line {
                width: 100%;
                border-bottom: 1px dotted grey;
              }
            }
          }
      }
    }
  }
}










</style>
