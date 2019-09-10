import Vue from 'vue';
import './plugins/vuetify';
import { sync } from 'vuex-router-sync';
import './registerServiceWorker'
import router from './router/';
import store from './store/';
import App from './App.vue';

Vue.config.productionTip = false;
sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
