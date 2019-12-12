import express from "express";
import path from "path";

import { CatalogService, CheckoutService } from './services'

const PORT = 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', async (req: any, res: any) => {
  const catalog = await CatalogService.getCatalog();
  const checkout = await CheckoutService.getCheckout();

  return res.render(
    'welcome',
    {
      catalog: catalog.html || '',
      checkout: checkout.html || '',
    }
  );
});

app.listen(process.env.PORT || PORT, () => console.log(`Web Container running on port: ${PORT}`));
