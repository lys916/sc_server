
const SystemFood = require('./systemFood/SystemFoodModel');
const {systemFoodList} = require('./systemFoodList.js');

const addSystemFood = ()=>{
    // console.log('food lsit', systemFoodList);
    // SystemFood.create(systemFoodList).then(foods => {
	// 	console.log('System food created! ', foods.length);
	// });
}

// const getAllTeams = ()=>{
//     return Team.find({}).then(res=>{
//         return res;
//     });
// }
// // const teamRating = team.qbRating + team.wrRating + team.rbRating + team.teRating + team.dfRating + team.olineRating;
// const getTeamRating = (shortName)=>{
//     return Team.find({shortName}).then(res=>{
//         const rating = res[0].qbRating + res[0].wrRating + res[0].rbRating + res[0].teRating + res[0].dfRating + res[0].olineRating;
//         return rating;
//     });
// }

// const updateGameTeamsRating = (games)=>{
//     console.log('updating game teams rating');
//     games.forEach(async (game, index)=>{
//         console.log('updating game ', index);
//         const roadRating = await getTeamRating(game.roadCity);
//         const homeRating = await getTeamRating(game.homeCity);
//         Game.update({roadCity: game.roadCity}, {$set: {roadRating}}, function(err, res){
//             if(err){console.log(err)}
//             Game.update({homeCity: game.homeCity}, {$set: {homeRating}}, function(err, res){
//                 if(err){console.log(err)}
//                 console.log('game updated', index);
//             })
//         });
//     });
// }

module.exports =  { addSystemFood };