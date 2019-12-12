<template>
  <li>
    <p>{{ product.name }}</p>
    <label>{{ quatity }}</label> X <label>{{ product.price }}</label> =
    <label>{{ subTotal }}</label>
  </li>
</template>

<script>
import { value, onMounted } from 'vue';

function Product(slug, name, price, image) {
  this.slug = slug;
  this.name = name;
  this.price = price;
  this.image = image;
}

const Item = {
  props: {
    product: Product,
    quantity: Number,
    subTotal: Number,
  },

  setup(props) {
    onMounted(() => {
      console.log('Item mounted!', props);
    });
  },

  render({ state, props, slots }) {
    // `this` points to the render context and works same as before (exposes everything)
    // `state` exposes bindings returned from `setup()` (with value wrappers unwrapped)
  },
};

export default Item;
</script>
