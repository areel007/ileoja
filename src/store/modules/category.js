import axios from "axios";

const state = {
    categories: [],
    selectedCategory: null,
}

const getters = {
    allCategories: (state) => state.categories,
    allSelectedCategory: (state) => state.selectedCategory
}

const actions = {
    async fetchCategories ({ commit }) {
        const response = await axios.get('https://ileapi.nogdigitals.com/api/get-category')

        console.log(response.data)

        commit('setCategories', response.data.data)
    },

    getSelectedCategory ({ commit }, selected) {
        commit('setSelectedCategory', selected)
    }
}

const mutations = {
    setCategories: (state, categories) => (state.categories = categories),
    setSelectedCategory: (state, selectedCategory) => (state.selectedCategory = selectedCategory)
}

export default {
    state,
    getters,
    actions,
    mutations
}