import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
    name: "News",
    data: {
        items: [
            { title: '' }
        ]
    }
}

const namespaced = true;

export default {
    namespaced,
    state,
    getters,
    mutations,
    actions
}