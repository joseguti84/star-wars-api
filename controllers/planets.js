const Planet = require('../models/Planet');

let controller = {

    getById: async (id, ctx, next) => {
        try {
            ctx.planet = await Planet.findById(id).exec();
            if (!ctx.planet) return ctx.status = 404;
            return next();
        } catch (err) {
            ctx.status = 404;
        }
    },

    getAll: async (ctx) => {
        try {
            ctx.body = await Planet.find().exec();
        } catch (err) {
            ctx.status = 404;
        }
    },

    read: async (ctx) => {
        console.log(ctx);
        ctx.body = ctx.planet;
    },

    store: async (ctx) => {
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
    },

    update: async (ctx) => {
        if (!ctx.request.body.name) {
            ctx.body = "The planet name is required";
        } else {
            const planet = ctx.planet;
            planet.name = ctx.request.body.name;
            await planet.save()
                .then(() => {
                    ctx.body = `The planet _id: ${planet.id} was updated`
                })
                .catch(err => {
                    ctx.body = `error: ${err}`
                });
        }
    },

    delete: async (ctx) => {
        await Planet.findByIdAndDelete(ctx.planet._id).exec()
            .then(() => {
                ctx.body = `The planet _id: ${ctx.planet._id} was deleted`
            })
            .catch(err => {
                ctx.body = `error: ${err}`
            });
    }
};

module.exports = controller;
