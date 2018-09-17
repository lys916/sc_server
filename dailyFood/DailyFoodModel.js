const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const DailyFoodSchema = new mongoose.Schema({
	name: {type: String, required: true},
    measurement: {type: String, required: true},
    fat: {type: Number, required: true},
    carb: {type: Number, required: true},
    protein: {type: Number, required: true},
    amount: {type: Number, required: true},
    active: {type: Boolean, default: false},
    editing: {type: Boolean, default: false},
    createdOn: {type: Date, default: Date.now},
    dateString: {type: String, required: true},
    userName: {type: String, required: true}
});

const DailyFoodModel = mongoose.model('DailyFood', DailyFoodSchema);

module.exports = DailyFoodModel;