<template>
  <v-carousel
    hide-delimiters
    interval="30000"
    next-icon=" "
    prev-icon=" "
    :loading="true"
    height="750"
    @change="slideChange($event)"
  >
    <v-carousel-item
      :show-arrows="false"
      v-for="(headline, index) in news.data.items"
      :key="index"
      transition="fade-transition"
      reverse-transition="fade-transition"
      class="text-xs-center"
      :src="headline.enclosure.url"
    >
      <v-layout column justify-center align-center id="overlay" fill-height>
        <v-img align="center" justify="center" class="pt-5">
          <v-img class="pt-5" :src="headline.enclosure.url" max-width="600" contain />
          <h1 class="display-3 font-weight-thin">{{headline.title}}</h1>
          <h4 class="display-1 font-weight-thin">{{headline.content}}</h4>
        </v-img>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>
<style>
.v-image__image--cover {
  filter: blur(1.5rem);
}

#overlay {
  background: rgba(0, 0, 0, 0.5);
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
  @Action("news/fetch") fetch;

  slideChange(index) {
    if (index === this.news.data.items.length - 1) {
      this.fetch();
    }
  }
} // end class
</script>
