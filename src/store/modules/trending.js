import axios from "axios";

const state = {
    trendingProducts: []
}

const getters = {
    allTrendingProducts: (state) => state.trendingProducts
}

const actions = {
    async fetchTrendingProduct ({ commit }) {
        const response = await axios.get('https://ileapi.nogdigitals.com/api/get-trending')

        commit('setTrendingProduct', response.data.data)
    }
}

const mutations = {
    setTrendingProduct: (state, trendingProducts) => (state.trendingProducts = trendingProducts)
}

export default {
    state,
    getters,
    actions,
    mutations,
}