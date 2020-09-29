import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    changeloading(state,type){
      state.loading = type;
    }
  },
  actions: {
  },
  modules: {
  }
})
