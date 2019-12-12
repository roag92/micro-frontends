import express from 'express';
import path from 'path';
import hypernova from 'hypernova/server';
import { renderVue, Vue } from 'hypernova-vue/server'

import Hello from './components/Hello.vue';

const PORT = 3002;

const HELLO_COMPONENT = 'Hello';

hypernova({
  devMode: true,
  port: process.env.PORT || PORT,
  createApplication: () => {
    const app = express();

    app.use(express.static(path.join(process.cwd(), 'dist')));

    return app;
  },
  getComponent: (name) => {
    if (name === HELLO_COMPONENT) {
      return renderVue(name, Vue.extend(Hello));
    }

    return null;
  },
});
