<template>
  <section class="panel-content-inside">
    <p class="text-inside">
      Now, let's adjust the race distribution. You can remove the races from
      <b> Elemental Evil Player's Companion (EEPC)</b> and
      <b> Volo's Guide to Monsters (VGtM)</b> if you want to!
    </p>
    <div class="book-selection">
      <b-checkbox v-model="books" native-value="phb" disabled>
        PHB
      </b-checkbox>
      <b-checkbox v-model="books" native-value="eepc">
        EEPC
      </b-checkbox>
      <b-checkbox v-model="books" native-value="vgtm">
        VGtM
      </b-checkbox>
    </div>
    <div class="select-holders">
      <b-field
        :label="race.display"
        v-for="(race, key) in races"
        :key="key"
        v-show="showRaceSelector(race)"
      >
        <b-select v-model="race.value" required class="smaller-font">
          <option
            v-for="option in raceOptions"
            :value="option.value"
            :key="option.name"
          >
            {{ option.name }}
          </option>
        </b-select>
      </b-field>
    </div>
  </section>
</template>

<script>
import store from '../../store/index';
import { mapState } from 'vuex';

export default {
  name: 'RaceAdjustment',
  data() {
    return {
      books: ['phb'],
    };
  },
  store,
  computed: {
    ...mapState(['races', 'raceOptions']),
  },
  methods: {
    showRaceSelector(race) {
      const hasInBooks = this.books.filter((book) => book === race.source);
      return hasInBooks.length > 0;
    },
    changedRaceValue(race) {
      console.log(race);
    },
  },
  watch: {
    races() {
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaa');
    },
  },
};
</script>

<style>
div.select-holders {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

div.smaller-font {
  font-size: smaller !important;
}

div.field {
  margin-left: 2%;
}
</style>
