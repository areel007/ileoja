import axios from "axios";

const state = {
    subcategories: [],
    isSubcategoryShow: false
}

const getters = {
    allSubcategories: (state) => state.subcategories,
    showSubcategory: (state) => state.isSubcategoryShow
}

const actions = {
    async fetchSubcategories ({ commit }, subcategoryId) {
        const response = await axios.get(`https://ileapi.nogdigitals.com/api/get-sub-category?id=${subcategoryId}`)

        console.log(response.data)

        commit('setSubcategories', response.data.data)
    },

    toggleShowSubcategory ({ commit }) {
        commit('setShowSubcategory', !state.isSubcategoryShow)
    }
}

const mutations = {
    setSubcategories: (state, subcategories) => (state.subcategories = subcategories),
    setShowSubcategory: (state, isShowSubcategoryShow) => (state.isSubcategoryShow = isShowSubcategoryShow)
}

export default {
    state,
    getters,
    actions,
    mutations,
}