const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const SystemFoodSchema = new mongoose.Schema({
	name: {type: String, required: true},
    measurements: [{type: String, required: true}],
    cup: mongoose.Schema.Types.Mixed,
    oz: mongoose.Schema.Types.Mixed,
    gram: mongoose.Schema.Types.Mixed,
    tsp: mongoose.Schema.Types.Mixed,
    tbsp: mongoose.Schema.Types.Mixed,
});

const SystemFoodModel = mongoose.model('SystemFood', SystemFoodSchema);

module.exports = SystemFoodModel;

