<template>
  <v-flex xs4>
    <v-layout justify-start align-start row>
      <v-flex shrink>
        <h1 class="display-4 font-weight-thin left pr-3">
          {{parseInt(weather.data.main.temp)}}°C
        </h1>
      </v-flex>
      <v-flex xs1>
        <v-img :src="weather.data.weather[0].icon" height="120" width="120" />
      </v-flex>
      <v-flex xs1 >
        <span class="display-1 font-weight-thin">{{weather.data.weather[0].main}}</span>
      </v-flex>
    </v-layout>
  </v-flex>
</template>
<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

const weather = namespace("weather/");

@Component()
export default class CurrentWeather extends Vue {
  @State weather;
}
</script>