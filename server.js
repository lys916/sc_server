const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./user/userRoutes');
const dailyFoodRouter = require('./dailyFood/DailyFoodRoutes');
const customFoodRouter = require('./customFood/CustomFoodRoutes');
const systemFoodRouter = require('./systemFood/SystemFoodRoutes');

const { addSystemFood } = require('./util_functions');

const server = express();

server.use(cors());   // https://medium.com/trisfera/using-cors-in-express-cac7e29b005b
server.use(bodyParser.json());

server.get('/', function(req, res) {
  res.status(200).json({ status: 'API Running' });
});

mongoose
  .connect('mongodb://localhost/Getfit')
  .then(conn => {
    console.log('connected to mongo Get_fit');
  })
  .catch(err => {
    console.log('error connect to mongo');
});

server.use('/user', userRoutes);
server.use('/dailyFood', dailyFoodRouter);
server.use('/customFood', customFoodRouter);
server.use('/systemFood', systemFoodRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`API running on http://localhost:${port}.`);
  // addSystemFood();
});
