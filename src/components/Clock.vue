<template>
    <v-flex xs4>
      <h1 class="display-4 font-weight-thin right pr-3">
        {{main}}
        <span
          class="display-3 font-weight-thin"
          style="position:relative;top:-40px;left:-20px;"
        >{{trail}}</span>
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

  mounted() {
    setInterval(() => {
      this.time = new moment();
      this.main = this.time.format("hh:mm");
      this.trail = this.time.format(":ss a");
    }, 1000);
  }
}
</script>