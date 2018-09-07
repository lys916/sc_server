const express = require('express');
const mongoose = require('mongoose');
const dailyFoodRouter = express.Router();

const DailyFood = require('./DailyFoodModel');
const User = require('../user/userModel');

dailyFoodRouter.post('/createFood', function(req, res){
	DailyFood.create(req.body).then(post => {
		res.json(post);
	});
});

dailyFoodRouter.get('/getFoods', function(req, res){
    const {date} = req.query;
	DailyFood.find({dateString: date}).then(post => {
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
