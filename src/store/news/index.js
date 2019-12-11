import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
    name: "News",
    curIdx: 0,
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