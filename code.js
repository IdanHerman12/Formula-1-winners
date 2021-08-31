const formula1Champions = [
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Alonso",
    "Alonso",
    "Räikkönen",
    "Hamilton",
    "Button",
    "Vettel",
    "Vettel",
    "Vettel",
    "Vettel",
    "Hamilton",
    "Hamilton",
    "Rosberg",
    "Hamilton",
    "Hamilton",
    "Hamilton",
    "Hamilton"
];
let winners={}

function countWin(driver) {
   if(formula1Champions.hasOwnProperty(driver)){
       winners[driver]=formula1Champions.forEach(driver);
   }
}

console.log(formula1Champions.forEach(countWin));
