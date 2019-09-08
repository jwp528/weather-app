// import Vue from 'vue'
// import App from './App.vue'
// import router from './router/'
// import store from './store/'
// import './registerServiceWorker'
// import './plugins/vuetify';
// import { sync } from 'vuex-router-sync';

// Vue.config.productionTip = false;
// sync(store, router);

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue';
import './plugins/vuetify';
import { sync } from 'vuex-router-sync';
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
