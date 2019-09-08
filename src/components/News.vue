<template>
    <v-layout align-center justify-center row fill-height class="mt-5 pt-5 news">
        <v-flex xs12>
            <br/>
            <br/>
            <br/>
            <h1 class="display-4 font-weight-thin text-xs-center">{{headline.title}}</h1>
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
    import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

    const news = namespace('news/');

    @Component()
    export default class News extends Vue {
        @State news;
        @news.Action fetch;
        @news.Mutation next;
        @news.Getter headline;

        async created() {
            await this.fetch();
        }

        mounted() {
            setInterval(() => {
                this.next();
            }, 30000);
        }
    }// end class
</script>