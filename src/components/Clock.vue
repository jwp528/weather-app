<template>
  <v-flex xs8 class="right">
    <h1 class="display-4 font-weight-thin right pr-3">
      {{main}}
      <span
        class="display-3 font-weight-thin"
        style="position:relative;top:-50px;left:-20px;"
      >{{trail}}</span>
      <p class="py-0 my-0 display-3 font-weight-thin">{{date}}</p>
    </h1>
  </v-flex>
</template>
<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import moment from "moment";

@Component()
export default class Clock extends Vue {
  time = new moment();
  main = "";
  trail = "";
  date = "";
  daySuffix = "";

  mounted() {
    setInterval(() => {
      this.time = new moment();
      this.main = this.time.format("h:mm");
      this.trail = this.time.format("a");
      this.date = this.time.format("ddd. MMMM Do");
    }, 1000);
  }
}
</script>
