export default {
    set: (state, {main, weather, wind}) => {
        // convert all weather icons to img urls
        weather = weather[0];
        weather.icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

        state.data = {
            main,
            weather,
            wind
        };
    }// end set
};