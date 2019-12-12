<template>
  <div id="ct-cart">
    <h1>My Cart</h1>
    <ul>
      <Item
        v-for="(item, index) in cart" :key="index"
        :product="item.product"
        :quantity="item.quantity"
        :subTotal="item.subTotal"
      />
    </ul>
    <p>{{ total }}</p>
  </div>
</template>

<script>
import VueCompositionApi, { onMounted, onUnmounted } from '@vue/composition-api';
import Vue from 'vue';

import Item from './item.vue';

Vue.use(VueCompositionApi);

const Checkout = {
  props: {
    cart: {
      type: Object,
      default: () => {
        return {};
      },
    },
    total: {
      type: Number,
      default: 0
    }
  },

  components: {
    Item,
  },

  setup(props) {
    const addToCart = (product, quantity) => {
      let subTotal = product.price * quantity;

      props.cart[product.slug] = {
        product: product,
        quantity: quantity,
        subTotal: subTotal
      }

      props.total += subTotal;
    };

    onMounted(() => {
      document.addEventListener('productAdded', (event) => {
        addToCart(event.detail.product, event.detail.quantity);
      });
    });

    onUnmounted(()=> {
      document.removeEventListener('productAdded');
    });
  },
};

export default Checkout;
</script>
