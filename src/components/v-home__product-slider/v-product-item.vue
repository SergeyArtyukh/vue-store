<template lang="html">
  <div class="v-product-item-container">
    <div class="slider-container" tabindex="-1">
      <ul
      >
        <li
        >
          <div class="left-side">
            <div class="img-container" @click="productCardLink">
              <img :src="require('../../assets/images/' + sliderElem.url)" alt="#">
              <div :class="sliderElem.classOfNewDevice" class="products-discount-container">
                <span>{{sliderElem.productDiscount + sliderElem.productDiscountSign}}</span>
              </div>
              <span class="card-text">{{sliderElem.text}}</span>
            </div>
            <span class="old-price">{{sliderElem.oldPrice + sliderElem.currencySign}}</span>
            <span class="new-price">{{sliderElem.newPrice + sliderElem.currencySign}}</span>
          </div>
          <div class="right-side">
            <div class="favorite-compare-buttons">
              <span
              @click="addToFavorite()"
              >
                <font-awesome-icon :class="{active: sliderElem.isFavorite}" :icon="sliderElem.iconFavorite"/>
              </span>
              <span
              @click="addToComparison()"
              >
                <font-awesome-icon :class="{active: sliderElem.isCompare}" :icon="sliderElem.iconCompare"/>
              </span>
            </div>
            <div @click="addToCart" class="add-to-cart-button">
              <span><font-awesome-icon :icon="sliderElem.iconAddToCart"/></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
    }
  },
  props: {
    sliderElem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    ...mapActions ([
      'ADD_TO_FAVORITE'
    ]),
    addToCart() {
      this.$emit('addToCart', this.sliderElem);
    },
    addToFavorite() {
      this.$emit('addToFavorite', this.sliderElem)
    },
    addToComparison() {
      this.$emit('addToComparison', this.sliderElem)
    },
    productCardLink() {
      this.$emit('productCardLink', this.sliderElem.id)
    }
  },
  computed: {
    ...mapGetters ([
      'FAVORITE',
      'PRODUCTS'
    ])
  },
  mounted() {
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .v-product-item-container {
    .slider-container {
      ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0;
        li {
          display: flex;
          flex-direction: row;

          margin: 0 10px;
          .left-side {
            list-style: none;

            display: flex;
            flex-direction: column;
            align-items: baseline;
            .img-container {
              position: relative;
              &:hover {
                cursor: pointer;
                .card-text {
                  color: #86D325;
                }
              }
              img {
                width: 55%;
              }
              .card-text {
                display: flex;
                font-size: 14px;
                font-weight: bold;
                text-align: left;
                margin-top: 10px;
              }
              .products-discount-container {
                position: absolute;
                left: -10px;
                top: 3px;

                background-color: #E44441;

                span {
                  font-size: 13px;
                  font-weight: bold;
                  color: white;

                  padding: 0 4px;
                }
              }
              .new-device-class {
                background-color: #76BC1F;
              }
            }
            .old-price {
              text-decoration: line-through;
              color: grey;

              font-size: 18px;
              font-weight: bold;
            }
            .new-price {
              font-size: 22px;
              font-weight: bold;
            }
          }
          .right-side {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            margin-left: 20px;
            width: 40%;
            .favorite-compare-buttons {
              display: flex;
              flex-direction: column;
              .active {
                color: #81c625;
              }

              span {
                font-size: 20px;

                svg {
                  cursor: pointer;
                }
              }
            }
            .add-to-cart-button {
              background-color: #86D325;
              width: 40px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;

              cursor: pointer;
              &:hover ~ .alert-absolute{
                display: block;
              }
              span {
                color: white;

                display: inherit;
                svg {
                  font-size: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
