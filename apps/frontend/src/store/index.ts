import Vue from 'vue';
import Vuex from 'vuex';
import getHash from '../aux/getHash';
import axios from 'axios';
import { checkServerIdentity } from 'tls';
import { getRaces, getOptions } from '../aux/raceAdjustment';
Vue.use(Vuex);

const { post } = axios;

const store = new Vuex.Store({
  state: {
    citySize: 'settlement',
    citySizeNumbers: [],
    races: getRaces(),
    raceOptions: getOptions()
  },
  mutations: {
    updateCityNumbers(state: any, numbers: number[]) {
      Vue.set(state, 'citySizeNumbers', numbers);
    },
    updateCitySize(state: any, cityType: string) {
      Vue.set(state, 'citySize', cityType);
    },
  },
  actions: {
    async sendHash() {
      const hash = getHash();
      try {
        await post('/hash', { hash });
      } catch (e) {
        console.log(e);
      }
    },
    async city({ commit, dispatch }: any, data: any) {
      try {
        await post('/city', data);
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export default store;
