<template>
  <nav class="panel">
    <p class="panel-heading">
      City Generator
    </p>
    <div class="panel-block">
      <city-type v-on:submit="submitCitySize"></city-type>
    </div>
  </nav>
</template>

<script>
import CityType from './city-components/CityType.vue';
import store from '../store/index';

const CityGenerator = {
  name: 'CityGenerator',
  components: {
    CityType,
  },
  store,
  methods: {
    submitCitySize(data) {
      const { dispatch } = this.$store;
      dispatch('city', data);
    },
  },
};

export default CityGenerator;
</script>

<style>
/* section#city-generator-card {
  margin-top: 5vh;
  background-color: #cfcfcd;
  width: 45%;
  overflow: auto;
} */
</style>
