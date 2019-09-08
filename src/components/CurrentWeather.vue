<template>
    <v-flex xs-4>
        <p class="display-1 font-weight-thin">
            <v-img :src="weather.data.weather[0].icon" height="120" width="120" class="pa-0 ma-0" />
            {{weather.data.weather[0].main}}
        </p>
        <h1 class="display-4 font-weight-thin left pr-3">
            {{parseInt(weather.data.main.temp)}}
            <span
            class="display-3 font-weight-thin"
            style="position:relative;top:-40px;left:-20px;"
            >°</span>
            C
        </h1>
    </v-flex>
</template>
<script>
    import { Vue, Component, Prop } from "vue-property-decorator";
    import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

    const weather = namespace('weather/');

    @Component()
    export default class CurrentWeather extends Vue {
        @State weather;
        @weather.Action fetch;

        async setup() {
            await this.fetch();
        }

        mounted() {
            this.setup();
        }
    }
</script>