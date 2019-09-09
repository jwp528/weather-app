<template>
  <v-layout align-center justify-center row fill-height class="mt-5 pt-5 news">
    <v-flex xs12>
      <br />
      <br />
      <br />
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
</template>
<style>
.news {
  min-height: 3in;
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