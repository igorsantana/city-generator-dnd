<template>
  <div class="fields-holder">
    <div class="field" v-for="(temple, key) in temples" :key="key">
      <b-checkbox v-model="temple.generate">{{ temple.name }}</b-checkbox>
    </div>
  </div>
</template>

<script>
import { getTemples } from '../../aux/getTemples.ts';

export default {
  name: 'TempleSelector',
  computed: {
    temples() {
      const temples = getTemples();
      const ordered = {};
      Object.keys(temples)
        .sort()
        .map((key) => (ordered[key] = temples[key]));
      return ordered;
    },
  },
};
</script>

<style></style>
