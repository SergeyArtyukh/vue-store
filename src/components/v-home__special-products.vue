<template lang="html">
  <div class="v-home__special-products-wrapper">
    <div class="main-wrapper v-container">
      <div class="special-product-first">
        <div class="title">
          <span>{{firstSpecialLineTitle}}</span>
        </div>
        <div
        v-for="(firstSpecialLine, index) of specialProductsFirst"
        :key="index"
        class="product-card">
        <div class="img-container">
          <a href="#">
            <img :src="require('../assets/images/special-products-imgs/first-line/' + firstSpecialLine.url)" alt="#">
          </a>
        </div>
        <div class="text-container">
          <span class="phone-title">{{firstSpecialLine.text}}</span>
          <div class="price-container">
            <span class="price-title">{{firstSpecialLine.otWord + ' ' + firstSpecialLine.price + firstSpecialLine.currencySign}}</span>
            <span class="old-price-title">{{firstSpecialLine.oldPrice + firstSpecialLine.currencySign}}</span>
          </div>
        </div>
        </div>
      </div>
      <div class="special-product-second">
        <div class="title">
          {{secondSpecialLineTitle}}
        </div>
        <div
        v-for="(secondSpecialLine, index) of specialProductsSecond"
        :key="index"
        class="product-card">
        <div class="img-container">
          <a href="#">
            <img :src="require('../assets/images/special-products-imgs/first-line/' + secondSpecialLine.url)" alt="#">
          </a>
        </div>
        <div class="text-container">
          <span class="phone-title">{{secondSpecialLine.text}}</span>
          <div class="price-container">
            <span class="price-title">{{secondSpecialLine.otWord + ' ' + secondSpecialLine.price + secondSpecialLine.currencySign}}</span>
            <span class="old-price-title">{{secondSpecialLine.oldPrice + secondSpecialLine.currencySign}}</span>
          </div>
        </div>
        </div>
      </div>
      <div class="special-product-thirt">
        <div class="title">
          {{thirtSpecialLineTitle}}
        </div>
        <div
        v-for="(thirtSpecialLine, index) of specialProductsThirt"
        :key="index"
        class="product-card">
        <div class="img-container">
          <a href="#">
            <img :src="require('../assets/images/special-products-imgs/first-line/' + thirtSpecialLine.url)" alt="#">
          </a>
        </div>
        <div class="text-container">
          <span class="phone-title">{{thirtSpecialLine.text}}</span>
          <div class="price-container">
            <span class="price-title">{{thirtSpecialLine.otWord + ' ' + thirtSpecialLine.price + thirtSpecialLine.currencySign}}</span>
            <span class="old-price-title">{{thirtSpecialLine.oldPrice + thirtSpecialLine.currencySign}}</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstSpecialLineTitle: 'Смартфоны и планшеты',
      secondSpecialLineTitle: 'Ноутбуки, планшеты  и компьютеры',
      thirtSpecialLineTitle: 'Смартфоны и планшеты',
      specialProductsFirst: [
        {
          url: 'slider-img1.jpeg',
          text: 'Смартфон Samsung Galaxy S21 256GB (SM-G991B)',
          otWord: 'от',
          price: '11 990',
          oldPrice: '11 890',
          currencySign: 'Ꝑ'
        },
        {
          url: 'slider-img1.jpeg',
          text: 'Смартфон Samsung Galaxy S21 256GB (SM-G991B)',
          otWord: '',
          price: '11 990',
          oldPrice: '11 890',
          currencySign: 'Ꝑ'
        },
        {
          url: 'slider-img1.jpeg',
          text: 'Смартфон Samsung Galaxy S21 256GB (SM-G991B)',
          otWord: '',
          price: '11 990',
          oldPrice: '11 890',
          currencySign: 'Ꝑ'
        }
      ],
      specialProductsSecond: [
        {
          url: 'slider-img1.jpeg',
          text: 'Смартфон Samsung Galaxy S21 256GB (SM-G991B)',
          otWord: 'от',
          price: '11 990',
          oldPrice: '11 890',
          currencySign: 'Ꝑ'
        },
        {
          url: 'slider-img1.jpeg',
          text: 'Смартфон Samsung Galaxy S21 256GB (SM-G991B)',
          otWord: '',
          price: '11 990',
          oldPrice: '11 890',
          currencySign: 'Ꝑ'
        },
        {
          url: 'slider-img1.jpeg',
          text: 'Смартфон Samsung Galaxy S21 256GB (SM-G991B)',
          otWord: '',
          price: '11 990',
          oldPrice: '11 890',
          currencySign: 'Ꝑ'
        }
      ],
      specialProductsThirt: [
        {
          url: 'slider-img1.jpeg',
          text: 'Смартфон Samsung Galaxy S21 256GB (SM-G991B)',
          otWord: 'от',
          price: '11 990',
          oldPrice: '11 890',
          currencySign: 'Ꝑ'
        },
        {
          url: 'slider-img1.jpeg',
          text: 'Смартфон Samsung Galaxy S21 256GB (SM-G991B)',
          otWord: '',
          price: '11 990',
          oldPrice: '11 890',
          currencySign: 'Ꝑ'
        },
        {
          url: 'slider-img1.jpeg',
          text: 'Смартфон Samsung Galaxy S21 256GB (SM-G991B)',
          otWord: '',
          price: '11 990',
          oldPrice: '11 890',
          currencySign: 'Ꝑ'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-home__special-products-wrapper {
  margin: 35px 0;
  .main-wrapper {
    display: flex;
    flex-direction: row;
    .special-product-second {
      margin: 0 30px;
    }
    .title {
      font-size: 23px;
      font-weight: bold;

      text-align: left;

      border-bottom: 1px solid #ededed;
      padding-bottom: 15px;
    }
    .product-card {
      display: flex;

      margin: 35px 0;
      .img-container {
        margin-right: 30px;
        img {
          width: 50%;
        }
      }
      .text-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        .phone-title {
          font-size: 18px;
          font-weight: bold;
        }
        .price-container {
          display: flex;
          .price-title {
            font-size: 25px;
            font-weight: bold;
          }
          .old-price-title {
            margin-left: 10px;

            font-size: 20px;

            color: grey;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>
