<template>
  <div>
    <v-img align="center" :src="headline.enclosure.url" width="100%" height="500" class="pt-5">
      <v-img class="mt-5" :src="headline.enclosure.url" max-width="600" contain />
    </v-img>
    <h1
      class="display-3 font-weight-thin text-xs-center"
      transition="fade-transition"
    >{{headline.title}}</h1>
    <h4
      class="display-1 font-weight-thin text-xs-center"
      transition="fade-transition"
    >{{headline.content}}</h4>
  </div>
</template>
<style>
.v-image__image--cover {
  filter: blur(1.5rem);
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
