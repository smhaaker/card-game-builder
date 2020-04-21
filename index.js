// import the library
const cardframe = require('./src/cardframe');

console.log('====================================');
/*
  Create Cards in one of the three following ways:
  1. Passing all elements in as arguments,
  2. Passing an array of values in to the createCardSet function
  3. Passing an object directly in - Recommended
  First argument is the amount of cards to create,
  You can create 2 empty cards by doing createCardSet(2)
*/

// only arguments
const onlyArguments = cardframe.createCardSet(
  2,
  'name',
  'Zeus',
  'color',
  'blue',
  'hp',
  10,
  'health',
  100,
);
console.log(onlyArguments);

// arguments in array
const passArr = ['name', 'Zeus', 'color', 'red', 'hp', 10, 'health', 100];
const passingArray = cardframe.createCardSet(3, ...passArr);
console.log(passingArray);

// an object
const jsonObject = {
  name: 'Zeus',
  color: 'white',
  hp: 10,
  health: 100,
};
const jsonPass = cardframe.createCardSet(2, jsonObject);
console.log(jsonPass);
console.log('====================================');

/*
  Merge cards into deck by passing the created cards as arguments
*/
console.log('====================================');
console.log('== Initial Deck ==');

const deck = cardframe.mergeSets(onlyArguments, passingArray, jsonPass);
console.log(deck);
console.log('====================================');


/*
  Shuffle the deck
*/
const shuffled = cardframe.shuffle(deck);
console.log('====================================');
console.log('== Shuffled Deck ==');
console.log(shuffled);
console.log('====================================');
console.log('== Single Card in Shuffled Deck ==');
console.log(shuffled[2]);


/* You can directly change the status of a card as needed by accessing
 the methods, picked, played, removed. etc
*/
console.log('====================================');
console.log('== Single Card shows played ==');
cardframe.played(shuffled[2]);
console.log(shuffled[2]);

/*  simple operator
    pass the card, the key, the action and the number to use
*/
console.log('====================================');
console.log('== Single Card operator to hp ==');
console.log('=== add ==');
cardframe.operation(shuffled[2], 'hp', 'add', 3);
console.log(shuffled[2]);

console.log('=== multiply ==');
cardframe.operation(shuffled[2], 'hp', 'multiply', 3);
console.log(shuffled[2]);

console.log('=== subtract ==');
cardframe.operation(shuffled[2], 'hp', 'subtract', 3);
console.log(shuffled[2]);

console.log('=== divide ==');
cardframe.operation(shuffled[2], 'hp', 'divide', 3);
console.log(shuffled[2]);

// dealing 2 cards to 2 players
cardframe.deal(shuffled, 2, 2);













// // discarding cards to reset and put in new deck
// cardframe.discard(shuffled[0]);
// cardframe.discard(shuffled[1]);
// cardframe.discard(shuffled[2]);
// cardframe.discard(shuffled[3]);

// console.log('== before resetStatus==');
// cardframe.picked(shuffled[1]);
// cardframe.played(shuffled[1]);
// console.log(shuffled[1]);
// console.log('== after resetStatus==');
// cardframe.resetStatus(shuffled[1]);
// console.log(shuffled[1]);


// console.log('====================================');
// console.log('deck of discarded cards:')
// // // a new deck of all the discarded cards
// const newDeck = cardframe.discardedDeck(shuffled, true);
// console.log(newDeck);
