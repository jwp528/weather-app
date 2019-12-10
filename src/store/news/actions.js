// use rss-parser to get feed
const moment = require('moment');
const Parser = require('rss-parser');
const parser = new Parser();

export default {
    fetch: async ({ state, commit }) => {
        try {
            let feed = await parser.parseURL('https://london.ctvnews.ca/rss/ctv-news-london-1.1073369');
            commit('set', feed);

            //set interval to loop through news feed
            setInterval(async () => {
                // check for new info everytime we finish running through the data
                if (state.curIdx == feed.items.length - 1) {
                    feed = await parser.parseURL('https://london.ctvnews.ca/rss/ctv-news-london-1.1073369');
                    commit('set', feed);
                }

                commit('next');
            }, process.env.VUE_APP_NEWSFEED_SCROLL_TIME);

            const today = moment();
            const anniversary = moment(`12/10/${today.format("YYYY")}`);
            const isAnniversary = today.isSame(anniversary);

            setInterval(() => {
                commit('rotate');
            }, 10000)
        } catch (e) {
            window.location.reload();
        }
    }
}