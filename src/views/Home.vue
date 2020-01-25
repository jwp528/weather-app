<template>
  <div>
    <v-container fluid>
      <v-layout column>
        <v-flex xs12>
          <v-layout align-start justify-content-start row class="mb-5">
            <CurrentWeather />
            <Clock />
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <News />
  </div>
</template>

<script>
import Clock from "../components/Clock";
import News from "../components/News";
import CurrentWeather from "../components/CurrentWeather";

import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {
    Clock,
    News,
    CurrentWeather
  }
})
export default class Home extends Vue {
  mounted() {}
}
</script>
