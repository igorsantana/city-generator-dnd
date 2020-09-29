<template>
  <div class="fields-holder">
    <div
      class="field"
      v-for="(temple, key) in temples"
      :key="key"
      @input="selectTemple(key, !temple.generate)"
    >
      <b-checkbox v-model="temple.generate">{{ temple.name }}</b-checkbox>
    </div>
  </div>
</template>

<script>
import { getTemples } from '../../aux/getTemples.ts';
import store from '../../store/index';

export default {
  name: 'TempleSelector',
  store,
  computed: {
    temples() {
      const temples = this.$store.state.temples;
      const ordered = {};
      Object.keys(temples)
        .sort()
        .map((key) => (ordered[key] = temples[key]));
      return ordered;
    },
  },
  methods: {
    selectTemple(temple, generate) {
      const { $store } = this;
      $store.commit('updateTemple', { temple, generate });
    },
  },
};
</script>

<style></style>
