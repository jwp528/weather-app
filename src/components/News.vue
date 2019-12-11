<template>
  <v-layout column>
    <v-layout align-center justify-center row fill-height class="text-xs-center mt-5">
      <v-flex xs12 v-if="typeof headline !== 'undefined'">
        <v-img :src="headline.enclosure.url" width="500" ratio="16:9" style="margin:0 auto" />
        <h1
          class="display-3 font-weight-thin text-xs-center"
          transition="fade-transition"
        >{{headline.title}}</h1>
        <h4
          class="display-1 font-weight-thin text-xs-center"
          transition="fade-transition"
        >{{headline.content}}</h4>
      </v-flex>
      <v-flex v-else xs12>
        <v-img
          src="https://via.placeholder.it/600x400?text=Image+Here"
          width="500"
          ratio="16:9"
          style="margin:0 auto"
        />
        <h1
          class="display-3 font-weight-thin text-xs-center"
          transition="fade-transition"
        >Local developer fucks up smart mirror</h1>
        <h4
          class="display-1 font-weight-thin text-xs-center"
          transition="fade-transition"
        >Dumbass london fuck boi can't figure out why this shit isn't working</h4>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<style>
.imageClass {
  margin-top: 50px;
}
</style>
<script>
import moment from "moment";
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

const news = namespace("news/");

@Component()
export default class News extends Vue {
  @State news;
  @news.Getter headline;
  @news.Getter currentPhoto;
} // end class
</script>
