// import the library
let cardframe = require("./src/cardframe");
console.log("====================================");
// output cardFrame api functions
// console.log(cardframe)
console.log("====================================");

let passArr = ["name", "steffen", "color", "blue", "hp", 12];

let created3 = cardframe.createCardSet(3, ...passArr);
// played(created3[2]);
console.log(created3);

let created2 = cardframe.createCardSet(2, "name", "zeus", "color", "white", "hp", 10);
console.log(created2);
// played(created2[1]);
// removed(created2[0]);
console.log(created2);

let jsonTest = { name: "steffen", color: "white" };
let jsonCreated = cardframe.createCardSet(2, jsonTest);
console.log(jsonCreated);
// played(jsonCreated[1])

console.log(jsonCreated)
let deck = cardframe.mergeSets(created3, created2, jsonCreated)
// console.log(deck)
cardframe.picked(deck[6])
cardframe.played(deck[6])

// deck[6].status.inplay = true

console.log(deck)
