const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const chefInfo = require('./data/chefInfo.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Food is feeding')
});

app.get('/chefInfo', (req, res) => {
    res.send(chefInfo)
});

app.get('/')

app.listen(port, () => {
    console.log(`Feeding on port: ${port}`);
})