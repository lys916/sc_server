const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const SystemFoodSchema = new mongoose.Schema({
	name: {type: String, required: true},
    measurements: [{type: String, required: true}],
    cup: mongoose.Schema.Types.Mixed,
    oz: mongoose.Schema.Types.Mixed,
    tsp: mongoose.Schema.Types.Mixed,
    tbsp: mongoose.Schema.Types.Mixed,
    gram: mongoose.Schema.Types.Mixed,
    lb: mongoose.Schema.Types.Mixed,
    scoop: mongoose.Schema.Types.Mixed,
    inch: mongoose.Schema.Types.Mixed,
    md: mongoose.Schema.Types.Mixed,
    lg: mongoose.Schema.Types.Mixed,
    sm: mongoose.Schema.Types.Mixed,
    piece: mongoose.Schema.Types.Mixed,
    item: mongoose.Schema.Types.Mixed,
    serv: mongoose.Schema.Types.Mixed,
    pack: mongoose.Schema.Types.Mixed,
});

const SystemFoodModel = mongoose.model('SystemFood', SystemFoodSchema);

module.exports = SystemFoodModel;


