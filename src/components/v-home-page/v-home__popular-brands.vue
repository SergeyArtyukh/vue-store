<template lang="html">
  <div class="v-home__popular-brands-wrapper mtb-20px">
    <div class="v-container">
      <div class="title">
        {{popularBrandsTitle}}
      </div>
      <div class="brands-container">
        <div
        v-for="(popularBrandsElem, index) in popularBrandsElems"
        :key="index"
        class="brand-card"
        :class="popularBrandsElem.classMargin">
          <div class="upper">
            <a href="#">
              <img :src="require('@/assets/images/popular-brands-imgs/' + popularBrandsElem.url)" alt="#">
            </a>
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
      popularBrandsTitle: 'Популярные бренды',
      popularBrandsElems: [
        {
          url: 'img1.jpeg',
          classMargin: 'upper-left'
        },
        {
          url: 'img2.jpeg',
          classMargin: 'middle-upper'
        },
        {
          url: 'img3.jpeg',
          classMargin: 'middle-upper'
        },
        {
          url: 'img1.jpeg',
          classMargin: 'middle-upper'
        },
        {
          url: 'img2.jpeg',
          classMargin: 'middle-upper'
        },
        {
          url: 'img1.jpeg',
          classMargin: 'middle-upper'
        },
        {
          url: 'img2.jpeg',
          classMargin: 'middle-upper'
        },
        {
          url: 'img3.jpeg',
          classMargin: 'upper-right'
        },
        {
          url: 'img3.jpeg',
          classMargin: 'under-left'
        },
        {
          url: 'img3.jpeg',
          classMargin: 'middle-under'
        },
        {
          url: 'img3.jpeg',
          classMargin: 'middle-under'
        },
        {
          url: 'img3.jpeg',
          classMargin: 'middle-under'
        },
        {
          url: 'img3.jpeg',
          classMargin: 'middle-under'
        },
        {
          url: 'img3.jpeg',
          classMargin: 'middle-under'
        },
        {
          url: 'img3.jpeg',
          classMargin: 'middle-under'
        },
        {
          url: 'img3.jpeg',
          classMargin: 'under-right'
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
  font-size: 23px;
  font-weight: bold;

  text-align: left;

  padding-bottom: 15px;
}
.brands-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  flex-wrap: wrap;
  .upper-left {margin: 0 5px 5px 0;}
  .upper-right {margin: 0 0 5px 5px;}
  .under-left {margin: 5px 5px 0 0;}
  .under-right {margin: 5px 0 0 5px}
  .middle-upper {margin: 0 5px 5px 5px}
  .middle-under {margin: 5px 5px 0 5px}
  .brand-card {
    width: 11.8%;
    a {
      // margin: 0 10px;
    }
  }
}
</style>
