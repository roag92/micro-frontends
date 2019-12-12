import { renderVue, Vue } from 'hypernova-vue';
import Checkout from './components/checkout.vue';

renderVue('Checkout', Vue.extend(Checkout))();
