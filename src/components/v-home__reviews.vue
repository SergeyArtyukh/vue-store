<template lang="html">
  <div class="v-home__reviews-wrapper mtb-20px">
    <div class="title v-container">
      {{reviewsTitle}}
    </div>
    <div class="reviews-card-container v-container">
      <div
      class="reviews-card"
      v-for="(reviewElem, index) in reviewElems"
      :key="index"
      >
        <div class="img-container">
          <a href="#">
            <img :src="require('../assets/images/reviews-imgs/' + reviewElem.url)" alt="#">
          </a>
        </div>
        <div class="text-container">
          {{reviewElem.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reviewsTitle: 'Обзор новинок',
      reviewElems: [
        {
          url: 'img1.jpeg',
          text: 'Обзор JBL Club Pro+'
        },
        {
          url: 'img2.jpeg',
          text: 'Обзор посуды WMF FUSIONTEC'
        },
        {
          url: 'img3.jpeg',
          text: 'Игрушка для взрослых? Гид по выбору электросамоката'
        },
        {
          url: 'img4.jpeg',
          text: 'Windows 10 станет возможным запускать на Apple M1 Mac'
        },
        {
          url: 'img5.jpeg',
          text: 'Apple iPhone 12 выходит в фиолетовом цвете'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mtb-20px {
  margin: 20px 0;
}

.title {
  padding-bottom: 20px;
  font-size: 25px;
  font-weight: bold;

  text-align: left;
}
.reviews-card-container {
  display: flex;
  flex-direction: row;
  .reviews-card {
    display: inline-flex;
    flex-direction: column;

    width: 20%;
    margin-right: 30px;
    &:last-child {
      margin-right: 0px;
    }
    .img-container {
      height: 60%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text-container {
      height: 20%;

      margin-top: 10px;
      font-weight: bold;
      font-size: 18px;

      text-align: left;
    }
  }
}

</style>
