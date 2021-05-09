import { createStore } from 'vuex'
import {
  INCREMENT_MUT,
  DECREMENT_MUT,
  INCREMENT_BY_MUT,
  DECREMENT_BY_MUT,
  INCREMENT_ACT,
  DECREMENT_ACT,
  INCREMENT_BY_ACT,
  DECREMENT_BY_ACT,
  INCREMENT_IF_ODD_ACT,
  INCREMENT_ASYNC_ACT,
  IS_ODD,
} from './def.js'




// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  [INCREMENT_MUT](state) {
    state.count++
  },
  [DECREMENT_MUT](state) {
    state.count--
  },

  // we can send more args to a mutation if needed, those args can be a premitive or an object.. 
  // for illustration purposes only: INCREMENT_BY_MUT accept an extra premitive arg, while DECREMENT_BY_MUT acceptes an object
  [INCREMENT_BY_MUT](state, n) {
    state.count += n
  },
  [DECREMENT_BY_MUT](state, payload) {
    state.count -= payload.amount
  }
}


// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  [INCREMENT_ACT]: ({ commit }) => commit(INCREMENT_MUT),
  [DECREMENT_ACT]: ({ commit }) => commit(DECREMENT_MUT),

  // we can send more args to an action if needed, those args can be a premitive or an object.. 
  // for illustration purposes only: INCREMENT_BY_ACT accept an extra premitive arg, while DECREMENT_BY_ACT acceptes an object
  [INCREMENT_BY_ACT]: ({ commit }, n) => commit(INCREMENT_BY_MUT, n),
  [DECREMENT_BY_ACT]: ({ commit }, paylaod) => commit(DECREMENT_BY_MUT, paylaod),

  [INCREMENT_IF_ODD_ACT]({ commit, getters }) {
    if (getters[IS_ODD]) {   
      commit(INCREMENT_MUT)
    }
  },

  [INCREMENT_ASYNC_ACT]({ commit }) {

    new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(INCREMENT_MUT)
        resolve()
      }, 1500)
    })

    // try {
    // } catch (error) {
    //   console.log(error);
    // }



  }
}

// getters are functions.
const getters = {
  [IS_ODD]: state => state.count % 2 !== 0
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations
})