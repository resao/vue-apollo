import Vue from 'vue'
import Vuex from 'vuex'
import apolloClient from './apollo/index.js'
import { queryAllFruit } from './apollo/queries/fruit.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: {}
  },
  mutations: {
    SET_FRUITS (state, fruits) {
      state.fruits = fruits
    }
  },
  actions: {
    getFruits (context) {
      apolloClient.query({
        query: queryAllFruit
      }).then(({data}) => {
        context.commit('SET_FRUITS', data.allFruits)
      })
    }
  }
})
