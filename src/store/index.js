import Vue from 'vue'
import Vuex from 'vuex'
import fruit from './modules/fruit/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    fruit
  }
})
