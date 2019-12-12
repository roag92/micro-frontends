<template>
  <li>
    <p>{{ product.name }}</p>
    <label>{{ quantity }}</label> X <label>{{ product.price }}</label> =
    <label>{{ subTotal }}</label>
  </li>
</template>

<script>
import VueCompositionApi, { onMounted } from '@vue/composition-api';
import Vue from 'vue';

Vue.use(VueCompositionApi);

function Product(slug, name, price, image) {
  this.slug = slug;
  this.name = name;
  this.price = price;
  this.image = image;
}

const Item = {
  props: {
    product: Object,
    quantity: Number,
    subTotal: Number,
  }
};

export default Item;
</script>
