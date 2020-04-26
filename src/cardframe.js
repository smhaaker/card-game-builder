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
  description,
) {
  const deckArray = [];
  for (let i = 0; i < numberOfDecks; i++) {
    const element = { id: i };
    deckArray.push(element);
  }
  return {
    nameOfGame,
    numberOfDecks,
    deckArray,
    minPlayers,
    maxPlayers,
    description,
  };
}

// create set of cards, all of one type. To be merged later
const createCardSet = (amountOfCards, ...args) => {
  let card;
  const arr = [];
  const status = {
    // default statuses to use.
    inplay: false,
    picked: false,
    discarded: false,
    exhausted: false,
    faceUp: false,
  };
  for (let i = 0; i < amountOfCards; i++) {
    if (args.length === 1) {
      // check if an object is passed instead of arguments.
      card = Object.assign({
        groupID: null,
        status: { ...status },
      }, ...args);
    } else {
      card = {
        groupID: null,
        status: { ...status },
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
function mergeSets(...args) {
  let completeSet;
  let totalLength = 0;
  if (arguments.length > 0) {
    // completeset = arguments[0].concat(arguments[1])
  }
  if (args) {
    // completeSet = args[0];
    [completeSet] = args;
    for (let i = 0; i < args.length; i++) {
      for (const card of args[i]) {
        card.groupID = i;
        totalLength++;
      }
    }
  } else {
    throw { message: 'no input' };
  }
  for (let i = 1; i < args.length; i++) {
    for (const card of args[i]) {
      card.groupID = i;
    }
    completeSet = completeSet.concat(args[i]);
  }
  for (let i = 0; i < totalLength; i++) {
    completeSet[i].id = i;
  }
  return completeSet;
}

// returns input deck reshuffled
function shuffle(deckToShuffle) {
  for (let i = 0; i < deckToShuffle.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (deckToShuffle.length - i));
    const temp = deckToShuffle[j];
    deckToShuffle[j] = deckToShuffle[i];
    deckToShuffle[i] = temp;
  }
  return deckToShuffle;
}


// will reshuffle either the player deck or community deck
function reshuffle(deckToReshuffle) {
  // check if cards are in play or discarded or picked...
  // discarded can be reshuffled. anything else cannot.
}

// card play functions
// runs a check to see if card has been played, discarded or just in hand
function checkCardPlayable(cardID) {
  if (cardID.status.picked || cardID.status.discarded) {
    throw { message: 'Card cannot be played' };
    // return false;
  }
  console.log('card is playable')
  return true;
}

// Status functions
// const picked = (cardID, status = true) => {
//   if (checkCardPlayable(cardID)) {
//     return (cardID.status.picked = status);
//   }
//   return cardID.status.picked;
// };


const picked = (card, input = true) => {
  card.status.picked = input;
};

// // discard card
const discard = (card, input = true) => {
  card.status.discarded = input;
};

// // sets card to played
const played = (card, input = true) => {
  card.status.inplay = input;
};

const playedFromPlayerArray = (playerInput, card, input = true) => {
  card.status.inplay = input;
  removeCardPlayer(playerInput, card);
};


const faceUp = (card, input = true) => {
  card.status.faceUp = input;
};

const exhaust = (card, input = true) => {
  card.status.exhausted = input;
};

// call to reset all statuses
const resetStatus = (card) => {
  // console.log(card.status)
  card.status = {
    inplay: false,
    picked: false,
    discarded: false,
    exhausted: false,
    faceUp: false,
  };
  // return card.status.exhaust = false
};

// card options
// use the card to alter, which value to alter, which action, and by which number
const operation = (card, input, action, number) => {
  // console.log(card[input] * multiplier)
  action = action.toLowerCase();
  if (action === 'add') {
    card[input] += number;
  } else if (action === 'subtract') {
    card[input] -= number;
  } else if (action === 'multiply') {
    card[input] *= number;
  } else if (action === 'divide') {
    card[input] /= number;
  }
};

// returns a new deck of discarded cards to be reshuffled
// default resets status all cards of new deck. Use reset = false in order to keep status of card
const discardedDeck = (deckToCheck, reset = true) => {
  const newArr = [];
  for (let i = 0; i < deckToCheck.length; i++) {
    if (deckToCheck[i].status.discarded === true) {
      if (reset) {
        resetStatus(deckToCheck[i])
      }
      newArr.push(deckToCheck[i]);

    }
  }
  return newArr;
};


// Refactor this.
// deal function needs a cleaning up.
function deal(deckToDealFrom, playersToDealTo, cardsToEachPlayer) {
  if (arguments.length === 0) {
    throw { message: 'no arguments' };
  }
  const totalCards = cardsToEachPlayer * playersToDealTo.length;
  console.log(`Deal ${totalCards} total cards`);
  if (totalCards > deckToDealFrom.length) {
    throw { message: 'no that many cards in deck, deal fewer or reshuffle deck' };
  }
  // also error check for cards which are not already picked. 
  // setting up 2d array for players to store cards
  const newArr = [];
  for (let i = 0; i < playersToDealTo.length; i++) {
    newArr[i] = [];
  }

  let j = 0;

  for (let i = 0; i < totalCards; i++) {
    console.log(`Dealing card: ${i} to player ${j}`);

    // deal next available card from the deck. Then mark it picked.
    for (let k = 0; k < deckToDealFrom.length; k++) {
      if (deckToDealFrom[k].status.picked === true) {
        console.log('this card has been picked');
      } else {
        console.log('you can use this card');
        pushCardToPlayer(playersToDealTo[j], deckToDealFrom[k]);
        newArr[j].push(deckToDealFrom[k]);
        picked(deckToDealFrom[k], true);
        break;
      }
    }

    j++;
    if (j > playersToDealTo.length - 1) {
      j = 0;
    }
  }
  // console.log('Dealt Cards Are:');
  // console.log(newArr);
  return newArr; // not sure we need to return the array here. 
}

// setupPlayer sets up player with id, name and cards array
const setupPlayer = (name) => {
  let cards = [];
  const player = {
    name,
    cards,
  };
  return player;
};

// assigned passed name to a player id and an array.
function assignPlayers(...args) {
  const playerArr = [];
  for (let i = 0; i < args.length; i++) {
    const element = {
      id: i,
      details: setupPlayer(args[i]),
    };
    playerArr.push(element);
  }
  return playerArr;
}

// shows the cards of whichever player is called
function playerCards(playerID, cardsDealtName) {
  const cardArr = [];
  for (let i = 0; i < cardsDealtName[playerID].length; i++) {
    cardArr.push(cardsDealtName[playerID][i]);
  }
  return cardArr;
}

const pushCardToPlayer = (playerInput, cardToPush) => {
  // console.log(cardToPush)
  playerInput.details.cards.push(cardToPush);
  // console.log('console.log from pushcardtoplayer');
  // console.log(playerInput.details);
};

const removeCardPlayer = (playerInput, cardToSplice) => {
  console.log(' from removeCardFrom PLayer')
  console.log(playerInput)
  // console.log(playerInput.details.cards)
  console.log(cardToSplice)

const index = playerInput.details.cards.indexOf(cardToSplice);
console.log(index)
if (index > -1) {
  playerInput.details.cards.splice(index, 1);
console.log('splicing')
}

}

// exports
module.exports = {
  setupGame,
  createCardSet,
  mergeSets,
  shuffle,
  picked,
  played,
  playedFromPlayerArray,
  discard,
  faceUp,
  exhaust,
  checkCardPlayable,
  resetStatus,
  discardedDeck,
  operation,
  reshuffle,
  deal,
  assignPlayers,
  setupPlayer,
  playerCards,
  removeCardPlayer,
};

// we need to consider how to update the cards to discarded etc now that we are storing cards in player array. 
