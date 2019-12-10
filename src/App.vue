<template>
  <v-app dark style="background:#000;">
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
  cursor: none;
  background: #000;
  max-width: 15in;
  margin: 0 auto;
  overflow-y: hidden;
  height: 100%;
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
