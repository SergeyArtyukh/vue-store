<template>
    <div class="v-phones-page-wrapper">
        <upperNavbar></upperNavbar>
        <navbar></navbar>
        <underNavbar></underNavbar>
        <breadcrambs
        categoryName = 'Телевизоры, Аудио-видео, Hi-Fi'
        >
        </breadcrambs>
        <div class="category-item-container v-container">
            <categoriesTemplate
            v-for="TVElem in TV"
            :key="TVElem.id"
            :sliderElem="TVElem"
            @addToCart="addToCart"
            @addToFavorite="addToFavorite"
            @addToComparison="addToComparison"
            @productCardLink="productCardLink"
            >    
            </categoriesTemplate>
        </div>
        <footerContainer></footerContainer>
        <copyright></copyright>
    </div>
</template>
<script>
import upperNavbar from '../../components/v-home-page/v-home__upper-navbar.vue'
import navbar from '../../components/v-home-page/v-home__navbar.vue'
import underNavbar from '../../components/v-home-page/v-home__under-navbar.vue'
import footerContainer from '../../components/v-home-page/v-home__footer.vue'
import copyright from '../../components/v-home-page/v-home__copyright.vue'
import categoriesTemplate from '../../components/v-categories-template.vue'
import breadcrambs from '@/components/v-breadcrambs.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    data () {
        return {
            title: this.$route.params['title']
        }
    },
    components: {
        upperNavbar,
        navbar,
        underNavbar,
        footerContainer,
        copyright,
        categoriesTemplate,
        breadcrambs
    },
    computed: {
        ...mapGetters([
            'TV'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_TV_FROM_API',
            'ADD_TO_CART',
            'ADD_TO_FAVORITE',
            'ADD_TO_COMPARISON'
        ]),
        productCardLink(id) {
            this.$router.push({name: 'productPage', query: {'product' : id}})
        },
        addToFavorite (product) {
            this.ADD_TO_FAVORITE(product)
            .then(() => {
                let timeStamp = Date.now().toLocaleString();
                this.messages.unshift(
                {
                    text: 'Товар добавлен в избранное',
                    id: timeStamp
                }
                )
            })
            product.isFavorite = true;
        },
        addToComparison(product) {
            this.ADD_TO_COMPARISON(product)
            .then(() => {
                let timeStamp = Date.now().toLocaleString();
                this.messages.unshift(
                {
                    text: 'Товар добавлен в сравнение',
                    id: timeStamp
                }
                )
            })
        },
        addToCart(data) {
            this.ADD_TO_CART(data)
            .then(() => {
            let timeStamp = Date.now().toLocaleString();
            this.messages.unshift(
                {
                text: 'Товар добавлен в корзину',
                id: timeStamp
                }
            )
            })
        }
    },
    mounted () {
        this.GET_TV_FROM_API();
    }

}
</script>
<style lang="scss">
.v-phones-page-wrapper {
    .category-item-container {
        display: flex;
        flex-wrap: wrap;
        .v-product-item-container {
            width: 25%;
        }
    }
}
</style>