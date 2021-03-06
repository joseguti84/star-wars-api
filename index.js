'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const Routes = require('./routes');
const cors = require('@koa/cors');

const bodyParser = require('koa-body');
const mongoose = require('mongoose');

const app = new Koa();
const router = new Router();

Routes(router);

mongoose.connect(
    'mongodb://localhost:27017/star-wars',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app
    .use(bodyParser())
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods());

const server = app.listen(5000, () =>{
    console.log('running on port 5000');
});

module.exports = server;
