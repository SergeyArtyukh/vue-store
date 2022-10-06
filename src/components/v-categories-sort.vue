<template>
    <div class="v-categories-sort-wrapper">
        <select name="" id="">
            <option 
            v-for="(sortOption, index) in sortOptions"
            :key="index"
            @click="sortByPrice"
            >{{sortOption.title}}</option>
        </select>
       
        <div class="v-sort-container">
            <ul>
                <li 
                v-for="(sortElem, index) in SORTELEMSPC"
                :key="index"
                class="main-li"
                >
                <div class="sort-elem-title-container">
                    <div 
                    @click="SORTELEMSPC[index].isSortActive = !SORTELEMSPC[index].isSortActive"
                    class="title-box">
                        <p>{{sortElem.title}}</p>
                        <font-awesome-icon class="mr-10" :icon="sortElemIcon"/>
                    </div>
                    <div v-if="SORTELEMSPC[index].isSortActive" class="sort-elem-extra-container">
                        <ul>
                            <li v-if="SORTELEMSPC[index].isPrice">
                                <div class="price-container">
                                    <input type="number" :value="SORTELEMSPC[index].minPrice">
                                    <input type="number" :value="SORTELEMSPC[index].maxPrice">
                                </div>
                                <div class="ranger-slider">
                                    <input 
                                    type="range" 
                                    min="0" 
                                    max="100000" 
                                    step="100" 
                                    v-model.number="SORTELEMSPC[index].minPrice"
                                    @change="setRangerSlider(index)"
                                    >
                                    <input 
                                    type="range" 
                                    min="0" 
                                    max="100000" 
                                    step="100" 
                                    v-model.number="SORTELEMSPC[index].maxPrice"
                                    @change="setRangerSlider(index)"
                                    >
                                </div>
                            </li>
                            <li
                            v-for="(sortElemList, index) in sortElem.sortElemLists"
                            :key="index"
                            :class="{ active : SORTELEMSPC[index].isSortActive}"
                            >
                                <input type="checkbox"/>
                                <span>{{sortElemList.title}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    mounted () {
        this.GET_SORTELEMSPC_FROM_API();
    },
    computed: {
        ...mapGetters ([
            'SORTELEMSPC',
            'CATEGORYPC'
        ]),
    },
    methods: {
        ...mapActions ([
            'GET_SORTELEMSPC_FROM_API',
        ]),
        setRangerSlider() {
            this.$emit('setRangerSlider', this.setRangerSlider)
        },
        sortByPrice () {
            this.CATEGORYPC.sort((a,b) => {
                return a.newPrice - b.newPrice;
            })
        }
    },
    data () {
        return {
            sortElemIcon: 'angle-down',
            sortOptions: [
                {
                    title:  'Сортировка'
                },
                {
                    title:  'По возрастанию цены',
                    sortTitle: 'HighToLow'
                },
                {
                    title:  'По убыванию цены'
                },
                {
                    title:  'Сначал новые'
                },
                {
                    title:  'По названию'
                }

            ],
            
        }
    }
}
</script>
<style lang="scss">
.v-categories-sort-wrapper {
    .v-sort-container {
        ul {
            padding: 0;
            list-style: none;
            .main-li {
                padding: 10px 0;
                .sort-elem-title-container {
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-content: center;
                    border-bottom: 1px solid #ededed;
                    padding-bottom: 20px;
                    .title-box {
                        display: flex;
                        justify-content: space-between;
                        p {
                            margin: 0;
                            font-weight: bold;
                        }
                    }
                    .sort-elem-extra-container {
                        transition: all 1s ease;
                        .price-container {
                            display: flex;
                            justify-content: space-between;
                        }
                        .ranger-slider {
                            height: 30px;
                            width: 100%;
                            // margin: 0;
                            text-align: center;
                            position: relative;
                            input {
                                width: 100%;
                            }
                        }
                        .ranger-slider svg, .ranger-slider input[type=range] {
                            position: absolute;
                            left: 0;
                            bottom: 0;
                        }
                        input[type=range]::-webkit-slider-thumb {
                            z-index: 2;
                            position: relative;
                            top: 2px;
                            margin-top: -7px;
                            background: green;
                        }
                        input[type=range] {
                            -webkit-appearance: none;
                        }
                        input[type=range]::-webkit-slider-runnable-track {
                            background: #EDEDED;
                            border-radius: 5px;
                            height: 5px;
                        }
                    }
            }
            }
        }
    }
}
</style>