export default {
    set: (state, {main, weather, wind}) => {
        // convert all weather icons to img urls
        for(const w of weather) {
            w.icon = `http://openweathermap.org/img/wn/${w.icon}@2x.png`;
        }

        state.data = {
            main,
            weather,
            wind
        };
    }// end set
};