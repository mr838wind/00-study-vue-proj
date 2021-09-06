
const state = {
    name: 'default'
}

const mutations ={
    setName(state, name) {
        state.name = name;
    }
}

const getters = {

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
