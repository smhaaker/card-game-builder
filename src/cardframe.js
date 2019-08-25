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


// setting attributes
function setAttributes(numberOfCards, options){
  // if(!options.teamId) return console.log('teamId required');
  if(!numberOfCards) return console.log('numberOfCards required');
  // console.log(numberOfCards)
  options = options || null;
  // console.log(options)
}


// this is the one we use for adding cards. Some default settings some optional
// creates a list of total attributes for card type use ...args for adding the last argumetns
function createCardSet(amountOfCards, name, value, color, abilities, description, ...additional) {
  let jsonArray = []
  for (let i = 0; i < amountOfCards; i++){
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

// merges sets of cards and assigned card ID's
function mergeSets () {
  let completeSet
  let totalLength = 0
  if (arguments.length > 0)
  {
    // completeset = arguments[0].concat(arguments[1])
  }
  if (arguments) {
    completeSet = arguments[0]
    for (let i = 0; i < arguments.length; i++){
      for (let j = 0; j< arguments[i].length; j++){
        totalLength++
      }
    }
  }
  else {
    console.log('no arguments')
  }
  // console.log('Total cards is: ' + totalLength)
  for (let i = 1; i < arguments.length; i++) {
    // console.log('arguments length ' + i)
    completeSet = completeSet.concat(arguments[i])

  }
  for (let i = 0; i < totalLength; i++){
    completeSet[i].id = i+1
    // console.log(completeSet[i].id)
  }
  return completeSet
}

// card play functions
// runs a check to see if card has been played, discarded or just in hand
function checkCardPlayable (cardID) {
  // console.log('checking if cards is playable')
  if (cardID.cardstatus.picked == true || cardID.cardstatus.discarded) {
    // console.log('card is not playable')
    return false
  }
  else {
    // console.log('card is playable')
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

function shuffle(deckToShuffle) {
  for (let i = 0; i < deckToShuffle.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (deckToShuffle.length - i));

      let temp = deckToShuffle[j];
      deckToShuffle[j] = deckToShuffle[i];
      deckToShuffle[i] = temp;
  }
  return deckToShuffle;
}


function deal(deckToDealFrom, playersToDealTo, cardsToEachPlayer) {
    let cardsToDealTotal = cardsToEachPlayer * playersToDealTo
    let newArr = []
      for(let i=0;i<playersToDealTo;i++){
        newArr[i]=[];
      }

    // console.log("amount of players:  " + newArr.length)
    // console.log(newArr)
    let j = 0
    // console.log('deckToDealFrom ' + deckToDealFrom)
    // console.log('playersToDealTo ' + playersToDealTo)
    // console.log('cardsToDeal ' + cardsToDealTotal)
    for (let i = 0; i < cardsToDealTotal; i++){
      if (j > playersToDealTo-1) {
        j = 0;
      }

      // console.log(i)
      // console.log(j)

      newArr[j].push(deckToDealFrom[i])
      j++
      this.inPlay(deckToDealFrom[i], true)
    }
  //   console.log(newArr)
    return newArr;
  }


// assigned passed name to a player id. 
function assignPlayers() {
  let playerArr = []
  for (let i = 0; i < arguments.length; i++){
    let element = {
        id: i,
        name: arguments[i],
      }
    playerArr.push(element)
  }
  return playerArr
}


// shows the cards of whichever player is called
function playerCards(playerID, cardsDealtName) {
  let cardArr = []
  for (let i = 0; i < cardsDealtName[playerID].length; i ++)
    {
      cardArr.push(cardsDealtName[playerID][i])
    }
    return cardArr
}

// we should also assign cards deck to player in a function. 

// also some sort stats

// exports
module.exports = {
  setupGame: setupGame,
  // createDeck: createDeck,
  setAttributes: setAttributes,
  createCardSet: createCardSet,
  createPowers: createPowers,
  createColors: createColors,
  mergeSets: mergeSets,
  // dealCards: dealCards,
  manyArgs: manyArgs,
  inPlay: inPlay,
  shuffle: shuffle,
  deal: deal,
  assignPlayers: assignPlayers,
  playerCards: playerCards
}
