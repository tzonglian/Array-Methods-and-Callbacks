import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

const finals2014ArrObj = fifaData.filter( function (fifaData){
    return ((fifaData.Year === 2014) && (fifaData.Stage === "Final"));
});

const finals2014Obj = finals2014ArrObj[0];
   
console.log(finals2014Obj);

//(a) Home Team name for 2014 world cup final
console.log( finals2014Obj["Home Team Name"] );

// (b) Away Team name for 2014 world cup final
console.log( finals2014Obj["Away Team Name"] );

// (c) Home Team goals for 2014 world cup final
console.log( finals2014Obj["Home Team Goals"] );

// (d) Away Team goals for 2014 world cup final
console.log( finals2014Obj["Away Team Goals"] );

// (e) Winner of 2014 world cup final 

const printWinner = () => {
    if (( finals2014Obj["Home Team Goals"] > finals2014Obj["Away Team Goals"])){
        console.log( finals2014Obj["Home Team Name"] );
    }
    else if( finals2014Obj["Home Team Goals"] === finals2014Obj["Away Team Goals"]){
        console.log("Tie");
    }
    else{
        console.log( finals2014Obj["Amay Team Name"] );
    }
}

printWinner();


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

const getFinals = fifaData.filter( game => {
    return game.Stage === "Final";
});

console.log(getFinals);
console.log(getFinals[0].Year);


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

/* .forEach version */
// const yearDataArr = [];
// const getYears = getFinals.forEach( function(game) {
//     return yearDataArr.push(game.Year);
// });
// console.log(yearDataArr);

const getYears = getFinals.map(game => {
    return game["Year"];
});

console.log(getYears);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

/* game is an object */
const calcWinner = (game) => { 
    if (game["Home Team Goals"] > game["Away Team Goals"]){
        return game["Home Team Name"];
    }
    else if(game["Home Team Goals"] < game["Away Team Goals"]){
        return game["Away Team Name"];
    }
    else { /*tie case*/
        let stringTeam = game["Win conditions"]; 
        return (stringTeam.trim().split(" "))[0]; /*get team name from string*/
    }
};

const getWinners = getFinals.map((game) => {
    return calcWinner(game);
});

console.log(getWinners);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

const getWinnersByYear = (yearWin, cbWin, cbYears) => {
    const winnerIndex = cbYears.indexOf(yearWin);
    console.log(winnerIndex);
    const winTeam = cbWin[winnerIndex];
    console.log(winTeam);

    return `In ${yearWin}, ${winTeam} won the world cup!`
}

console.log(getWinnersByYear(1998, getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals (data){ 
    const totalGoals = data.reduce((total, goal) => {
        console.log(total);
        //console.log(goal["Home Team Goals"]);
        return total + goal["Home Team Goals"] + goal["Away Team Goals"];
    }, 0);
    return ((totalGoals/data.length) /2); 
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
