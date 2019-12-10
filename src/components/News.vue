<template>
  <v-layout column>
    <v-layout align-center justify-center row fill-height class="text-xs-center mt-5">
      <!-- <v-flex xs12 v-if="typeof headline !== 'undefined'"> -->
      <v-flex xs12 v-if="false">
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
      <v-flex v-if="false" xs12>
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
    <v-layout v-if="true" align-center justify-center row fill-height class="text-xs-center mt-5">
      <v-flex xs12>
        <v-img :src="currentPhoto" width="600" ratio="16:9" style="margin:0 auto" />
        <h1
          class="display-3 font-weight-thin text-xs-center"
          transition="fade-transition"
        >Happy 3rd Anniversary</h1>
        <h4 class="display-1 font-weight-thin text-xs-center" transition="fade-transition">
          It's been a few years now and growing with you on this amazing life adventure has been one of the greatest experiences i've ever had. You make me want to be a better man every single day. I love you so much Jessica Sherren.
          <v-icon>mdi-heart</v-icon>
        </h4>
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
