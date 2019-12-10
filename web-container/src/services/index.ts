import axios from 'axios';

import Catalog from './catalog';

export const CatalogService = new Catalog(axios,  'http://localhost:3031/batch');
