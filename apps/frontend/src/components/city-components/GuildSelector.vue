<template>
  <div class="fields-holder">
    <div class="field" v-for="(guild, key) in guilds" :key="key">
      <b-checkbox v-model="guild.generate">{{ guild.name }}</b-checkbox>
    </div>
  </div>
</template>

<script>
import { getGuilds } from '../../aux/getGuilds';

export default {
  name: 'GuildSelector',
  computed: {
    guilds: () => {
      const guilds = getGuilds();
      const ordered = {};
      Object.keys(guilds)
        .sort()
        .map((key) => (ordered[key] = guilds[key]));
      return ordered;
    },
  },
};
</script>

<style></style>
