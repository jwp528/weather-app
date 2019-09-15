<template>
  <v-flex xs4>
    <v-layout justify-start align-start row>
      <v-flex shrink>
        <h4 class="display-1 font-weight-thin">H: {{parseInt(weather.data.main.temp_max)}}°  L: {{parseInt(weather.data.main.temp_min)}}°</h4>
      </v-flex>
    </v-layout>
    <v-layout justify-start align-start row>
      <v-flex shrink>
        <h1 class="display-4 font-weight-thin">
          {{parseInt(weather.data.main.temp)}}°
        </h1>
      </v-flex>
      <v-flex xs1>
        <v-img :src="weather.data.weather.icon" height="120" width="120" />
      </v-flex>
      <v-flex xs1 >
        <span class="display-1 font-weight-thin">{{weather.data.weather.main}}</span>
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
