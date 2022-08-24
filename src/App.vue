<template>
  <div id="app">
    <transition name="moveInUp">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
button {
  cursor: pointer;
}
.moveInUp-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}

.moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.v-container {
  margin: 0 8%!important;
}
.mr-10 {
  margin-right: 10px;
}
.flex-default {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
