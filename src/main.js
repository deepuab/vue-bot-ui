import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
import pinDirective from './shared/pin-directive';
import currentFilter from './shared/currency-filter';

Vue.config.productionTip = false;
// Making directives available globally
Vue.directive('pin', pinDirective);

// Making filters available globally
Vue.filter('currency', currentFilter);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
