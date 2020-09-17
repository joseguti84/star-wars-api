'use strict';

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const bodyParser = require('koa-body');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

app.use(bodyParser());
app.use(routes.routes());

mongoose.connect(
    'mongodb://localhost:27017/star-wars',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.listen(5000, () => {
    console.log('running on port 5000');
});
