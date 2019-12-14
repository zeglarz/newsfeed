const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const newsApi = require('./newsApi');

let news = newsApi.getCryptoHeadlines();

app.get('/', (req, res) => {
    news.then(response => {
        return res.json(response.articles); // res.send((response.articles) żeby wyświetlić w konsoli
    });
});

const runServer = (port) => {
    console.log(`Server is running on port ${port}`);
    app.listen(port);

};

module.exports = {runServer}; //strukturyzacja, czyli przeciwieństwo destrukturyzacji

