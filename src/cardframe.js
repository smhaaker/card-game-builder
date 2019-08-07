let json = {
  "gameName": "SteffenCards",
}

/**
 * Setting Baseline For Game
 * @param {string} nameOfGame - The name of the game
 * @param {Number} numberOfDecks - The total number of complete decks in the game
 (prior to playerDecks, i.e. adding up these decks gives total cards in game at start)
 * @param {Number} minPlayers - The min amount of players allowed
 * @param {Number} maxPlayers - The max amount of players allowed
 * @param {string} description - Game description
 * @returns {Object}
 */
function setupGame(nameOfGame, numberOfDecks, minPlayers, maxPlayers, description){
  let deckArray = []
  for (let i = 0; i < numberOfDecks; i++){
    let element = {id : i}
    deckArray.push(element)
  }
  return {nameOfGame, numberOfDecks, deckArray, minPlayers, maxPlayers, description}
}




// // this could probably be in setupGame.
// /**
//  * Setting Colors or Factions
//  * @param {Number} numberOfColors - Amount of different colors of cards
//  * @returns {Number} numberOfColors
//  */
// function createDeck(numberOfColors){
//   return {numberOfColors}
// }


/**
 * Creating list of powers of the card
 * @param {Array} options - array or object of powers
 * @returns {Array}
 */
function createPowers (options) {
  return options
}

/**
 * Creating list of colors of the cards in deck
 * @param {Array} options - array or object of colors
 * @returns {Array}
 */
function createColors (options) {
  return options
}


function createPlayer(name) {

}
// create player -- this is where we create individual players


// playersSetup. -- this is where we load in the created Players.
// pass in create players values
function playerSetup(numberOfPlayers, minCardsInHand, maxCardsInHand) {

}

// also where we set allowed cards in hand, drawable cards, moves allowed.

// tablesetup -- allowed cards on table. Max / mins.



// setting attributes
function setAttributes(numberOfCards, options){
  // if(!options.teamId) return console.log('teamId required');
  if(!numberOfCards) return console.log('numberOfCards required');
  console.log(numberOfCards)
  options = options || null;
  console.log(options)
}

function createAttribute(one, two, three, optional) {
  let attributeJson = {
    "cards": [
      {
        "name": one,
        "value": 29,
        "color": two,
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          three
        ]
      }
    ]
  }
  return attributeJson
}


// this is the one we use for adding cards. Some default settings some optional
// creates a list of total attributes for card type use ...args for adding the last argumetns
function createAttributes(firstCardInSequence, lastCardInSequence, name, value, color, abilities, description, ...additional) {
  let jsonArray = []
  for (let i = firstCardInSequence; i < lastCardInSequence; i++){
    let element = {
      // cards: {
        id: i,
        cardName: name,
        value: value,
        color: color,
        abilities: abilities,
        description: description,
        additional,
        cardstatus: {
        inplay: false,
        picked: false,
        discarded: false
        // }
      }
    }
    jsonArray.push(element)
  }
  return jsonArray
}

// merging all card sets to a deck
function mergeSets () {
  let completeset;
  if (arguments.length > 0)
  {
    // completeset = arguments[0].concat(arguments[1])
  }
  if (arguments) {
    completeset = arguments[0]
  }
  else {
    console.log('no arguments')
  }
  for (let i = 1; i < arguments.length; i++) {
    // console.log('arguments length ' + i)
    completeset = completeset.concat(arguments[i])

  }
  return completeset
}

function dealCards (cardstoDead){
  console.log(cardstoDead)

}


// card play functions
// runs a check to see if card has been played, discarded or just in hand
function checkCardPlayable (cardID) {
  console.log('checking if cards is playable')
  if (cardID.cardstatus.picked == true || cardID.cardstatus.discarded) {
    console.log('card is not playable')
    return false
  }
  else {
    console.log('card is playable')
    return true
  }
}

// sets true or false if card is in play
// need to clean these to make sure picked / inplay are set differently
function inPlay (cardID, status) {
  // console.log(cardID)
  if (checkCardPlayable(cardID)) {
    return cardID.cardstatus.picked = status
    }
  else {
    return cardID.cardstatus.picked
  }
}

// extra functions for testing
// this is how we utilize unimited arguments
function manyArgs() {
  for (var i = 0; i < arguments.length; ++i)
    console.log(arguments[i]);
    console.log(arguments)
}

// exports
module.exports = {
  setupGame: setupGame,
  // createDeck: createDeck,
  setAttributes: setAttributes,
  // json: json,
  createAttribute: createAttribute,
  createAttributes: createAttributes,
  createPowers: createPowers,
  createColors: createColors,
  mergeSets: mergeSets,
  dealCards: dealCards,
  manyArgs: manyArgs,
  inPlay: inPlay
}
