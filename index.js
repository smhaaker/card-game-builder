let cardframe = require('./src/cardframe');
console.log('====================================')
// console.log(cardframe)
console.log('====================================')


let newGame = cardframe.setupGame('SteffenCards', 12, 4)
let newDeck = cardframe.createDeck(4)
// console.log('name of game is: ' +  newGame.nameOfGame)
// console.log('Total cards: ' +  newGame.numberOfCards)
console.log('CardList: '+ newGame.cardArray)
console.log('====================================')

console.log(newGame)
// console.log(newGame.cardArray[1])
console.log(newDeck)

console.log('====================================')
console.log('====================================')

// let setAttributes = cardframe.setAttributes(newGame.numberOfCards)
// let setAttributes2 = cardframe.setAttributes(newGame.numberOfCards/2, 50)
// let setAttributes3 = cardframe.setAttributes()

// create all arrays that go in cards.
// then create cards and do 4 cards of these powers in these colors etc.

// add max players function, maybe in game setup.
// to gamesetup. playermoves. Probably in its own player object.


let newCard = cardframe.createAttribute(1, "mr badass", "nr 2", "falcon fury")
// console.log(newCard.cards[0].powers)
// console.log(newCard.cards)

let powers = cardframe.createPowers(['superpunch', 'tickle machine', 'farts'])
console.log(powers)

let colors = cardframe.createColors(['red', 'white', 'blue'])
console.log(colors)

// Creating sets of cards from our options.
// first card, last card, name, value, color / faction, powers, more stuff
let set1 = cardframe.createAttributes(0, 3, "SuperKiller", 10, colors[1], powers, "upgrades"+[4])
let set2 = cardframe.createAttributes(4, 7, "Mr badass", 30, "red", "falcon fury", "cool stuff")
let set3 = cardframe.createAttributes(8, 11, "SteffenBot", 10, colors[2], powers, "upgrades"+[4])

// console.log(newCards.cards.id)
console.log(set1)
console.log(typeof set1)
// newCards = cardframe.createAttributes(4, "mr badass", 30, "falcon furry", "cool stuff")
console.log(set2)
console.log(set3)

// we then join these cards sets to make a deck.
let deck = cardframe.mergeSets(set1, set2, set3)


// var children = set1.concat(set2);
// let merged = {...set1, ...set2};


console.log('====================================')
console.log('====================================')
// console.log(merged)
console.log(deck[deck.length-1])
//
// console.log(children[7])
// change a cardname:
// children[7].cards.cardName = 'NewName'


// console.log(children[7])

console.log('====================================')

// let testargs = cardframe.manyArgs(23,33,6234,234,123563)


// rest of args, when we need that.
// const testArray = (...args) => {
//     console.log(args);
// };
//
// testArray(1,2,3,4,56,6)
// console.log(cardframe.setup)

// console.log(cardframe.json)
//
// console.log(cardframe.json.gameName)


// setattributes(number of cards to set, type of attribute, (value)(faction))

//
// function testSortDeck(cards, colors) {
//   let cardsOfOneColor = cards / colors
//   return {cardsOfOneColor}
// }
//
// let sortedDeck = testSortDeck(newGame.numberOfCards, newDeck.numberOfColors)
//
// console.log(sortedDeck)


// set up players ??
// set up types of cards.
// amount of cards need to return a list / array / object
// something like setTypeOfCards(number of cards, attributes: HP: 4, stuff:5)
