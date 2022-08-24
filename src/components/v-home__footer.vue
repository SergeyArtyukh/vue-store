<template lang="html">
  <div class="v-home__footer-wrapper">
    <div class="footer-container v-container">
      <div
      v-for="(mainElem,index) in mainElems"
      :key="index"
      class="main-content-container"
      >
        <div class="img-container">
          <img :src="require('../assets/images/footer/' + mainElem.url)" alt="№">
        </div>
        <div class="support-phones-container">
          <div class="support-phone">
            <span :class="mainElem.supportPhoneClass">{{mainElem.supportPhone}}</span>
            <span class="support-text-class">{{mainElem.supportText}}</span>
          </div>
          <div class="shop-phone">
            <span :class="mainElem.supportPhoneClass">{{mainElem.shopPhone}}</span>
            <span class="support-text-class">{{mainElem.shopText}}</span>
          </div>
        </div>
        <div class="social-icons">
          <span>{{mainElem.socialTitle}}</span>
          <div class="social-icons-container">
            <span v-for="(socialIcon, index) in mainElem.icons" :key="index">{{socialIcon.icon}}</span>
          </div>
        </div>
      </div>
      <div class="other-content-container">
        <div
        v-for="(otherElem, index) in otherElems"
        :key="index"
        class="">
          <a href="#">
            <span
            :class="otherElemFirst.firstElemClass"
            v-for="(otherElemFirst, index) in otherElem.firstLine"
            :key="index">{{otherElemFirst.text}}
            </span>
          </a>
          <a href="#">
            <span
            :class="otherElemSecond.firstElemClass"
            v-for="(otherElemSecond, index) in otherElem.secondLine"
            :key="index">
            {{otherElemSecond.text}}
            </span>
          </a>
          <a href="#">
            <span
            :class="otherElemThirt.firstElemClass"
            v-for="(otherElemThirt, index) in otherElem.thirtLine"
            :key="index">
            {{otherElemThirt.text}}
            </span>
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
      mainElems: [
        {
          url: 'logo.jpeg',
          supportPhoneClass: 'support-phone-class',
          supportPhone: '+7(800 800-80-80)',
          supportText: 'справочная служба',
          shopPhone: '+7(800 800-80-80)',
          shopText: 'интернет-магазин',
          socialTitle: 'Оставайтесь на связи',
          icons: [
            {
              icon: '1'
            },
            {
              icon: '2'
            },
            {
              icon: '3'
            },
            {
              icon: '4'
            },
            {
              icon: '5'
            },
            {
              icon: '6'
            }
          ]
        }
      ],
      otherElems: [
        {
          firstLine: [
            {
              text: 'О магазине',
              firstElemClass: 'first-elem-class'
            },
            {
              text: 'Условия обмена и возврата'
            },
            {
              text: 'Каталог'
            },
            {
              text: 'О компании'
            },
            {
              text: 'Контакты'
            },
            {
              text: 'Доставка'
            },
            {
              text: 'Оплата'
            }
          ]
        },
        {
          secondLine: [
            {
              text: 'Клиентам',
              firstElemClass: 'first-elem-class'
            },
            {
              text: 'Личный кабинет'
            },
            {
              text: 'Блог'
            },
            {
              text: 'Обратная связь'
            }
          ]
        },
        {
          thirtLine: [
            {
              text: 'Информация',
              firstElemClass: 'first-elem-class'
            },
            {
              text: 'Пользовательское соглашение'
            },
            {
              text: 'Политики конфиенцальности и оферта'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.support-text-class {
  font-weight: bold;
  font-size: 15px;
}
.support-phone-class{
  font-weight: bold;
  font-size: 20px;
}
.v-home__footer-wrapper {
  background-color: #F5F5F6;
  padding: 30px 0 80px 0;
  .footer-container {
    display: flex;
    .main-content-container {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      div {
        align-items: baseline;
      }
      .img-container {
        width: 50%;
      }
      .support-phones-container {
        margin: 32px 0;
        .support-phone {
          margin-bottom: 16px;
        }
        .support-phone,
        .shop-phone {
          display: flex;
          flex-direction: column;
        }
      }
      .social-icons {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: baseline;
        span {
          font-size: 15px;
          font-weight: bold;
          text-align: left;
        }
        .social-icons-container {
          display: inherit;
          width: inherit;
          justify-content: space-between;
        }
      }
    }
    .other-content-container {
      width: auto;

      display: flex;
      .first-elem-class {
        font-weight: bold;
      }
      div {
        margin-left: 80px;
        a {
          display: flex;
          flex-direction: column;
          align-items: baseline;

          color: black;
          text-decoration: none;
          span {
            font-size: 14px;
            margin-bottom: 10px;
          }
          span:hover {
            color: green;
          }
        }
      }
    }
  }
}
</style>
