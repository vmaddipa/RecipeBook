const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const debug = require('debug')('node-angular');
const signupRoute = require('./routes/signUp');

// Mongoose Connection
const mongoose = require('mongoose');
const mongoDbUrl = `mongodb+srv://mongo-admin:${process.env.MONGO_DB_PWD}@recipe-book-cluster-apoft.mongodb.net/app-recipe?retryWrites=true&w=majority`;
debug(mongoDbUrl);
mongoose
    .connect(mongoDbUrl, { useNewUrlParser: true })
    .then(() => {
        debug('Connected to database');
    })
    .catch(error => {
        debug(error);
    });
//Adding body parser middleware to handle json body in post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setting Origins, Headers and Methods allowed
app.use((req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', process.env.allowedOrigins);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );
    next();
});
app.use('/api/signup', signupRoute);
module.exports = app;
