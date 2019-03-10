// import the library
let cardframe = require('./src/cardframe');
console.log('====================================')
// console.log(cardframe)
console.log('====================================')

// set up the game info
let config = cardframe.setupGame('SteffenCards', 12, 4, 'a sample deck builder')

// todos:
/*
  setupGame: name, numberOfDecks, maxPlayers, description.
  playerSetup:
*/





let newDeck = cardframe.createDeck(4)


// console.log('name of game is: ' +  config.nameOfGame)
// console.log('Total cards: ' +  config.numberOfCards)
console.log('CardList: '+ config.deckArray)
console.log('====================================')

console.log(config)
// console.log(config.cardArray[1])
console.log('====================================')

console.log(newDeck)

console.log('====================================')
console.log('====================================')

// let setAttributes = cardframe.setAttributes(config.numberOfCards)
// let setAttributes2 = cardframe.setAttributes(config.numberOfCards/2, 50)
// let setAttributes3 = cardframe.setAttributes()

// create all arrays that go in cards.
// then create cards and do 4 cards of these powers in these colors etc.

// add max players function, maybe in game setup.
// to gamesetup. playermoves. Probably in its own player object.


let newCard = cardframe.createAttribute(1, "mr badass", "nr 2", "falcon fury")
// console.log(newCard.cards[0].powers)
// console.log(newCard.cards)


// create powers. or whatever we want to call them. 
let powers = cardframe.createPowers(['superpunch', 'tickle machine', 'farts'])
let powers2 = cardframe.createPowers(['balk', 'walk', 'talk', 'chalk?'])

console.log(powers)
console.log(powers2)

// Define a list of colors to use. Passes as an array
let colors = cardframe.createColors(['red', 'white', 'blue'])
console.log(colors)

// Creating sets of cards from our options.
// first card, last card, name, value, color / faction, powers, more stuff
let set1 = cardframe.createAttributes(0, 4, "SuperKiller", 10, colors[1], powers, "upgrades"+[4])
let set2 = cardframe.createAttributes(4, 8, "Mr badass", 30, "red", "falcon fury", "cool stuff")
let set3 = cardframe.createAttributes(8, 12, "SteffenBot", 10, colors[2], powers2, "upgrades"+[4])

// console.log(newCards.cards.id)
// console.log(set1)
// // console.log(typeof set1)
// // newCards = cardframe.createAttributes(4, "mr badass", 30, "falcon furry", "cool stuff")
// console.log(set2)
// console.log(set3)


// we then join these cards sets to make a deck.
let deck = cardframe.mergeSets(set1, set2, set3)
// let deck2 = cardframe.mergeSets()


// var children = set1.concat(set2);
// let merged = {...set1, ...set2};


console.log('====================================')
console.log('====================================')
// console.log(merged)

// last card in deck, card one would be deck[0]
console.log(deck)

console.log(deck[deck.length-1])
// see one power from the list.
console.log(deck[0])

console.log(deck[deck.length-1].cards.powers[2])
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
// let sortedDeck = testSortDeck(config.numberOfCards, newDeck.numberOfColors)
//
// console.log(sortedDeck)


// set up players ??
// set up types of cards.
// amount of cards need to return a list / array / object
// something like setTypeOfCards(number of cards, attributes: HP: 4, stuff:5)
