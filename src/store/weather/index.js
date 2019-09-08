import actions from './actions';
import mutations from './mutations';

const state = {
    data: {
        main: {
            temp: 0
        }
    }
}

const namespaced = true;

export default {
    namespaced,
    state,
    mutations,
    actions
}