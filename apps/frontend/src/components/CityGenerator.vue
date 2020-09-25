<template>
  <nav class="panel">
    <p class="panel-heading">
      City Generator
    </p>
    <div class="panel-block">
      <city-type></city-type>
      <race-adjustment></race-adjustment>
      <shop-selector></shop-selector>
      <guild-selector></guild-selector>
      <temple-selector></temple-selector>
    </div>
  </nav>
</template>
<script>
import CityType from './city-components/CityType.vue';
import RaceAdjustment from './city-components/RaceAdjustment.vue';
import ShopSelector from './city-components/ShopSelector.vue';
import GuildSelector from './city-components/GuildSelector.vue';
import TempleSelector from './city-components/TempleSelector.vue';
import store from '../store/index';

const CityGenerator = {
  name: 'CityGenerator',
  components: {
    CityType,
    RaceAdjustment,
    ShopSelector,
    GuildSelector,
    TempleSelector,
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
div.panel-block {
  display: flex;
  flex-direction: column;
}
</style>
