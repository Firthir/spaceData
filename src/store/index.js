import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'https://api.spacexdata.com/v4/launches/latest'
const headers = { accept: 'application/json' }

export default new Vuex.Store({
  state: {
    currentLaunch: {},
    allLaunches: [],
    cores: []
  },
  getters: {
    getCurrentLaunch: state => state.currentLaunch,
    getAllLaunches: state => state.allLaunches,
    getCores: state => state.cores
  },
  mutations: {
    setCurrentLaunch (state, payload) {
      state.currentLaunch = payload
      state.allLaunches.push(payload)
      state.cores.push(payload.cores[0])
    }
  },
  actions: {
    fetchCurrentLaunch ({ commit }) {
      fetch(url, { headers })
        .then(res => res.json())
        .then(data => {
          commit('setCurrentLaunch', data)
        })
    }
  },
  modules: {
  }
})
