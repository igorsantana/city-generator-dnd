<template>
  <section class="panel-content-inside">
    <p class="text-inside">
      Ok, you want to build a city... What size do you want this city to be?
    </p>
    <div class="radio-block">
      <b-radio v-model="citySize" name="name" native-value="settlement">
        Settlement
      </b-radio>
      <b-radio v-model="citySize" name="name" native-value="village">
        Village
      </b-radio>
      <b-radio v-model="citySize" name="name" native-value="city">
        City
      </b-radio>
      <b-radio v-model="citySize" name="name" native-value="metropolis">
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
          v-model="citySizeNumbers"
          :min="slider[0]"
          :max="slider[1]"
          :step="ticks"
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
export default {
  name: 'CityType',
  data() {
    return {
      citySize: 'settlement',
      minCity: 0,
      citySizeNumbers: [],
      maxCity: 999,
      done: false,
      isOpen: true,
    };
  },
  computed: {
    slider() {
      const slider = this.getMinMax().slice(0, 2);
      return slider;
    },
    ticks() {
      const [, , tick] = this.getMinMax();
      return tick;
    },
  },
  watch: {
    citySize(value) {
      this.citySizeNumbers = this.getMinMax();
    },
  },
  methods: {
    format(str) {
      return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
    },
    locale(number) {
      return number.toLocaleString();
    },
    getMinMax(cityType) {
      const { citySize } = this;
      if (citySize === 'village') {
        return [101, 1000, 50];
      }
      if (citySize === 'city') {
        return [1001, 50000, 1000];
      }
      if (citySize === 'metropolis') {
        return [50001, 250000, 10000];
      }
      return [10, 100, 5];
    },
    submitCity() {
      const { citySize, citySizeNumbers } = this;
      const [min, max] = citySizeNumbers;
      this.$emit('submit', { type: citySize, min, max });
      this.done = true;
      this.isOpen = false;
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
