<template>
  <div id='ct-cart'>
    <h1>My Cart</h1>
    <h1 v-if='total == 0'>Cart is empty, please add some products!</h1>
    <ul>
      <Item
        v-for='(item, index) in cart' :key='index'
        :product='item.product'
        :quantity='item.quantity'
        :subTotal='item.subTotal'
        :formatter='formatter'
      />
    </ul>
    <div v-if='total > 0' id='ct-cart-total'>
      <hr />
      <p>{{ formatter.format(total) }}</p>
    </div>
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
    },
    formatter: {
      type: Object,
      default: () => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });
      }
    }
  },

  components: {
    Item,
  },

  setup(props) {
    const addToCart = (product, quantity) => {
      let subTotal = product.price * quantity;

      let prevTotal = props.total;

      if (props.cart[product.slug]) {
        prevTotal -= props.cart[product.slug].subTotal;
      }

      props.cart[product.slug] = {
        product: product,
        quantity: quantity,
        subTotal: subTotal
      }

      props.total = prevTotal + subTotal;
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
