<template>
  <v-layout column>
    <v-layout align-center justify-center row fill-height class="text-xs-center">
      <v-flex xs12>
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
    </v-layout>
  </v-layout>
</template>
<style>
.imageClass {
  margin-top: 50px;
}
</style>
<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

const news = namespace("news/");

@Component()
export default class News extends Vue {
  @State news;
  @news.Getter headline;
} // end class
</script>
