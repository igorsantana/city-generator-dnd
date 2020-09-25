<template>
  <section class="panel-content-inside">
    <p class="text-inside">
      Ok, you want to build a city... What size do you want this city to be?
    </p>
    <div class="radio-block">
      <b-radio v-model="cs" name="name" native-value="settlement">
        Settlement
      </b-radio>
      <b-radio v-model="cs" name="name" native-value="village">
        Village
      </b-radio>
      <b-radio v-model="cs" name="name" native-value="city">
        City
      </b-radio>
      <b-radio v-model="cs" name="name" native-value="metropolis">
        Metropolis
      </b-radio>
    </div>
    <p class="text-inside">
      So, you want a <b>{{ format(citySize) }}</b
      >? We will generate it with the population between
      {{ locale(slider[0]) }} and {{ locale(slider[1]) }}. You can use the
      slider down below to configure it yourself.
    </p>
    <div class="slider-city">
      <b-field>
        <b-slider
          class="slider-city"
          v-model="numbers"
          :min="slider[0]"
          :max="slider[1]"
          :step="slider[2]"
          @change="updateCityNumbers"
          lazy
        >
          <b-slider-tick :value="slider[0]">{{
            locale(slider[0])
          }}</b-slider-tick>
          <b-slider-tick :value="slider[1]">{{
            locale(slider[1])
          }}</b-slider-tick>
        </b-slider>
      </b-field>
    </div>
  </section>
</template>

<script>
import store from '../../store/index';
import { mapState } from 'vuex';

export default {
  name: 'CityType',
  store,
  data() {
    return {
      cs: 'settlement',
      numbers: [],
    };
  },
  computed: {
    ...mapState(['citySize', 'citySizeNumbers']),
    slider() {
      return this.getMinMax();
    },
  },
  watch: {
    cs(value) {
      const [min, max] = this.getMinMax();
      this.$store.commit('updateCitySize', value);
      this.$store.commit('updateCityNumbers', [min, max]);
      this.numbers = [min, max];
    },
  },
  created(){
    const [min, max] = this.getMinMax();
    this.$store.commit('updateCityNumbers', [min, max]);
  },
  methods: {
    format(str) {
      return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
    },
    locale(number) {
      return number.toLocaleString();
    },
    getMinMax() {
      const { cs } = this;
      if (cs === 'village') {
        return [101, 1000, 50];
      }
      if (cs === 'city') {
        return [1001, 50000, 1000];
      }
      if (cs === 'metropolis') {
        return [50001, 250000, 10000];
      }
      return [10, 100, 5];
    },
    updateCityNumbers(value) {
      this.$store.commit('updateCityNumbers', value);
    },
  },
};
</script>
<style>
section.panel-content-inside {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

div.radio-block > label {
  margin-top: 1vh;
  margin-bottom: 1vh;
}

p.text-inside {
  width: 80%;
}

div.panel-inside-container {
  padding: 1.5%;
}
.slider-city {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2%;
  margin-top: 2%;
}
</style>
