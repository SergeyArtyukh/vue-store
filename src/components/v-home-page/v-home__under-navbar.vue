<template lang="html">
  <div class="v-home__under-navbar-wrapper">
    <div class="flex-default v-container">
      <div
      v-for="(underNavbarElem, index) in underNavbarElems"
      :key="index"
      class="under-navbar-elem-container"
      >
      <router-link :to="`/categoria/${underNavbarElem.categoriesLink}`">
        <a 
        :class="underNavbarElem.arrowDown" 
        href="#"
        >
          <span :class="underNavbarElem.class">{{underNavbarElem.title}}</span>
        </a>
      </router-link>
      </div>
      <div  class="last-elems-wrapper">
        <div class="last-elem-button">
          <span><font-awesome-icon class="mr-10" :icon="lastElemIcon"/>Еще</span>
        </div>
        <div uk-dropdown class="last-elems-container">
          <div class="last-elems-con">
            <span v-for="(lastElem, index) in lastElems" :key="index" class="hello uk-nav uk-dropdown-nav">
              <router-link :to="`/categoria/${lastElem.categoriesLink}`">
                <span>{{lastElem.title}}</span>
              </router-link>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // navbarLinkClicked(id) {
    //   this.$router.push({name: 'navbarLink', query: {'underNavbarElem' : id}})
    // }
  },
  data () {
    return {
      lastElemIcon: 'angle-down',
      isLastElem: false,
      underNavbarElems: [
        {
          title: 'Смартфоны и планшеты',
          categoriesLink: 'Phones'
        },
        {
          title: 'Ноутбуки, планшеты и компьютеры',
          categoriesLink: 'PCs'
        },
        {
          title: 'Техника для дома',
          categoriesLink: 'HomeTech'
        },
        {
          title: 'Игры и развлечения',
          categoriesLink: 'Games'
        },
        {
          title: 'Телевизоры, Аудио-видео, Hi-Fi',
          categoriesLink: 'TVs'
        },
        {
          title: 'Фото и видеотехника',
          categoriesLink: 'Photos'
        }
      ],
      lastElems: [
        {
          title: 'Бытовая техника для кухни',
          categoriesLink: 'KitchenTech'
        },
        {
          title: 'Красота и здоровье',
          categoriesLink: 'Beauty'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$easing: cubic-bezier(.25,1.7,.35,.8);
.v-home__under-navbar-wrapper {
  padding: 10px 0;
  box-shadow: 0px 18px 10px -15px #E9E9E9;
  .under-navbar-elem-container {
    .arrow-down-class:hover {
      .hello {
        svg {
          transition: transform 0.3s ease-in-out;
          transform: translateY(5px);
        }
      }
    }
    a {
      text-decoration: none;
      color: black;
      &:hover {
        color: green;
      }
    }
    span {
      font-size: 15px;
      font-weight: bold;
    }
  }
  .last-elems-wrapper {
    position: relative;
    .last-elem-button {
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      .mr-10 {
        margin-right: 10px;
      }
      &:hover {
        color: green;
      }
    }
    .last-elems-container {
      position: absolute;
      width: 250px;
      height: 100px;
      text-align: left;
      background-color: white;
      box-shadow: 0px 8px 18px -10px grey;
      padding: 15px 10px;
      left: -118px;
      top: 25px;
      .last-elems-con {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        span {
          font-size: 15px;
          font-weight: bold;
          color: black;
          a {
            text-decoration: none;
            span:hover {
              border: none;
              color: green;
            }
          }
        }
      }
    }
  }
}
</style>
