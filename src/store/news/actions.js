// use rss-parser to get feed
const Parser = require('rss-parser');
const parser = new Parser();

export default {
    fetch: async({commit}) => {
        try {
            let feed = await parser.parseURL('https://london.ctvnews.ca/rss/ctv-news-london-1.1073369');
            commit('set', feed);
        }catch(e) {
            console.error(e);
        }        
    }
}