import api from '../../api';

const state = () => ({
  data: null,
  initData: [],
});

const getters = {
  covidData: state => state.data,
  initData: state => state.initData,
};

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

  async getUSDataMultipleDates({ commit }, dates) {
    const res = await Promise.all(api.USDataMultipleDates(dates));
    const data = res.map(resData => resData.data);
    commit('setMultipleDateData', data);
  },

  async getStateData({ commit }, state) {
    const res = await api.stateData(state);
    const data = res.data;
    commit('setData', data);
  }
};

const mutations = {
  setData(state, data) {
    state.data = data
  },

  setMultipleDateData(state, data) {
    state.initData = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};