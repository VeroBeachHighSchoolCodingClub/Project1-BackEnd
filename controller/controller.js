const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('home')
    })

}