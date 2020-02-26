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
function setupGame(
  nameOfGame,
  numberOfDecks,
  minPlayers,
  maxPlayers,
  description
) {
  let deckArray = [];
  for (let i = 0; i < numberOfDecks; i++) {
    let element = { id: i };
    deckArray.push(element);
  }
  return {
    nameOfGame,
    numberOfDecks,
    deckArray,
    minPlayers,
    maxPlayers,
    description
  };
}

// create set of cards, all of one type. To be merged later
const createCardSet = (amountOfCards, ...args) => {
  let card;
  const arr = [];
  let status = {
    // default statuses to use.
    inplay: false,
    picked: false,
    discarded: false,
    exhausted: false,
    faceUp: false
    // groupID: null // this is set later
  };
  for (let i = 0; i < amountOfCards; i++) {
    if (args.length === 1) {
      // check if an object is passed instead of arguments.
      card = Object.assign({ groupID: null, status: { ...status } }, ...args);
    } else {
      card = {
        groupID: null,
        status: { ...status }
      };

      for (let j = 0; j < args.length; j += 2) {
        card[args[j]] = args[j + 1];
      }
    }
    card.id = i;
    arr.push(card);
  }
  return arr;
};

// merges sets of cards and assigned card ID's
function mergeSets() {
  let completeSet;
  let totalLength = 0;
  if (arguments.length > 0) {
    // completeset = arguments[0].concat(arguments[1])
  }
  if (arguments) {
    completeSet = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
      for (const card of arguments[i]) {
        card.groupID = i;
        totalLength++;
      }
    }
  } else {
    throw { message: "no input" };
  }
  for (let i = 1; i < arguments.length; i++) {
    for (const card of arguments[i]) {
      card.groupID = i;
    }
    // for (let j = 0; j < arguments[i].length; j++) {
    //   arguments[i][j].status.groupID = i
    // }
    completeSet = completeSet.concat(arguments[i]);
  }
  for (let i = 0; i < totalLength; i++) {
    completeSet[i].id = i;
  }
  return completeSet;
}

// returns input deck reshuffled
function shuffle(deckToShuffle) {
  for (let i = 0; i < deckToShuffle.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (deckToShuffle.length - i));

    let temp = deckToShuffle[j];
    deckToShuffle[j] = deckToShuffle[i];
    deckToShuffle[i] = temp;
  }
  return deckToShuffle;
}

////////

// will reshuffle either the player deck or community deck
function reshuffle(deckToReshuffle) {
  // check if cards are in play or discarded or picked...
  // discarded can be reshuffled. anything else cannot.
}

// card play functions
// runs a check to see if card has been played, discarded or just in hand
function checkCardPlayable(cardID) {
  if (cardID.status.picked == true || cardID.status.discarded) {
    // console.log('card is not playable')
    return false;
  } else {
    // console.log('card is playable')
    return true;
  }
}

// sets true or false if card is in play
// need to clean these to make sure picked / inplay are set differently
const picked = (cardID, status = true) => {
  if (checkCardPlayable(cardID)) {
    return (cardID.status.picked = status);
  } else {
    return cardID.status.picked;
  }
};

// discard card
function discard(cardID, status) {
  return (cardID.status.discarded = status);
}

// // sets card to played
const played = (card, input = true) => {
  card.status.inplay = input;
};

const faceUp = (card, input = true) => {
  card.status.faceUp = input;
};

const exhaust = (card, input = true) => {
  card.status.exhaust = input;
};

const resetStatus = card => {
  // console.log(card.status)
  card.status = {
    inplay: false,
    picked: false,
    discarded: false,
    exhausted: false,
    faceUp: false
  };
  // return card.status.exhaust = false
};

// setting attributes
function setAttributes(numberOfCards, options) {
  if (!numberOfCards) return console.log("numberOfCards required");
  // console.log(numberOfCards)
  options = options || null;
  // console.log(options)
}

// returns a new deck of discarded cards to be reshuffled
function discardedDeck(deckToCheck) {
  let newArr = [];
  for (let i = 0; i < deckToCheck.length; i++) {
    if (deckToCheck[i].status.discarded == true) {
      console.log(i);
      newArr.push(deckToCheck[i]);
      // update to set status discarded to false on returned deck as well.
    }
  }
  return newArr;
}

// card options
// use the card to alter, which value to alter, which action, and by which number
const operation = (card, input, action, number) => {
  // console.log(card[input] * multiplier)
  action = action.toLowerCase();
  if (action === "add") {
    card[input] = card[input] + number;
  } else if (action === "subtract") {
    card[input] = card[input] - number;
  } else if (action === "multiply") {
    card[input] = card[input] * number;
  } else if (action === "divide") {
    card[input] = card[input] / number;
  } else {
    return;
  }
};

// FIX DEAL FUNCTION
// deal function needs a cleaning up.
function deal(deckToDealFrom, playersToDealTo, cardsToEachPlayer) {
  let cardsToDealTotal = cardsToEachPlayer * playersToDealTo;
  let newArr = [];
  for (let i = 0; i < playersToDealTo; i++) {
    newArr[i] = [];
  }
  console.log(newArr);
  let j = 0;
  for (let i = 0; i < cardsToDealTotal; i++) {
    // console.log('testing picked: ' + JSON.stringify(deckToDealFrom[i].status.picked))
    // console.log(deckToDealFrom.length)
    for (let k = 0; k < deckToDealFrom.length; k++) {
      if (deckToDealFrom[k].status.picked === true) {
        console.log("this card has already been picked");
      } else {
        if (cardsToEachPlayer === 1) {
          console.log("first index can be used: " + k);
          newArr[j].push(deckToDealFrom[k]);
          picked(deckToDealFrom[k], true);
          break;
        } else {
          console.log("first index can be used: " + k);
          newArr[j].push(deckToDealFrom[k]);
          picked(deckToDealFrom[k], true);
        }
      }
    }
    if (j > playersToDealTo - 1) {
      j = 0;
      // console.log("J J J ");
    }
    // console.log(i)
    console.log(j);
    // newArr[j].push(deckToDealFrom[i])
    j++;
    // this.picked(deckToDealFrom[i], true)
  }
  //   console.log(newArr)
  return newArr;
}

// assigned passed name to a player id.
function assignPlayers() {
  let playerArr = [];
  for (let i = 0; i < arguments.length; i++) {
    let element = {
      id: i,
      name: arguments[i]
    };
    playerArr.push(element);
  }
  return playerArr;
}

// shows the cards of whichever player is called
function playerCards(playerID, cardsDealtName) {
  let cardArr = [];
  for (let i = 0; i < cardsDealtName[playerID].length; i++) {
    cardArr.push(cardsDealtName[playerID][i]);
  }
  return cardArr;
}

// exports
module.exports = {
  setupGame,
  setAttributes,
  createCardSet,
  mergeSets,
  shuffle,
  picked,
  played,
  discard,
  faceUp,
  exhaust,
  resetStatus,
  discardedDeck,
  operation,
  reshuffle,
  deal,
  assignPlayers,
  playerCards
};

// todos. finish refactor.
