<template lang="html">
  <div class="v-home__sales-wrapper">
    <div class="title v-container">
      {{salesTitle}}
    </div>
    <div class="content v-container">
      <div
      v-for="salesElem in salesElems"
      :key="salesElem.id"
      :class="salesElem.class">
        <span>
          <a href="#">
            <img :src="require('../assets/images/sale-imgs/' + salesElem.url)" alt="#">
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      salesTitle: 'Акции',
      salesElems: [
        {
          url: 'img1.jpeg',
          id: 1
        },
        {
          url: 'img2.jpeg',
          class: 'center-elem',
          id: 2
        },
        {
          url: 'img3.jpeg',
          id: 3
        }
        // {
        //   url: 'img4.jpeg',
        //   id: 4
        // },
        // {
        //   url: 'img5.jpeg',
        //   class: 'center-elem',
        //   id: 5
        // },
        // {
        //   url: 'img6.jpeg',
        //   id: 6
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-home__sales-wrapper {
  margin: 35px 0;
  .title {
    text-align: left;
    font-weight: bold;
    font-size: 30px;
  }
  .content {
    display: flex;
    flex-direction: row;

    padding-top: 20px;
    .center-elem {
      margin: 0 30px;
    }
  }
}
</style>
