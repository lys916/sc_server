const express = require('express');
const User = require('./UserModel.js');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userRouter.post('/signup', function(req, res){
	const { name, password } = req.body;
	const user = new User();
	user.username = name;

	bcrypt.hash(password, 11, (err, hash) => {
		if (err) throw err;
		user.password = hash;
		user.save().then(savedUser => {
			res.json(savedUser);
		});
	});

// ** ANOTHER SOLUTION, SAVE HASH AND SALT IN DB **
 // user.save(function(err) {
 //    var token;
 //    token = user.generateJwt();
 //    res.status(200);
 //    res.json({
 //      "token" : token
 //    });
 //  });

	// user.save().then(savedUser => {
	// 	let token;
	// 	token = user.generateJwt();
	// 	res.status(200).json({"token": token});
	// }).catch(err => {
	// 	res.status(500).json({error: "Unable to save up user: ", err});
	// });
});

userRouter.post('/login', function(req, res){
	console.log('server.. user logging in', req.body );
	const { name, password } = req.body;
	User.findOne({ username: name }).then(user => {
		// userObject = {
		// 	username: user.name,
		// 	userId: user._id
		// };
		console.log('found', user.username);
		if(!user){
			res.json({error: 'Wrong username or password'});
		}
		if(user){
			bcrypt.compare(password, user.password, function(err, valid) {
    			if(!valid){
    				res.json({error: 'Wrong username or password'});
				}
				console.log('pwd valid', true)
    			// const token = jwt.sign(userObject, 'This is a secret string', { expiresIn: '1h' });
        		res.json(user);
			});
		}
	});
});

userRouter.put('/addGoal', function(req, res){
	const { goal, userId } = req.body;
	console.log('goal to update', goal)
	console.log('id to update', userId);
	User.findByIdAndUpdate(userId, goal, {new: true}, function(err, updated){
		if(err){console.log(err)}
		console.log('GOAL IS SET!', updated);
		res.json(updated);
	});
});

module.exports = userRouter;