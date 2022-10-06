<template lang="html">
  <div class="v-home__upper-navbar-wrapper">
    <div class="upper-navbar-container v-container">
      <span
      class=""
      v-for="(upperNavbarElem, index) in upperNavbarElems"
      :key="index"
      >
      <a href="#">
        <span><font-awesome-icon v-if="upperNavbarElem.icon" :icon="upperNavbarElem.icon"/></span>
        <span>{{upperNavbarElem.title}}</span>
      </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      upperNavbarElems: [
        {
          title: 'Доставка и оплата',
          icon: ''
        },
        {
          title: 'Пункты выдачи',
          icon: ''
        },
        {
          title: 'Поддержка',
          icon: ''
        },
        {
          title: '+ 8(800) 355-355-55',
          icon: 'phone'
        }

        // "Доставка и оплата",
        // "Пункты выдачи",
        // "Поддержка",
        // "+ 8(800) 355-355-55"
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .v-home__upper-navbar-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    background-color: #F7F7F7;

    padding: 10px 0;
    .upper-navbar-container {
      span {
        margin: 0 10px;
        a {
          color: black;

          text-decoration: none;
          &:hover {
            color: green;
          }
        }
      }
    }
  }

</style>
