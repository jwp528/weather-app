import axios from 'axios';
export default {
    fetch: async ({ commit }) => {
        try {
            let response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,ca&appid=ecda124003b79d7d5c9fe97c3a6d731d&units=metric');
            commit('set', response.data);

            setTimeout(async () => {
                response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,ca&appid=ecda124003b79d7d5c9fe97c3a6d731d&units=metric');
                commit('set', response.data);
            }, 60000);// Every minute
        } catch (e) {
            console.error(e);
        }
    }
}