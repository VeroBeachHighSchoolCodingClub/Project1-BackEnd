require('./config/config')

const express = require('express');
const app = express();
const hbs = require('hbs');
const _ = require('lodash');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongodb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

hbs.registerPartials(_dirname + '/views/partials')
app.set('view engine', 'hbs');

const port = process.env.PORT;

app.use(express.static('./public'));

AbortController(app);

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
})