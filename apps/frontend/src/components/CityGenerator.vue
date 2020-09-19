<template>
  <nav class="panel">
    <p class="panel-heading">
      City Generator
    </p>
    <div class="panel-block">
      <city-type></city-type>
    </div>
  </nav>
</template>

<script>
import CityType from "./city-components/CityType.vue";

const CityGenerator = {
  name: "CityGenerator",
  components: {
    CityType
  }
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
