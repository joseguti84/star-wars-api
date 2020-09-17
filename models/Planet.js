const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
   name: {
       type: String
   },
    url: {
       type: String
    }
});

module.exports = Planet = mongoose.model('planets', PlanetSchema);
