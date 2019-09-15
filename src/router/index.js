import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter: async (to, from, next) => {
                try {
                    store.dispatch('weather/fetch');
                    store.dispatch('news/fetch');

                    next();
                } catch (e) {
                    console.error(e);
                }
            }
        }
    ]
})
