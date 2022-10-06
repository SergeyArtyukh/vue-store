<template>
    <div class="v-breadcrambs-wrapper v-container">
        <p class="v-breadcarambs-container">
            <router-link :to="{name: 'Home'}">
                {{mainTitle}}  
            </router-link>
            /  {{categoryName}}
        </p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                mainTitle: 'Главная',
            }
        },
        props: ['categoryName'],
    }
</script>
<style lang="scss">
.v-breadcrambs-wrapper {
    .v-breadcarambs-container {
        margin: 20px 0 40px 0;
        text-align: left;
        color: black;
        a {
            color: black;
            text-decoration: none;
        }
    }
}
</style>