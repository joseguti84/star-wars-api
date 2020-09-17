const Router = require('koa-router');
const Planet = require('../models/Planet');

const planets = new Router();

planets.get('/', async (ctx, next) => {
    await Planet.find()
        .then(planets => {
            ctx.body = planets
        })
        .catch(err => {
            ctx.body = `error: ${err}`
        });
});

planets.post('/', async ctx => {
    if (!ctx.request.body.name) {
        ctx.body = "The planet name is required";
    } else {
        const planet = new Planet();
        planet.name = ctx.request.body.name;
        await planet.save()
            .then(data => {
                ctx.body = data;
            })
            .catch(err => {
                ctx.body = `error: ${err}`
            });
    }
});

planets.get('/:id', async ctx => {
    await Planet.find(ctx.params.id)
        .then(planets => {
            ctx.body = planets
        })
        .catch(err => {
            ctx.body = `error: ${err}`
        });
});

planets.put('/:id', async ctx => {
    if (!ctx.request.body.name) {
        ctx.body = "The planet name is required";
    } else {
        await Planet.findOneAndUpdate({
            _id: ctx.params.id
        },{
            name: ctx.request.body.name
        })
            .then(planets => {
                ctx.body = `The planet _id: ${ctx.params.id} was updated`
            })
            .catch(err => {
                ctx.body = `error: ${err}`
            });
    }
});

planets.delete('/:id', async ctx => {
    await Planet.deleteOne({
        _id: ctx.params.id
    })
        .then(() => {
            ctx.body = `The planet _id: ${ctx.params.id} was deleted`
        })
        .catch(err => {
            ctx.body = `error: ${err}`
        });
});

module.exports = planets;
