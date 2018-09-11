const express = require('express');
const dailyFoodRouter = express.Router();

const DailyFood = require('./DailyFoodModel');

dailyFoodRouter.post('/createFood', function(req, res){
	console.log(req.body);
	DailyFood.create(req.body).then(post => {
		res.json(post);
	});
});

dailyFoodRouter.get('/getFoods', function(req, res){
	const {date, userName} = req.query;
	console.log('get food data', req.body)
	DailyFood.find({dateString: date, userName}).then(post => {
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
