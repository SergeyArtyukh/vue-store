<template lang="html">
  <div class="v-container">
    <notificationBar
    :messages="messages"
    />
    <div class="comparison-nav">
      <router-link class="link-to-home" :to="{ name: 'Home', params: {} }">{{comparisonTitle}}</router-link>
      <p>{{comparisonRu}}</p>
    </div>
    <div class="v-comparison-page-wrapper">
      <div 
      class="comparison-item-container"
      v-for="(product, index) in COMPARISON"
      :key="index"
      >
        <div class="img-container">
          <img :src="require('../assets/images/product-slider-imgs/' + product.url)" alt="#">
        </div>
        <div class="info-container">
          <p>{{product.text}}</p>
          <span class="product-price">{{product.oldPrice + product.currencySign}}</span>
          <div class="device-info-container">
            <div class="buttons-container">
              <button @click="addToFavorite(product)">
              <font-awesome-icon :icon="product.iconFavorite"/>
            </button>
            <button @click="deleteFromComparison(index)">
              <font-awesome-icon :icon="product.iconRemoveFromCart"/>
            </button>
            </div>
            <div class="item-info-container">
              <div>
                <span>Цвет</span>
                <span>{{product.deviceColor}}</span>
              </div>
              <div>
                <span>Экран</span>
                <span>{{product.deviceResolution}}</span>
              </div>
              <div>
                <span>Оперативная память</span>
                <span>{{product.deviceRAM}}</span>
              </div>
              <div>
                <span>Память</span>
                <span>{{product.deviceMemory}}</span>
              </div>
              <div>
                <span>Камеры</span>
                <span>{{product.deviceCamera}}</span>
              </div>
              <div>
                <span>Беспроводный интерфейсы</span>
                <span>{{product.deviceOtherInfo}}</span>
              </div>
              <div>
                <span>Интернет</span>
                <span>{{product.deviceInternet}}</span>
              </div>
              <div>
                <span>Вес</span>
                <span>{{product.deviceWeight}}</span>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notificationBar from './v-home__notification/v-notification.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters ([
      'COMPARISON'
    ])
  },
  methods: {
    ...mapActions ([
      'REMOVE_FROM_COMPARISON',
      'ADD_TO_FAVORITE'
    ]),
    deleteFromComparison(index) {
      this.REMOVE_FROM_COMPARISON(index)
      .then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.unshift(
          {
            text: 'Товар удален из сравнения',
            id: timeStamp
          }
        )
      })
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
  data () {
    return {
      comparisonTitle: 'Вернуться к покупкам',
      comparisonRu: 'Сравнение',
      messages: []
    }
  },
  components: {
    notificationBar
  }
}
</script>

<style lang="scss" scoped>
.comparison-nav {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
  .link-to-home {
    color: black;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
  }
  p {
    font-size: 24px;
    font-weight: bold;
    font-family: sans-serif;
    margin: 20px 0;
  }
.v-comparison-page-wrapper {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 15px 0;
  .comparison-item-container {
    margin-right: 200px;
    .img-container {
      img {
        max-width: 200px;
        max-height: 400px;
      }
    }
    .info-container {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      width: 100%;
      p {
      font-size: 15px;
    }
    .product-price {
      font-size: 25px;
      color: black;
    }
    .device-info-container {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      width:  inherit;
      button {
        background-color: transparent;
        border: none;
        color: gray;
        &:hover {
          color: green;
        }
      }
    }
    .item-info-container {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      width:  inherit;
      div {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        border-bottom: 1px dotted gray;
        width:  inherit;
        color: black;
        margin: 10px 0;
        span:first-child {
          color: gray;
        }
        span { 
          margin: 10px;
        }
      }
    }

    }
    }
}
</style>
