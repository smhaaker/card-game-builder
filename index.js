let cardframe = require('./src/cardframe');
console.log('====================================')
// console.log(cardframe)
console.log('====================================')


let newGame = cardframe.setupGame('SteffenCards', 12)
let newDeck = cardframe.createDeck(4)
// console.log('name of game is: ' +  newGame.nameOfGame)
// console.log('Total cards: ' +  newGame.numberOfCards)
console.log('CardList: '+ newGame.cardArray)
console.log('====================================')

console.log(newGame)
console.log(newDeck)

console.log('====================================')
console.log('====================================')

// let setAttributes = cardframe.setAttributes(newGame.numberOfCards)
// let setAttributes2 = cardframe.setAttributes(newGame.numberOfCards/2, 50)
// let setAttributes3 = cardframe.setAttributes()

// create all arrays that go in cards.
// then create cards and do 4 cards of these powers in these colors etc.


let newCard = cardframe.createAttribute(1, "mr badass", "nr 2", "falcon fury")
// console.log(newCard.cards[0].powers)
// console.log(newCard.cards)

let powers = cardframe.createPowers(['superpunch', 'tickle machine', 'farts'])
console.log(powers)

let colors = cardframe.createColors(['red', 'white', 'blue'])
console.log(colors)

let totalCards = cardframe.createAttributes(4, "SuperKiller", 10, colors[1], powers, "upgrades"+[4])
let newCards = cardframe.createAttributes(4, "Mr badass", 30, "red", "falcon fury", "cool stuff")
// console.log(newCards.cards.id)
console.log(newCards)
console.log(typeof newCards)
// newCards = cardframe.createAttributes(4, "mr badass", 30, "falcon furry", "cool stuff")
console.log(totalCards)
var children = totalCards.concat(newCards);

console.log('====================================')
console.log('====================================')

console.log(children[1])

console.log(children[7])
console.log('====================================')




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
