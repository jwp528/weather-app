<template>
  <v-app dark>
    <!-- <fullscreen ref="fullscreen"> -->
      <v-content>
        <router-view></router-view>
      </v-content>
    <!-- </fullscreen> -->
  </v-app>
</template>
<style>
body,
html {
  background: #303030;
  max-width: 15in;
  margin:0 auto;
  overflow-y: hidden;
}
</style>


<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class App extends Vue {
  name = "App";

  mounted() {
    // this.$refs["fullscreen"].toggle();
  }
}
</script>
