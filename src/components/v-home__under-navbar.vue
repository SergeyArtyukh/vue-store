<template lang="html">
  <div class="v-home__under-navbar-wrapper">
    <div class="flex-default v-container">
      <div
      v-for="(underNavbarElem, index) in underNavbarElems"
      :key="index"
      class="under-navbar-elem-container"
      >
        <a :class="underNavbarElem.arrowDown" href="#">
          <span :class="underNavbarElem.class">{{underNavbarElem.title}}</span>
          <span class="hello">
            <font-awesome-icon v-if="underNavbarElem.icon" :icon="underNavbarElem.icon"/>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      underNavbarElems: [
        {
          title: 'Смартфоны и планшеты',
          icon: ''
        },
        {
          title: 'Ноутбуки, планшеты и компьютеры',
          icon: ''
        },
        {
          title: 'Техника для дома',
          icon: ''
        },
        {
          title: 'Игры и развлечения',
          icon: ''
        },
        {
          title: 'Телевизоры, Аудио-видео, Hi-Fi',
          icon: ''
        },
        {
          title: 'Фото и видеотехника',
          icon: ''
        },
        {
          title: 'Еще',
          icon: 'angle-down',
          class: 'mr-10',
          arrowDown: 'arrow-down-class'
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
}
</style>
