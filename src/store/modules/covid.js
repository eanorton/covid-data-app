import api from '../../api';

const state = () => ({
  data: null,
});

// getters
const getters = {
  covidData: state => state.data,
};

// actions
const actions = {
  async getUSData({ commit }) {
    const res = await api.USData();
    const data = res.data[0];
    commit('setData', data);
  },

  async getUSDataByDate({ commit }, date) {
    const res = await api.USDataByDate(date);
    const data = res.data;
    commit('setData', data);
  },

  async getStateData({ commit }, state) {
    const res = await api.stateData(state);
    const data = res.data;
    commit('setData', data);
  }
};

// mutations
const mutations = {
  setData(state, data) {
    state.data = data
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};