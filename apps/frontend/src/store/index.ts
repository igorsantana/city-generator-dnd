import Vue from 'vue';
import Vuex from 'vuex';
import getHash from '../aux/getHash';
import axios from 'axios';
import { getRaces, getOptions } from '../aux/raceAdjustment';
import { getShops } from '../aux/getShops';
import { getGuilds } from '../aux/getGuilds';
import { getTemples } from '../aux/getTemples';

Vue.use(Vuex);

const { post } = axios;

function filterRaces(races: any, books: string[]) {
  const racesToReturn = {};
  Object.keys(races)
    .filter((race: any) => books.includes(races[race].source))
    .forEach((race: string) => (racesToReturn[race] = races[race]));
  return racesToReturn;
}

function prepareState(state) {
  const { books, citySizeNumbers, citySize, raceOptions, ...newState } = state;
  const races = filterRaces(state.races, books);
  const toSend = {
    ...newState,
    races,
    city: {
      type: citySize,
      min: citySizeNumbers[0],
      max: citySizeNumbers[1],
    },
  };
  return toSend;
}

const store = new Vuex.Store({
  state: {
    citySize: 'settlement',
    citySizeNumbers: [],
    races: getRaces(),
    raceOptions: getOptions(),
    books: ['phb'],
    shops: getShops(),
    guilds: getGuilds(),
    temples: getTemples(),
  },
  mutations: {
    updateCityNumbers(state: any, numbers: number[]) {
      Vue.set(state, 'citySizeNumbers', numbers);
    },
    updateCitySize(state: any, cityType: string) {
      Vue.set(state, 'citySize', cityType);
    },
    updateRace(state: any, { race, value }: any) {
      const { races } = this.state;
      const updated = { ...races, [race]: { ...races[race], value } };
      Vue.set(state, 'races', updated);
    },
    updateBooks(state: any, books: string[]) {
      Vue.set(state, 'books', books);
    },
    updateShops(state: any, { shop, generate }: any) {
      const { shops } = this.state;
      const updated = { ...shops, [shop]: { ...shops[shop], generate } };
      Vue.set(state, 'shops', updated);
    },
    updateGuild(state: any, { guild, generate }: any) {
      const { guilds } = this.state;
      const updated = { ...guilds, [guild]: { ...guilds[guild], generate } };
      Vue.set(state, 'guilds', updated);
    },
    updateTemple(state: any, { temple, generate }: any) {
      const { temples } = this.state;
      const updated = {
        ...temples,
        [temple]: { ...temples[temple], generate },
      };
      Vue.set(state, 'temples', updated);
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
    async sendData({ commit, dispatch }: any) {
      const toSend = prepareState(this.state);
      try {
        await post('/data', toSend);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
