<template>
  <section class="panel-content-inside">
    <p>
      Ok, you want to build a city... What size do you want this city to be?
    </p>
    <div class="block">
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
    {{ citySize }}
    <b-field label="Simple">
      <b-slider
        v-model="citySizeNumbers"
        :min="slider.min"
        :max="slider.max"
      ></b-slider>
    </b-field>
  </section>
</template>

<script>
export default {
  name: "CityType",
  data() {
    return {
      citySize: "settlement",
      citySizeNumbers: 0,
      minCity: 0,
      maxCity: 999
    };
  },
  computed: {
    slider() {
      const { citySize } = this;
      if (citySize === "village") {
        return { min: 101, max: 1000 };
      }
      if (citySize === "city") {
        return { min: 1001, max: 50000 };
      }
      if (citySize === "metropolis") {
        return { min: 50001, max: 250000 };
      }
      return { min: 10, max: 100 };
    }
  }
};
</script>
<style>
section.panel-content-inside {
  width: 100%;
}
</style>
