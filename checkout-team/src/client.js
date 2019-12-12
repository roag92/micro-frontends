import { renderVue, Vue } from 'hypernova-vue';
import Hello from './components/Hello.vue';

renderVue('Hello', Vue.extend(Hello))();
