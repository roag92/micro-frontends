<template>
  <div id="ct-cart">
    <h1>My Cart</h1>
    <ul>
      <Item
        v-for="item in cart"
        v-bind:key="item.product.slug"
        :product="item.product"
        :quatity="item.quantity"
        :subTotal="item.subTotal"
      />
    </ul>
    <p>{{ total }}</p>
  </div>
</template>

<script>
import { value, onMounted } from 'vue';

import Item from './item.vue';

const Checkout = {
  props: {
    cart: {
      type: Array,
      default: () => {
        return [];
      },
    },
    total: Number,
  },

  components: {
    Item,
  },

  setup(props) {
    onMounted(() => {
      console.log('Checkout mounted!', props);
    });
  },

  render({ state, props, slots }) {
    // `this` points to the render context and works same as before (exposes everything)
    // `state` exposes bindings returned from `setup()` (with value wrappers unwrapped)
  },
};

export default Checkout;
</script>
