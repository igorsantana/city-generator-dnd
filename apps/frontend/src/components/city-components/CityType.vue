<template>
  <section class="panel-content-inside">
    <b-collapse
      aria-id="contentIdForA11y2"
      class="panel"
      animation="slide"
      v-model="isOpen"
    >
      <div
        v-show="done"
        slot="trigger"
        class="panel-heading"
        role="button"
        aria-controls="contentIdForA11y2"
      >
        <strong>City Size</strong>
      </div>
      <div class="panel-inside-container">
        <p>
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
          <p>
            So, you want a <b>{{ format(citySize) }}</b> ? We will generate it
            with the population between {{ locale(slider[0]) }} and
            {{ locale(slider[1]) }}, unless you want to choose the range
            yourself!
          </p>
          <b-field>
            <b-slider
              class="slider-city"
              style="width: 80%;"
              v-model="citySizeNumbers"
              :min="slider[0]"
              :max="slider[1]"
              :step="10"
            >
              <b-slider-tick :value="slider[0]">{{
                locale(slider[0])
              }}</b-slider-tick>
              <b-slider-tick :value="slider[1]">{{
                locale(slider[1])
              }}</b-slider-tick>
            </b-slider>
          </b-field>
        <b-button type="is-success" style="width: 30%; margin: 0 auto;">Ok!</b-button>
        </div>
      </div>
    </b-collapse>
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
      done: true,
      isOpen: true,
    };
  },
  computed: {
    slider() {
      const { citySize } = this;
      if (citySize === 'village') {
        return [101, 1000];
      }
      if (citySize === 'city') {
        return [1001, 50000];
      }
      if (citySize === 'metropolis') {
        return [50001, 250000];
      }
      return [10, 100];
    },
  },
  methods: {
    format(str) {
      return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
    },
    locale(number) {
      return number.toLocaleString();
    },
  },
};
</script>
<style>
section.panel-content-inside {
  width: 100%;
}
div.radio-block {
  display: flex;
  flex-direction: column;
}

div.radio-block > label {
  margin-top: 1vh;
  margin-bottom: 1vh;
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
