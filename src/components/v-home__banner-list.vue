<template lang="html">
  <div class="v-home-banner-list v-container">
    <div class="big-banner">
      <a href="#">
        <img :src="require('../assets/images/banner-list-imgs/' + bigBannerUrl)" alt="#">
      </a>
    </div>
    <div class="other-banner-container">
      <div class="other-banner-upper flex-default">
        <div
        v-for="(bannerImg, index) in bannerImgsUpper"
        :key="index"
        class="img-container">
          <a href="#">
            <img :src="require('../assets/images/banner-list-imgs/' + bannerImg.url)" alt="#">
          </a>
        </div>
      </div>
      <div class="other-banner-under flex-default">
        <div
        v-for="(bannerImg, index) in bannerImgsUnder"
        :key="index"
        class="img-container">
          <a href="#">
            <img :src="require('../assets/images/banner-list-imgs/' + bannerImg.url)" alt="#">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bigBannerUrl: 'banner-list-img1.jpeg',
      bannerImgsUpper: [
        {
          url: 'banner-list-img2.jpeg'
        },
        {
          url: 'banner-list-img3.jpeg'
        },
        {
          url: 'banner-list-img4.jpeg'
        }
      ],
      bannerImgsUnder: [
        {
          url: 'banner-list-img5.jpeg'
        },
        {
          url: 'banner-list-img6.jpeg'
        },
        {
          url: 'banner-list-img7.jpeg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-home-banner-list {
  display: flex;

  padding: 35px 0 55px 0;
  .big-banner {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .other-banner-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    .other-banner-upper,
    .other-banner-under {
      height: 50%;
    }
    .other-banner-upper{
      .img-container {
        margin: 0 0 15px 25px;
      }
    }
    .other-banner-under{
      .img-container {
        margin: 15px 0 0 25px;
      }
    }
    .img-container {
      height: 100%;
      a {
        img {
          // margin: 0 0 0 15px;

          height: 100%;
        }
      }
    }
  }
}
</style>
