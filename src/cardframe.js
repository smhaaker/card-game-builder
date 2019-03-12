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



// creates a list of total attributes for card type use ...args for adding the last argumetns
function createAttributes(firstCardInSequence, lastCardInSequence, name, value, color, three, ...more) {
  let jsonArray = []
  for (let i = firstCardInSequence; i < lastCardInSequence; i++){
    let element = {
      cards: {
        id: i,
        cardName: name,
        value: value,
        color: color,
        powers: three,
        additional: more,
        inplay: false,
        picked: false,
        discarded: false
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
    // if (arguments[i+1]) {
    //   completeset = completeset.concat(arguments[i])
    //   // console.log('arguments length ' + i)
    // }
  }
  // if (arguments[2]){
  //   console.log('there is an arugment')
  // }
  // else {
  //   console.log('there is NOT an arugment')
  // }
  // let completeset = set1.concat(set2);
  return completeset
}

// sets true or false if card is in play
function inPlay (cardID, status) {
  // console.log(cardID)
  if (checkCardPlayable(cardID))
    {return cardID.cards.picked = status;}
}

// runs a check to see if card has been played, discarded or just in hand
function checkCardPlayable (cardID) {
  console.log('checking if cards is playable')
  if (cardID.cards.picked == true || cardID.cards.discarded) {
    console.log('card is not playable')
    return false
  }
  else {
    console.log('card is playable')
    return true
  }
}

// this is how we utilize unimited arguments
function manyArgs() {
  for (var i = 0; i < arguments.length; ++i)
    console.log(arguments[i]);
    console.log(arguments)
}


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
  manyArgs: manyArgs,
  inPlay: inPlay
}
