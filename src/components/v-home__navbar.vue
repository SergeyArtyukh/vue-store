<template lang="html">
  <div class="v-navbar-main-wrapper">
    <div
    v-for="(navbarElem, index) in navbarElems"
    :key="index"
    class="v-navbar-wrapper v-container"
    >
      <div class="v-navbar__logo flex-default">
        <div class="logo-container">
          <router-link class="logo" :to="{ name: 'Home', params: {} }">
            <span>{{navbarElem.logoTitle}}</span>
          </router-link>
        </div>
        <div :class="{active: isVisible}" class="catalog-container">
          <div @click="catalogPopup()" class="catalog">
            <span><font-awesome-icon :icon="navbarElem.catalogIcon"/></span>
            <span>{{navbarElem.catalogTitle}}</span>
          </div>
        </div>
      </div>
      <div class="v-navbar__search">
        <input :placeholder="navbarElem.placeholder" type="text" name="" value="">
        <button class="search-icon-button" type="button" name="button">
          <font-awesome-icon :icon="navbarElem.searchIcon"/>
        </button>
      </div>
      <div class="v-navbar__nav-buttons flex-default">
        <div
        v-for="(navButtonEl, index) in navButtonElems"
        :key="index"
        class="nav-button-container">
        <router-link :to="{ path: `/${navButtonEl.linkPage}`, params: {} }">
          <font-awesome-icon :icon="navButtonEl.icon"/>
          <span>{{navButtonEl.title}}</span>
          <div class="v-cart-counter">
            <!-- <span
            v-text="counterArrays"
            >
            </span> -->

            <span
            v-if="CART.length || FAVORITE.length"
            >
            {{counterArrays(index)}}
            </span>
          </div>
        </router-link>
        <!-- <a :to="navButtonEl.linkPage" href="#">
          <font-awesome-icon :icon="navButtonEl.icon"/>
          <span>{{navButtonEl.title}}</span>
        </a> -->
        </div>
      </div>
    </div>
    <div v-show="isVisible" class="popup-container">
      <div class="popup-text">
        <div
          class="pop-text-wrapper"
          v-for="(popElem, index) in popElems"
          :key="index"
        >
          <div
          class="pop-text-container"
          v-for="(popElemText, index) in popElem.popElemTexts"
          :key="index"
          >
          <img v-if="popElemText.url.length" :src="require('../assets/images/popup-imgs/' + popElemText.url)" alt="#">
          <router-link :to="{ name: '', params: {} }"><span>{{popElemText.title}}</span></router-link>
            <div
            class="hide-text-container"
            v-for="(popElemTextLast, index) in popElemText.popElemTextLasts"
            :key="index"
            >
              <router-link v-if="popElemText.isActive" :to="{ name: '', params: {} }"><span>{{popElemTextLast.title}}</span></router-link>
            </div>
          </div>
          <button
          v-if="popElem.hideButton"
          @click="hideTextButton(index)"
          type="button"
          >
          {{popElem.hideButton}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters ([
      'CART',
      'FAVORITE',
      'COMPARISON',
    ]),
  },
  methods: {
    counterArrays (index) {
      if (this.navButtonElems[index].title === 'Корзина' && this.CART.length > 0) {
        return this.CART.length
      } else if (this.navButtonElems[index].title === 'Избранное' && this.FAVORITE.length > 0) {
        return this.FAVORITE.length
      } else if (this.navButtonElems[index].title === 'Сравнение' && this.COMPARISON.length > 0){
        return this.COMPARISON.length
      }
    },
    catalogPopup () {
      this.isVisible = !this.isVisible
      if (this.isVisible === false) {
        this.navbarElems[0].catalogIcon = 'bars'
      } else {
        this.navbarElems[0].catalogIcon = 'times'
      }
    },
    hideTextButton (index) {
      if (this.popElems[index].popElemTexts[6].isActive == false) {
        this.popElems[index].hideButton = 'Скрыть'
        this.popElems[index].popElemTexts[6].isActive = !this.popElems[index].popElemTexts[6].isActive
        console.log('1 часть' + this.popElems[index].hideButton + this.popElems[index].popElemTexts[6].isActive)
      } else {
        this.popElems[index].hideButton = 'Показать'
        this.popElems[index].popElemTexts[6].isActive = !this.popElems[index].popElemTexts[6].isActive
      }
    }
  },
  watch: {

  },
  data () {
    return {
      isVisible: false,
      isHidden: false,
      hideButton: 'Показать',
      catalogIcon: 'bars',
      navbarElems: [
        {
          logoTitle: 'FINE',
          catalogIcon: 'bars',
          catalogTitle: 'Каталог',
          placeholder: 'Поиск',
          searchIcon: 'search'
        }
      ],
      navButtonElems: [
        {
          title: 'Профиль',
          icon: 'user-circle',
          linkPage: 'profile-page'
        },
        {
          title: 'Сравнение',
          icon: 'grip-lines-vertical',
          linkPage: 'comparison-page'
        },
        {
          title: 'Избранное',
          icon: 'heart',
          linkPage: 'marked-page'
        },
        {
          title: 'Корзина',
          icon: 'shopping-cart',
          linkPage: 'shopping-cart'
        }
      ],
      popElems: [
        {
          popElemTexts: [
            {
              url: 'popup-img1.png',
              title: 'Смартфоны и планшеты'
            },
            {
              url: '',
              title: 'Планшеты'
            },
            {
              url: '',
              title: 'Электронные книги'
            },
            {
              url: '',
              title: 'Акссесуары для планшетов'
            },
            {
              url: '',
              title: 'Акссесуары для электронных книг'
            }
          ]
        },
        {
          hideButton: 'Показать',
          popElemTexts: [
            {
              url: 'popup-img2.png',
              title: 'Ноутбуки, планшеты и компьютеры'
            },
            {
              url: '',
              title: 'Игровые ноутбуки'
            },
            {
              url: '',
              title: 'Ультрабуки'
            },
            {
              url: '',
              title: 'Моноблоки'
            },
            {
              url: '',
              title: 'Системные блоки'
            },
            {
              url: '',
              title: 'Мониторы'
            },
            {
              isActive: false,
              url: '',
              popElemTextLasts: [
                {
                  title: 'Комплектующие'
                }
              ]
            }
          ]
        },
        {
          hideButton: 'Показать',
          popElemTexts: [
            {
              url: 'popup-img3.png',
              title: 'Техника для дома'
            },
            {
              url: '',
              title: 'Кондиционеры'
            },
            {
              url: '',
              title: 'Вентиляторы'
            },
            {
              url: '',
              title: 'Радиаторы'
            },
            {
              url: '',
              title: 'Роботы-пылесосы'
            },
            {
              url: '',
              title: 'Стиральные машины'
            },
            {
              isActive: false,
              url: '',
              popElemTextLasts: [
                {
                  title: 'Утюги'
                },
                {
                  title: 'Отпариватели'
                }
              ]
            }
          ]
        },
        {
          hideButton: 'Показать',
          popElemTexts: [
            {
              url: 'popup-img4.png',
              title: 'Игры и развлечения'
            },
            {
              url: '',
              title: 'Консоли PS5'
            },
            {
              url: '',
              title: 'Консоли PS4'
            },
            {
              url: '',
              title: 'Игры для PS4'
            },
            {
              url: '',
              title: 'Консоли Xbox'
            },
            {
              url: '',
              title: 'Подписки Xbox'
            },
            {
              isActive: false,
              url: '',
              popElemTextLasts: [
                {
                  url: '',
                  title: 'Консоли Nintendo'
                },
                {
                  url: '',
                  title: 'Игры для PC'
                }
              ]
            }
          ]
        },
        {
          hideButton: 'Показать',
          popElemTexts: [
            {
              url: 'popup-img5.png',
              title: 'Телевизоры, Аудио-видео, Hi-Fi'
            },
            {
              url: '',
              title: 'Все телевизоры'
            },
            {
              url: '',
              title: '4K UHD-телевизоры'
            },
            {
              url: '',
              title: '8K телевизоры'
            },
            {
              url: '',
              title: 'Смарт-телевизоры'
            },
            {
              url: '',
              title: 'Наушники'
            },
            {
              isActive: false,
              url: '',
              popElemTextLasts: [
                {
                  url: '',
                  title: 'Акссесуары для аудио'
                },
                {
                  url: '',
                  title: 'Винил и проигрователи'
                }
              ]
            }
          ]
        },
        {
          hideButton: 'Показать',
          popElemTexts: [
            {
              url: 'popup-img6.png',
              title: 'Фото и видеотехника'
            },
            {
              url: '',
              title: 'GoPro экшн-камеры'
            },
            {
              url: '',
              title: 'Sony экшн-камеры'
            },
            {
              url: '',
              title: 'Цифровые фоторамки'
            },
            {
              url: '',
              title: 'Цифровые видеокамеры 4K'
            },
            {
              url: '',
              title: 'Штативы'
            },
            {
              isActive: false,
              url: '',
              popElemTextLasts: [
                {
                  url: '',
                  title: 'Сумки и чехлы'
                },
                {
                  url: '',
                  title: 'Чистящие средства для оптики'
                }
              ]
            }
          ]
        },
        {
          hideButton: 'Показать',
          popElemTexts: [
            {
              url: 'popup-img7.png',
              title: 'Бытовая техника для кухни'
            },
            {
              url: '',
              title: 'Микроволные печи'
            },
            {
              url: '',
              title: 'Миксеры и блендеры'
            },
            {
              url: '',
              title: 'Мясорубки'
            },
            {
              url: '',
              title: 'Мультиварки'
            },
            {
              url: '',
              title: 'Хлебопечи'
            },
            {
              isActive: false,
              url: '',
              popElemTextLasts: [
                {
                  url: '',
                  title: 'Сковородды'
                },
                {
                  url: '',
                  title: 'Электрочайники'
                },
                {
                  url: '',
                  title: 'Тостеры и ростеры'
                },
                {
                  url: '',
                  title: 'Кухонные весы'
                },
                {
                  url: '',
                  title: 'Плиты газовые'
                }
              ]
            }
          ]
        },
        {
          hideButton: 'Показать',
          popElemTexts: [
            {
              url: 'popup-img8.png',
              title: 'Красоты и здоровье'
            },
            {
              url: '',
              title: 'Фены'
            },
            {
              url: '',
              title: 'Фен-щетки'
            },
            {
              url: '',
              title: 'Мультистайлеры'
            },
            {
              url: '',
              title: 'Расчески-выпрямитили'
            },
            {
              url: '',
              title: 'Электробритвы'
            },
            {
              isActive: false,
              url: '',
              popElemTextLasts: [
                {
                  url: '',
                  title: 'Тримерры'
                },
                {
                  url: '',
                  title: 'Эпиляторы'
                },
                {
                  url: '',
                  title: 'Умные часы'
                },
                {
                  url: '',
                  title: 'Массажеры'
                },
                {
                  url: '',
                  title: 'Зубные щетки'
                },
                {
                  url: '',
                  title: 'Парфюмерия и щетки'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.is-active {
  display: block;
}
.not-active {
  display: none!important;
}
.active {
  position: absolute;
  left: 15%;
  z-index: 2;
}

.v-navbar-main-wrapper {
  border-bottom: 1px solid #ededed;

  padding: 15px 0;
  .popup-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
    padding: 20px 135px;
    background: rgba(0,0,0,.2);
    opacity: 1;
    transition: opacity .15s linear;
    .popup-text {
      overflow: scroll;
      position: relative;
      box-sizing: border-box;
      margin: 0 auto;
      width: 100%;
      height: 80%;
      max-width: calc(100% - .01px)!important;
      background: #fff;
      opacity: 1;
      transform: translateY(115px);
      transition: .3s linear;
      transition-property: opacity,transform;
      display: flex;
      flex-wrap: wrap;
      padding: 32px;
      background-color: #FFFFFF;
      .pop-text-wrapper {
        width: 25%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: baseline;
        font-size: 15px;
        .pop-text-container {
          .hide-text-container {
            display: flex;
            flex-direction: column;
            align-items: baseline;

            .active {
              display: block;
            }
          }
          &:first-child {
            font-weight: bold;
          }
          a {
            color: black;
            text-decoration: none;
            &:hover{
              color:green;
            }
          }
          img {
            width: 35%;
          }
        }
      }
    }
  }
  .v-navbar-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .v-navbar__logo {
      width: 20%;
      .logo-container {
        .logo{
          color: #76BC1F;
          text-decoration: none;
          font-family: sans-serif;
          font-size: 40px;
          font-weight: bold;
        }
      }
      .catalog-container {
        margin-right: 7px;
        .catalog {
          background-color: #81c625;

          padding: 15px 35px;

          cursor: pointer;
          &:hover {
            background-color: #94db36;
          }
          span {
            color: white;

            font-weight: bold;
            font-family: revert;
            font-size: 16px;
            svg {
              width: 1em;
              height: 1em;
            }
          }
           span:first-child {
            margin-right: 10px;
          }
        }
      }
    }
    .v-navbar__search {
      display: flex;
      width: 50%;
      position: relative;
      input {
        width: 100%;
        padding: 17.5px 15px;
        border: 1px solid #ededed;
        font-size: 15px;
        margin: 0 10px;
      }
      .search-icon-button {
        font-size: 20px;background-color: transparent;
        border: none;
        position: absolute;
        margin: auto;
        color: #E9E9E9;
        font-size: 20px;
        margin: 0 auto;
        bottom: 0;
        left: 90%;
        right: 0;
        top: 0;
        &:hover {
          color: black;

          cursor: pointer;
        }
      }
    }
    .v-navbar__nav-buttons {
      width: 30%;
      .nav-button-container {
        position: relative;
        .v-cart-counter {
          position: absolute;
          background-color: #81c624;
          width: 20px;
          border-radius: 50%;
          top: -10px;
          right: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          span {
            font-size: 13px;
            font-weight: bold;
            color: white;
          }
        }
        a {
          color: black;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          &:hover {
            color: green;
            transition: transform 0.3s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
