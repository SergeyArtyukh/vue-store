import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // -------CATEGORIES ARRAYS--------START
    categoryPC: [],
    homeTech: [],
    games: [],
    TV: [],
    photo: [],
    cart: [],
    kitchen: [],
    beauty: [],
    // -------CATEGORIES ARRAYS--------END
    // -------MAIN ARRAYS---------START
    favorite: [],
    comparison: [],
    products: [],
    // -------MAIN ARRAYS---------END
    // ---------SIDEBAR CATEGORIES ARRAYS--------START
    sortElemsPC: [],
    // ---------SIDEBAR CATEGORIES ARRAYS--------END
    // ---------SEARCH NAVBAR---------START
    searchValue: '',
    // ---------SEARCH NAVBAR---------END
  },
  mutations: {
    SET_SEARCH_VALUE_TO_STATE: (state, value) => {
      state.searchValue = value;
    },
    SET_SORTELEMSPC_TO_STATE: (state, sortElemsPC) => {
      state.sortElemsPC = sortElemsPC;
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CATEGORYPC_TO_STATE: (state, categoryPC) => {
      state.categoryPC = categoryPC;
    },
    SET_HOMETECH_TO_STATE: (state, homeTech) => {
      state.homeTech = homeTech;
    },
    SET_GAMES_TO_STATE: (state, games) => {
      state.games = games;
    },
    SET_TV_TO_STATE: (state, TV) => {
      state.TV = TV;
    },
    SET_PHOTO_TO_STATE(state, photo) {
      state.photo = photo;
    },
    SET_KITCHEN_TO_STATE(state, kitchen) {
      state.kitchen = kitchen;
    },
    SET_BEAUTY_TO_STATE(state, beauty) {
      state.beauty = beauty;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
          localStorage.setItem('cart', JSON.stringify(state.cart));
        }
      } else {
        state.cart.push(product)
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    SET_FAVORITE: (state, product) => {
        if (state.favorite.length) {
          let isProductFavorite = false;
          state.favorite.map(function (item) {
            if (item.id === product.id) {
              isProductFavorite = true;
              state.favorite.splice(product.id, 1)
              product.isFavorite = false
              console.log(product.id +'1 колонка');
              // if (product.isFavorite == true) {
              //   state.favorite.splice(product, 1)
              //   product.isFavorite = !product.isFavorite
              //   console.log(product.id +'1 колонка');
              // }
            }
          })
          if (isProductFavorite == false) {
            state.favorite.push(product)
            // state.favorite.splice(product, 1)
            product.isFavorite = true;
            localStorage.setItem('favorite', JSON.stringify(state.favorite));
          }
        } else {
          state.favorite.push(product)
          product.isFavorite = !product.isFavorite;
          localStorage.setItem('favorite', JSON.stringify(state.favorite));
        }
    },
    SET_COMPARISON: (state, product) => {
      if (state.comparison.length) {
        let isProductCompare = false;
        state.comparison.map(function (item) {
          if (item.id === product.id) {
            isProductCompare = true;
            product.isCompare = !product.isCompare;
            state.comparison.splice(product.id, 1)
            console.log(product.id +'1 колонка');
          }
        })
        if (!isProductCompare) {
          state.comparison.push(product)
          product.isCompare = true;
          localStorage.setItem('comparison', JSON.stringify(state.comparison));
        }
      } else {
        state.comparison.push(product)
        product.isCompare = !product.isCompare;
        localStorage.setItem('comparison', JSON.stringify(state.comparison));
      }
    },
    // SET_FAVORITE: (state, product) => {
    //   state.favorite.push(product)
    // },
    SPLICE_CART: (state, index) => {
      state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    SPLICE_FAVORITE: (state, index) => {
      state.favorite.splice(index, 1)
      localStorage.setItem('favorite', JSON.stringify(state.favorite));
    },
    SPLICE_COMPARISON: (state, index) => {
      state.comparison.splice(index, 1)
      localStorage.setItem('comparison', JSON.stringify(state.comparison));
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
      // localStorage.setItem('cart', JSON.stringify(state.cart[index].quantity));
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
        // localStorage.setItem('cart', JSON.stringify(state.cart[index].quantity));
      }
    }
  },
  actions: {
    ADD_SEARCH_VALUE({commit}, value) {
      commit('SET_SEARCH_VALUE_TO_STATE', value);
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    },
    ADD_TO_FAVORITE({commit}, product) {
      commit('SET_FAVORITE', product)
    },
    ADD_TO_COMPARISON({commit}, product) {
      commit('SET_COMPARISON', product)
    },
    REMOVE_FROM_CART({commit}, index) {
      commit('SPLICE_CART', index);
    },
    REMOVE_FROM_FAVORITE({commit}, product) {
      commit('SPLICE_FAVORITE', product);
    },
    REMOVE_FROM_COMPARISON({commit}, product) {
      commit('SPLICE_COMPARISON', product)
    },
    DECREMENT_CART_QUANTITY({commit}, index) {
      commit('DECREMENT', index);
    },
    INCREMENT_CART_QUANTITY({commit}, index) {
      commit('INCREMENT', index);
    },
    GET_PRODUCTS_FROM_API({commit}){
      return axios ('http://localhost:3000/sliderElems',{
        method:"GET"
      })
      .then ((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    },
    GET_CATEGORYPC_FROM_API({commit}){
      return axios ('http://localhost:3000/categoryPCs',{
        method:"GET"
      })
      .then((categoryPC) => {
        commit('SET_CATEGORYPC_TO_STATE', categoryPC.data);
        return categoryPC
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    },
    GET_HOMETECH_FROM_API({commit}){
      return axios ('http://localhost:3000/homeTech',{
        method:"GET"
      })
      .then((homeTech) => {
        commit('SET_HOMETECH_TO_STATE', homeTech.data);
        return homeTech
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    },
    GET_GAMES_FROM_API({commit}){
      return axios ('http://localhost:3000/games',{
        method:"GET"
      })
      .then((games) => {
        commit('SET_GAMES_TO_STATE', games.data);
        return games
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    },
    GET_TV_FROM_API({commit}){
      return axios ('http://localhost:3000/TV',{
        method:"GET"
      })
      .then((TV) => {
        commit('SET_TV_TO_STATE', TV.data);
        return TV
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    },
    GET_PHOTO_FROM_API({commit}){
      return axios ('http://localhost:3000/photo',{
        method:"GET"
      })
      .then((PHOTO) => {
        commit('SET_PHOTO_TO_STATE', PHOTO.data);
        return PHOTO
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    },
    GET_KITCHEN_FROM_API({commit}){
      return axios ('http://localhost:3000/kitchen',{
        method:"GET"
      })
      .then((KITCHEN) => {
        commit('SET_KITCHEN_TO_STATE', KITCHEN.data);
        return KITCHEN
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    },
    GET_BEAUTY_FROM_API({commit}){
      return axios ('http://localhost:3000/beauty',{
        method:"GET"
      })
      .then((BEAUTY) => {
        commit('SET_BEAUTY_TO_STATE', BEAUTY.data);
        return BEAUTY
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    },
    GET_SORTELEMSPC_FROM_API({commit}){
      return axios ('http://localhost:3000/sortElemsPC',{
        method:"GET"
      })
      .then((SORTELEMSPC) => {
        commit('SET_SORTELEMSPC_TO_STATE', SORTELEMSPC.data);
        return SORTELEMSPC
      })
      .catch ((error) => {
        console.log(error);
        return error
      })
    }
  },
  getters: {
    SEARCH_VALUE(state) {
      return state.searchValue;
    },
    SORTELEMSPC(state) {
      return state.sortElemsPC;
    },
    PRODUCTS(state) {
      return state.products;
    },
    CATEGORYPC(state) {
      return state.categoryPC;
    },
    HOMETECH(state) {
      return state.homeTech;
    },
    GAMES(state) {
      return state.games;
    },
    TV(state) {
      return state.TV;
    },
    PHOTO(state) {
      return state.photo;
    },
    KITCHEN(state) {
      return state.kitchen;
    },
    BEAUTY(state) {
      return state.beauty;
    },
    CART(state) {
      let cart = localStorage.getItem('cart')
      if(cart) {
       return state.cart = JSON.parse(cart)
      } else {
        cart = null;
      }
    },
    FAVORITE(state) {
      let favorite = localStorage.getItem('favorite')
      if(favorite) {
       return state.favorite = JSON.parse(favorite)
      } else {
        favorite  = null;
      }
    },
    COMPARISON(state) {
      let comparison = localStorage.getItem('comparison')
      if(comparison) {
       return state.comparison = JSON.parse(comparison)
      } else {
        comparison = null;
      }
    },
    TOTAL(state) {
      return state.cart.reduce((carry, product) => {
          carry += +product.newPrice * +product.quantity;
          return carry + '.00 Ꝑ';
      }, 0);
    },
  },
  modules: {
  }
})
 export default store;
