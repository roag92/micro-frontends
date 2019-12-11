import express from 'express';
import path from 'path';
import fs from 'fs';
import hypernova from 'hypernova/server';
import { renderReact } from 'hypernova-react';

import Catalog from './components/Catalog';

const PORT = 3031;

const CATALOG_COMPONENT = 'Catalog';

hypernova({
  devMode: true,
  port: process.env.PORT || PORT,
  createApplication: () => {
    const app = express();

    const products = JSON.parse(fs.readFileSync('./data/products.json'));

    app.use(express.static(path.join(process.cwd(), 'dist')));

    app.get('/getProducts', (req, res) => {
      res.json(products);
    });

    return app;
  },
  getComponent: async name => {
    if (name === CATALOG_COMPONENT) {
      return renderReact(name, Catalog);
    }

    return null;
  },
});
