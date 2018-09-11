const express = require('express');
const dailyFoodRouter = express.Router();

const DailyFood = require('./DailyFoodModel');

dailyFoodRouter.post('/createFood', function(req, res){
	DailyFood.create(req.body).then(post => {
		res.json(post);
	});
});

dailyFoodRouter.get('/getFoods', function(req, res){
    const {date, id} = req.query;
	DailyFood.find({dateString: date, user: id}).then(post => {
		res.json(post);
	});
});

dailyFoodRouter.delete('/deleteFood', function(req, res){
    const {id} = req.query;
	DailyFood.findByIdAndRemove(id).then(deleted => {
		res.json(deleted);
	});
});

module.exports = dailyFoodRouter;
