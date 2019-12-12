import express from 'express';
import path from 'path';
import hypernova from 'hypernova/server';
import { renderVue, Vue } from 'hypernova-vue/server';

import Checkout from './components/checkout.vue';

const PORT = 3002;

const CHECKOUT_COMPONENT = 'Checkout';

hypernova({
  devMode: true,
  port: process.env.PORT || PORT,
  createApplication: () => {
    const app = express();

    app.use(express.static(path.join(process.cwd(), 'dist')));

    return app;
  },
  getComponent: name => {
    if (name === CHECKOUT_COMPONENT) {
      return renderVue(name, Vue.extend(Checkout));
    }

    return null;
  },
});
