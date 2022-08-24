<template lang="html">
  <div class="v-home__copyright-wrapper">
    <div
    class="copyright-container v-container"
    v-for="(copyrightElem, index) in copyrightElems"
    :key="index">
      <span :class="copyrightElem.textFS">{{copyrightElem.text}}</span>
      <a :class="copyrightElem.textFS" href="#">
        <span>{{copyrightElem.link}}</span>
      </a>
      <div class="img-container">
        <a
        v-for="(partnerElem, index) in copyrightElem.partnerElems"
        :key="index"
        href="#">
          <img :src="require('../assets/images/footer/' + partnerElem.url)" alt="#">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      copyrightElems: [
        {
          text: '© 2020 Любое использование контента без письменного разрешения запрещено',
          link: 'Интернет-магазин создан на InSales',
          textFS: 'text-font-size',
          partnerElems: [
            {
              url: 'img1.jpeg'
            },
            {
              url: 'img2.jpeg'
            },
            {
              url: 'img3.jpeg'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.text-font-size {
  font-size: 14px;
  font-weight: bold;
}
.v-home__copyright-wrapper {
  background-color: #EAEAEA;
  .copyright-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: #2c3e50;
    }
    .img-container {
      a {
        img {
          width: 15%;
        }
      }
    }
    .copyright-main-text {
      font-size: 14px;
    }
  }
}
</style>
