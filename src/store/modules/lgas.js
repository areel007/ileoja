import axios from "axios"

const state = {
    lgas: []
}

const getters = {
    allLgas: (state) => state.lgas
}

const actions = {
    async fetchLgas ({ commit }, stateId) {
        const response = await axios.get(`https://ileapi.nogdigitals.com/api/get-local-gov?id=${stateId}`)

        commit('setLgas', response.data.data)
    }
}

const mutations = {
    setLgas: (state, lgas) => (state.lgas = lgas)
}

export default {
    state,
    getters,
    actions,
    mutations,
}