import axios from "axios";

const state = {
    user: null,
    token: null,
}

const getters = {
    authenticated (state) {
        return state.token && state.user
    },

    user (state) {
        return state.user
    }
}

const actions = {
    async loginUser({ commit }, credentials) {
        const response = await axios.post('login', credentials)

        commit('SET_TOKEN', response.data.data['api_token'])
        commit('SET_USER', response.data.data)
    },

}

const mutations = {
    SET_TOKEN (state, token) {
        state.token = token
    },

    SET_USER (state, data) {
        state.user = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}