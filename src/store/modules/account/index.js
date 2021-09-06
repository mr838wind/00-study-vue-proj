

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    name: 'default'
}

const getters = {

}

const mutations ={
    setName(state, name) {
        state.name = name;
    }
}

const actions = {

}



export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}
