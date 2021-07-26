import axios from "axios"

const state = {
    states: []
}

const getters = {
    allStates: (state) => state.states
}

const actions = {
    async fetchStates ({ commit }) {
        const response = await axios.get('https://ileapi.nogdigitals.com/api/get-state')

        commit('setStates', response.data.data)
    }
}

const mutations = {
    setStates: (state, states) => (state.states = states)
}

export default {
    state,
    getters,
    actions,
    mutations,
}