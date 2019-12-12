import axios from 'axios';

import Catalog from './catalog';
import Checkout from './checkout';

export const CatalogService = new Catalog(axios,  'http://localhost:3001/');
export const CheckoutService = new Checkout(axios,  'http://localhost:3002/');
