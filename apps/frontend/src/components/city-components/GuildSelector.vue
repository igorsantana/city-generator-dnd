<template>
  <div class="fields-holder">
    <div
      class="field"
      v-for="(guild, key) in guilds"
      :key="key"
      @input="selectGuild(key, !guild.generate)"
    >
      <b-checkbox v-model="guild.generate">{{ guild.name }}</b-checkbox>
    </div>
  </div>
</template>

<script>
import { getGuilds } from '../../aux/getGuilds';
import store from '../../store/index';

export default {
  name: 'GuildSelector',
  store,
  computed: {
    guilds() {
      const guilds = this.$store.state.guilds;
      const ordered = {};
      Object.keys(guilds)
        .sort()
        .map((key) => (ordered[key] = guilds[key]));
      return ordered;
    },
  },
  methods: {
    selectGuild(guild, generate) {
      const { $store } = this;
      $store.commit('updateGuild', { guild, generate });
    },
  },
};
</script>

<style></style>
