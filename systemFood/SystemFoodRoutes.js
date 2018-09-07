const express = require('express');
const mongoose = require('mongoose');
const systemFoodRouter = express.Router();

const SystemFood = require('./SystemFoodModel');

// customFoodRouter.post('/createFood', function(req, res){
//     console.log('creating custom food');
// 	CustomFood.create(req.body).then(post => {
// 		res.json(post);
// 	});
// });

systemFoodRouter.get('/getFoods', function(req, res){
	SystemFood.find({}).then(foods => {
		res.json(foods);
	});
});

// customFoodRouter.delete('/deleteFood', function(req, res){
//     const {id} = req.query;
// 	CustomFood.findByIdAndRemove(id).then(deleted => {
// 		res.json(deleted);
// 	});
// });

// postRouter.get('/', function(req, res){
// 	const search =  req.query.search;
// 	if(search){
// 		const filter = new RegExp(search, 'i');
// 		Post.find({$or : [{title: filter}, {cuisine: filter}, {tags: filter}]})
// 		.populate('user', 'name')
// 		.then(posts => {
// 			res.json(posts);
// 		})
// 	} 
// });

// postRouter.get('/:id', function(req, res){
// 	const id = req.params.id;
// 	// find posts that owns by the people 'id user' is following...
// 	if (id){
// 		User.findById(id).then(user => {
// 			Post.find({ 'user' : { $in: user.following } })
// 			.sort({createdOn: -1})
// 			.populate('user')
// 			.then(posts => {
// 				console.log('res posts', posts);
// 			res.json(posts);
// 		})	
// 		});
		
// 	}
// });

// postRouter.post('/', function(req, res){
// 	console.log(req.body);
// 	// Post.find().then(posts => {
// 	// 	res.json(posts);
// 	// });
// });

module.exports = systemFoodRouter;
