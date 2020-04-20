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
const passingArray = cardframe.createCardSet(1, ...passArr);
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
const deck = cardframe.mergeSets(onlyArguments, passingArray, jsonPass);
console.log(deck);
console.log('====================================');
deck[1].operations.greet();



/*
  Shuffle the deck
*/
const shuffled = cardframe.shuffle(deck);
console.log('====================================');
console.log(shuffled);

/* You can directly change the status of a card as needed by accessing
 the methods, picked, played, removed. etc
*/
cardframe.played(shuffled[2]);
// clean cards above to match each other.
console.log(shuffled);

// simple operator
// pass the card, the key, the action and the number to use
cardframe.operation(shuffled[2], 'hp', 'add', 3);
console.log(shuffled);
console.log(shuffled[2]);
console.log('====================================');
cardframe.operation(shuffled[2], 'hp', 'multiply', 3);
console.log(shuffled[2]);
cardframe.operation(shuffled[2], 'hp', 'subtract', 3);
console.log(shuffled[2]);
cardframe.operation(shuffled[2], 'hp', 'divide', 3);
console.log(shuffled[2]);

console.log('====================================');
cardframe.faceUp(shuffled[2]);
console.log(shuffled[2]);

console.log('====================================');
cardframe.exhaust(shuffled[2]);
console.log(shuffled[2]);
console.log('====================================');
cardframe.resetStatus(shuffled[2]);
console.log(shuffled[2]);
cardframe.exhaust(shuffled[2]);
console.log(shuffled[2]);
cardframe.operation(shuffled[2], 'hp', 'divide', 3);
console.log(shuffled[2]);
cardframe.picked(shuffled[2]);
console.log(shuffled[2]);
cardframe.picked(shuffled[2], false);
console.log(shuffled[2]);
// change status of a card:
// cardframe.picked(deck[6])
// cardframe.played(deck[6])

const cardsDealt = cardframe.deal(shuffled, 2, 1);
console.log(cardsDealt);

cardframe.discard(shuffled[0]);

cardframe.discard(shuffled[1]);

shuffled[1].operations.greet();

// console.log('====================================');

// console.log(shuffled);
// console.log('====================================');

// // a new deck of all the discarded cards
// const newDeck = cardframe.discardedDeck(shuffled, false);
// console.log(newDeck);
