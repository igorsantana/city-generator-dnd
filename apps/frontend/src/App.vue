<template>
  <div id="app">
    <b-navbar :centered="true" :shadow="true">
      <template slot="start">
        <b-navbar-item href="#">
          City Generator
        </b-navbar-item>
      </template>
    </b-navbar>
    <div id="content">
      <city-generator> </city-generator>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import CityGenerator from './components/CityGenerator';
import store from './store/index';

Vue.use(Buefy);

export default {
  name: 'App',
  store,
  components: {
    CityGenerator,
  },
  created() {
    const { dispatch } = this.$store;
    dispatch('sendHash');
  },
};
</script>

<style>
div#content {
  display: flex;
  justify-content: space-around;
  overflow: auto;
  height: 100vh;
  margin-top: 0.5%;
}
nav.panel {
  width: 60%;
}

nav.panel > .panel-heading {
  text-align: center;
}
</style>
