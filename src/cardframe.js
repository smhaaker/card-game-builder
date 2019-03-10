let config = {"test": "test"}

let json = {
  "gameName": "SteffenCards",
}

// name of the game, amount of cards
function setupGame(nameOfGame, numberOfCards, maxPlayers){
  let cardArray = []
  for (let i = 0; i < numberOfCards; i++){
    cardArray.push(i)
  }
  return {nameOfGame, numberOfCards, cardArray, maxPlayers}
}

// sets amount of colors in card deck.
function createDeck(numberOfColors){
  return {numberOfColors}
}

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

// creates a general list of powers that can be assigned to card based on array
function createPowers (options) {
  let powers = options
  return powers
}

// sets colors that can be used in cards to identify factions / types
function createColors (options) {
  let colors = options
  return colors
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
        additional: more
      }
    }
    jsonArray.push(element)
  }
  return jsonArray
}

// merging all card sets to a deck
function mergeSets () {
  let completeset;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i+1]) {
      completeset = arguments[i].concat(arguments[i+1])
    }
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


// this is how we utilize unimited arguments
function manyArgs() {
  for (var i = 0; i < arguments.length; ++i)
    console.log(arguments[i]);
    console.log(arguments)
}


module.exports = {
  config: config,
  setupGame: setupGame,
  createDeck: createDeck,
  setAttributes: setAttributes,
  json: json,
  createAttribute: createAttribute,
  createAttributes: createAttributes,
  createPowers: createPowers,
  createColors: createColors,
  mergeSets: mergeSets,
  manyArgs: manyArgs
}
