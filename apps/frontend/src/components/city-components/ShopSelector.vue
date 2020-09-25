<template>
  <div class="fields-holder">
    <div class="field" v-for="(shop, key) in shops" :key="key">
      <b-checkbox v-model="shop.generate">{{ shop.name }}</b-checkbox>
    </div>
  </div>
</template>

<script>
import { getShops } from '../../aux/getShops';

export default {
  name: 'ShopSelector',
  computed: {
    shops: () => {
      const shops = getShops();
      const ordered = {};
      Object.keys(shops)
        .sort()
        .map((key) => (ordered[key] = shops[key]));
      return ordered;
    },
  },
};
</script>

<style>
div.fields-holder {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}
</style>
