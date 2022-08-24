<template lang="html">
  <div class="v-container">
    <div class="v-comparison-page-wrapper">
      <router-link class="link-to-home" :to="{ name: 'Home', params: {} }">{{comparisonTitle}}</router-link>
      <p>{{comparisonRu}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comparisonTitle: 'Вернуться к покупкам',
      comparisonRu: 'Сравнение'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-comparison-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 15px 0;
  .link-to-home {
    color: black;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
  }
  p {
    font-size: 24px;
    font-weight: bold;
    font-family: sans-serif;
  }
}
</style>
