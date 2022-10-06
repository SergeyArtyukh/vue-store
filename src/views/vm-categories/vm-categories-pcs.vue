<template>
    <div class="v-phones-page-wrapper">
        <upperNavbar></upperNavbar>
        <navbar></navbar>
        <underNavbar></underNavbar>
        <breadcrambs
        categoryName = 'Ноутбуки, планшеты и компьютеры'
        >
        </breadcrambs>
        <div class="category-item-container v-container">
            <div class="categories">
                <categoriesTemplate
                    v-for="pcElem in filteredProducts"
                    :key="pcElem.id"
                    :sliderElem="pcElem"
                    @addToCart="addToCart"
                    @addToFavorite="addToFavorite"
                    @addToComparison="addToComparison"
                    @productCardLink="productCardLink"
                    >    
                </categoriesTemplate>
                <div v-if="!sortedProducts.length">
                    <h1>Такого товара нет</h1>
                </div>
            </div>
            <div class="sort">
                <categoriesSort
                @setRangerSlider="setRangerSliderPC"
                @sortByPrice="sortByPriceHigh"
                >
                </categoriesSort>
            </div>
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
import categoriesSort from '../../components/v-categories-sort.vue'
import breadcrambs from '@/components/v-breadcrambs.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    data () {
        return {
            title: this.$route.params['title'],
            sortedProducts: [],
            sortElemsPC: [],
            person: [
                {
                    name: 'Vlad',
                    age: 17
                },
                {
                    name: 'Vlad2',
                    age: 18
                },
                {
                    name: 'Vlad3',
                    age: 24
                },
                {
                    name: 'Vlad4',
                    age: 14
                },
            ]
        }
    },
    components: {
        upperNavbar,
        navbar,
        underNavbar,
        footerContainer,
        copyright,
        categoriesTemplate,
        categoriesSort,
        breadcrambs
    },
    computed: {
        ...mapGetters([
            'CATEGORYPC',
            'SORTELEMSPC',
            'SEARCH_VALUE'
        ]),
        filteredProducts() {
            return this.sortedProducts
        }
    },
    methods: {
        ...mapActions([
            'GET_SORTELEMSPC_FROM_API',
            'GET_CATEGORYPC_FROM_API',
            'ADD_TO_CART',
            'ADD_TO_FAVORITE',
            'ADD_TO_COMPARISON'
        ]),
        sortByPriceHigh (sortOptions) {
            console.log(sortOptions);
        },
        setRangerSliderPC() {
            if (this.SORTELEMSPC[0].minPrice > this.SORTELEMSPC[0].maxPrice) {
                let tmp = this.SORTELEMSPC[0].maxPrice
                this.SORTELEMSPC[0].maxPrice = this.SORTELEMSPC[0].minPrice
                this.SORTELEMSPC[0].minPrice = tmp
            }
            this.sortByPrice()
        },
        sortByPrice () {
            let vm = this
            this.sortedProducts = [...this.CATEGORYPC]
            this.sortedProducts = this.sortedProducts.filter(function (item) {
                return item.newPrice >= vm.SORTELEMSPC[0].minPrice && item.newPrice <= vm.SORTELEMSPC[0].maxPrice
            })
        },
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
        },
        sortProductsBySearchValue (value) {
            this.sortedProducts = [...this.CATEGORYPC]
            if (value) {
                this.sortedProducts = this.sortedProducts.filter(function (item) {
                    return item.text.toLowerCase().includes(value.toLowerCase())
                })
            } else {
                this.sortedProducts = this.CATEGORYPC
            }
        }
    },
    mounted () {
        this.GET_CATEGORYPC_FROM_API()
        .then((response) => {
          if (response.data) {
            this.sortByPrice()
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })
    },
    watch: {
        SEARCH_VALUE() {
            this.sortProductsBySearchValue(this.SEARCH_VALUE);
        }
    }

}
</script>
<style lang="scss">
.v-phones-page-wrapper {
    .category-item-container {
        display: flex;
        flex-direction: row;
        .categories {
            display: flex;
            flex-wrap: wrap;
            width: 75%;
            .v-product-item-container {
                width: 25%;
            }
        }
        .sort {
            width: 25%;
            .v-categories-sort-wrapper {
                select {
                    border: 1px solid grey;
                    width: 100%;
                    padding: 10px 5px;
                    font-size: 15px;
                    font-family: system-ui;
                }
            }
        }
    }
}
</style>