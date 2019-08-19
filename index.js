// import the library
let cardframe = require('./src/cardframe');
console.log('====================================')
// output cardFrame api functions
console.log(cardframe)
console.log('====================================')

/* Sets up the game,
 * example: name.setupGame(nameofGame, numberOfCardDecks, minPlayers, maxPlayers, description)
 */
let config = cardframe.setupGame('Old Greek People', 2, 1, 4, 'Greek Mythology Throwdown')
// output the config
console.log(config)
// output specific item of config
// console.log(config.nameOfGame)
console.log('====================================')


// let newDeck = cardframe.createDeck(4)
// console.log('name of game is: ' +  config.nameOfGame)
// console.log('Total cards: ' +  config.numberOfCards)

// console.log(newDeck)


// let setAttributes = cardframe.setAttributes(config.numberOfCards)
// let setAttributes2 = cardframe.setAttributes(config.numberOfCards/2, 50)
// let setAttributes3 = cardframe.setAttributes()

// create all arrays that go in cards.
// then create cards and do 4 cards of these powers in these colors etc.

// add max players function, maybe in game setup.
// to gamesetup. playermoves. Probably in its own player object.


// let newCard = cardframe.createAttribute(1, "mr badass", "nr 2", "falcon fury")
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
let set1 = cardframe.createCardSet(0, 4, "SuperKiller", 10, colors[1], powers, "base card, goof for something", "upgrades"+[4])
let set2 = cardframe.createCardSet(4, 8, "Mr badass", 30, "red", "not a very good card", "falcon fury", "cool stuff")

// adding additional object
let additional = {
  More: "Things", 
  Work: "works!"
};

// we might want to pass a majority of values thusly:
let stuff = {
  value: 10,
  description: 'this is a card'
}
// and pass that in. 

let set3 = cardframe.createCardSet(8, 12, "SteffenBot", 10, colors[2], powers2, "really strong card", additional)

// console.log(newCards.id)
// console.log(set1)
// // console.log(typeof set1)
// // newCards = cardframe.createAttributes(4, "mr badass", 30, "falcon furry", "cool stuff")
// console.log(set2)
// console.log(set3)


// we then join these cards sets to make a deck.
let deck = cardframe.mergeSets(set1, set2, set3)
// let deck2 = cardframe.mergeSets()


console.log('====================================')
console.log('====================================')
// console.log(merged)

// last card in deck, card one would be deck[0]
console.log(deck)
console.log(deck[10].cards)
// //
// console.log(deck[deck.length-1])
// // // see one power from the list.
// console.log(deck[0])
//
// console.log(deck[deck.length-1].powers[2])

cardframe.inPlay(deck[1], false)
console.log(deck[1])

cardframe.inPlay(deck[1], true)
console.log(deck[1])
cardframe.inPlay(deck[1], false)
console.log(deck[1])




console.log('====================================')

// let testargs = cardframe.manyArgs(23,33,6234,234,123563)


let shuffled = shuffle(deck);
console.log(shuffled)

function shuffle(deckToShuffle) {
    for (let i = 0; i < deckToShuffle.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (deckToShuffle.length - i));

        let temp = deckToShuffle[j];
        deckToShuffle[j] = deckToShuffle[i];
        deckToShuffle[i] = temp;
    }
    return deckToShuffle;
}


// dealing function. needs to do amount of players annd amount of cards to deal
// this function is no good yet. 
// Needs to increment count of dealt cards as well as set the stat.
function deal(source, cardsToDeal) {
  // this works for 2 players. Need to fix for multiple players. Or just one
  let playerArr = []
  let playerArr2 = []
  for (let i = 0; i < cardsToDeal; i += 2){
    // playerArr gets evens, playerarr2 get odds? so just do i+1 and 
    if(cardsToDeal > source.length){
      console.log('not that many cards in deck')
      break;
    }
    else {
      if(source[i].cardstatus.picked == true){
        // pick next card
        console.log('this card is already picked')
      }
      else {
        playerArr.push(source[i])
        cardframe.inPlay(source[i], true)
        playerArr2.push(source[i+1])
        cardframe.inPlay(source[i+1], true)
        }  
      }
    }
  // console.log(playerArr2)
  return playerArr
}


// deals 4 cards to player 1 from the shuffled deck. 
// let dealtToPlayer1 = deal(shuffled,12)
// console.log(dealtToPlayer1)
// // cardframe.dealCards(4)
// console.log(dealtToPlayer1[1])

// rest of args, when we need that.
// const testArray = (...args) => {
//     console.log(args);
// };
//
// testArray(1,2,3,4,56,6)
// console.log(cardframe.setup)



// this seems to kind of work. Need a check for even number of cards dealt though. 
// also neeed to return player 1 2 and 3 somehow.... 
// deal function function(decktodeal, players, amount of cards)
function newDealer(deckToDealFrom, playersToDealTo, cardsToDealTotal) 
{

  let newArr = []
  for(let i=0;i<playersToDealTo+1;i++){
    newArr[i]=[];
  }

  console.log(newArr)

  let j = 0
  // console.log('deckToDealFrom ' + deckToDealFrom)
  console.log('playersToDealTo ' + playersToDealTo)
  console.log('cardsToDeal ' + cardsToDealTotal)
  for (let i = 0; i < cardsToDealTotal; i++){
    if (j > playersToDealTo) {
      j = 0;
    }

    // console.log(i)
    // console.log(j)

    newArr[j].push(deckToDealFrom[i])
    j++
    cardframe.inPlay(deckToDealFrom[i], true)
  }
  console.log(newArr)
  return newArr;
}

let cardsDealt = newDealer(shuffled, 1, 10)
console.log('player1 / card 2: ' + JSON.stringify(cardsDealt[0][1].id))

// console.log('player2: ' + cardsDealt[1])

// console.log(cardsDealt[1])
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



// todos:
/*
  setupGame: name, numberOfDecks, maxPlayers, description.
  playerSetup: the ID of the player.
  totalCardPool: somehow.


  functions to add :
    shufflecards:
    drawcards: (playerNumber, number of cards) // this then gives x cards and sets them ouf of the total pool.
    Shuffleddeck?. Need to set drawn cards to inPool: false? all cards to inPool: true
    Discarded Cards:
    Playerdeck: ?
    // add description on card. Tagline. Special Power / notes. Instructions.
*/
