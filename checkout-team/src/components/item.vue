<template>
  <li id="ct-cart-item">
    <p>{{ product.name }}</p>
    <ul>
      <li>({{ quantity }})</li>
      <li><img :src='product.image' /></li>
      <li>{{ formatter.format(product.price) }}</li>
      <li>{{ formatter.format(subTotal) }}</li>
    </ul>
  </li>
</template>

<script>
import VueCompositionApi, { onMounted } from '@vue/composition-api';
import Vue from 'vue';

Vue.use(VueCompositionApi);

const Item = {
  props: {
    product: Object,
    quantity: Number,
    subTotal: Number,
    formatter: Object,
  }
};

export default Item;
</script>
