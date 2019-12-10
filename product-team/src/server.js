import express from 'express';
import path from 'path';
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
  
    app.use(express.static(path.join(process.cwd(), 'dist')));
  
    return app;
  },
  getComponent: (name) => {
    if (name === CATALOG_COMPONENT) {
      return renderReact(name, Catalog);
    }
  
    return null;
  }
});
