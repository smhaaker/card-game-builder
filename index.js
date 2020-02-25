// import the library
let cardframe = require("./src/cardframe");
console.log("====================================");

/* 
  Create Cards in one of the three following ways:
  1. Passing all elements in as arguments, 
  2. Passing an array of values in to the createCardSet function
  3. Passing an object directly in - Recommended
  First argument is the amount of cards to create, You can create 2 empty cards by doing createCardSet(2)
*/

// only arguments
let onlyArguments = cardframe.createCardSet(2, "name", "Zeus", "color", "blue", "hp", 10, "health", 100);
console.log(onlyArguments);

// arguments in array
let passArr = ["name", "Zeus", "color", "red", "hp", 10, "health", 100];
let passingArray = cardframe.createCardSet(3, ...passArr);
console.log(passingArray);

// an object
let jsonObject = { name: "Zeus", color: "white", hp: 10, health: 100};
let jsonPass = cardframe.createCardSet(2, jsonObject);
console.log(jsonPass);

/* 
  Merge cards into deck by passing the created cards as arguments
*/
let deck = cardframe.mergeSets(onlyArguments, passingArray, jsonPass)
console.log(deck)
console.log("====================================");

/* 
  Shuffle the deck
*/
let shuffled = cardframe.shuffle(deck)
console.log("====================================");
console.log(shuffled)

// You can directly change the status of a card as needed by accessing the methods, picked, played, removed. etc
cardframe.played(shuffled[2])
// clean cards above to match each other. 
console.log(shuffled)

// simple operator 
// pass the card, the key, the action and the number to use
cardframe.operation(shuffled[2], 'hp', 'add', 3);
console.log(shuffled)
console.log(shuffled[2])
console.log("====================================");

cardframe.operation(shuffled[2], 'hp', 'multiply', 3);
console.log(shuffled[2])
cardframe.operation(shuffled[2], 'hp', 'subtract', 3);
console.log(shuffled[2])
cardframe.operation(shuffled[2], 'hp', 'divide', 3);
console.log(shuffled[2])


console.log("====================================");


console.log(deck)
console.log("====================================");


// change status of a card:
// cardframe.picked(deck[6])
// cardframe.played(deck[6])

// console.log(deck[3])


// let cardsDealt = cardframe.deal(shuffled, 3, 1)

// console.log(cardsDealt[0])
