<template>
  <div class="fields-holder">
    <div
      class="field"
      v-for="(shop, key) in shopsModel"
      :key="key"
      @input="selectShop(key, !shop.generate)"
    >
      <b-checkbox v-model="shop.generate">{{ shop.name }}</b-checkbox>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getShops } from '../../aux/getShops';
import store from '../../store/index';

export default {
  name: 'ShopSelector',
  store,
  computed: {
    shopsModel() {
      const shops = this.$store.state.shops;
      const ordered = {};
      Object.keys(shops)
        .sort()
        .map((key) => (ordered[key] = shops[key]));
      return ordered;
    },
  },
  methods: {
    selectShop(shop, generate) {
      const { $store } = this;
      $store.commit('updateShops', { shop, generate });
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
