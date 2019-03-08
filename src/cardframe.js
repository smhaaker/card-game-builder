let config = {"test": "test"}

let json = {
  "gameName": "SteffenCards",
}

// name of the game, amount of cards
function setupGame(nameOfGame, numberOfCards){
  let cardArray = []
  for (let i = 0; i < numberOfCards; i++){
    cardArray.push(i)
  }
  return {nameOfGame, numberOfCards, cardArray}
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

// creates a list of total attributes for card type
function createAttributes(jsonLenght, name, value, color, three, optional, more) {
  let jsonArray = []
  for (let i = 0; i < jsonLenght; i++){
    let element = {
      cards: {
        id: i,
        cardName: name,
        value: value,
        color: color,
        powers: three,
        optional: optional
      }
    }
    jsonArray.push(element)
  }
  return jsonArray
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
  createColors: createColors
}
