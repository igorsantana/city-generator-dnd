import Vue from 'vue';
import Vuex from 'vuex';
import getHash from '../aux/getHash';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions: {
    async sendHash() {
      const hash = getHash();
      const { post } = axios;
      try {
        await post('/hash', { hash });
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export default store;
