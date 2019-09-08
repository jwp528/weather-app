import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules';
import fullscreen from 'vue-fullscreen';

Vue.use(fullscreen);
Vue.use(Vuex);

export default new Vuex.Store({
    modules: modules
});
