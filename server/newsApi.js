const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e13b1f2845a449fcbaf267aac034523b');

// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them


const getCryptoHeadlines = () => newsapi.v2.topHeadlines({
    q: 'trump',
    category: 'politics',
    language: 'en',
    country: 'us'
}).then(response => {
    response.json();
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
});
module.exports = { getCryptoHeadlines };