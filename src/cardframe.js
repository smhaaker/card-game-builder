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
    // groupID: null // this is set later
  };
  for (let i = 0; i < amountOfCards; i++) {
    if (args.length === 1) {
      // check if an object is passed instead of arguments.
      card = Object.assign({ groupID: null, status: { ...status } }, ...args);
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
    completeSet = args[0];
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
    // for (let j = 0; j < arguments[i].length; j++) {
    //   arguments[i][j].status.groupID = i
    // }
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
  if (cardID.status.picked === true || cardID.status.discarded) {
    throw { message: 'Card cannot be played' };
    // return false;
  }
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

// discard card
const discard = (card, input = true) => {
  card.status.discarded = input;
};

// // sets card to played
const played = (card, input = true) => {
  card.status.inplay = input;
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

// returns a new deck of discarded cards to be reshuffled
function discardedDeck(deckToCheck) {
  const newArr = [];
  for (let i = 0; i < deckToCheck.length; i++) {
    if (deckToCheck[i].status.discarded === true) {
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

// Refactor this.
// deal function needs a cleaning up.
function deal(deckToDealFrom, playersToDealTo, cardsToEachPlayer) {
  if (arguments.length === 0) {
    throw { message: 'no arguments' };
  }
  const totalCards = cardsToEachPlayer * playersToDealTo;
  console.log(`Deal ${totalCards} total`);

  // setting up 2d array for players to store cards
  const newArr = [];
  for (let i = 0; i < playersToDealTo; i++) {
    newArr[i] = [];
  }
  console.log('new array is');
  console.log(newArr);
}

// function deal(deckToDealFrom, playersToDealTo, cardsToEachPlayer) {
//   if (arguments.length === 0) {
//     throw { message: 'no arguments' };
//   }
//   const cardsToDealTotal = cardsToEachPlayer * playersToDealTo;
//   console.log(cardsToDealTotal);
//   const newArr = [];
//   // setting up 2d array for players to store cards
//   for (let i = 0; i < playersToDealTo; i++) {
//     newArr[i] = [];
//   }
//   console.log(newArr);
//   let j = 0;
//   for (let i = 0; i < cardsToDealTotal; i++) {
//     console.log('testing picked: ' + JSON.stringify(deckToDealFrom[i].status.picked))
//     console.log(deckToDealFrom.length)
//     for (let k = 0; k < deckToDealFrom.length; k++) {
//         // if (deckToDealFrom[k].status.picked === true) {
//         //   console.log("this card has already been picked");
//         // } else {
//         //   if (cardsToEachPlayer === 1) {
//         //     console.log("first index can be used: " + k);
//         //     newArr[j].push(deckToDealFrom[k]);
//         //     picked(deckToDealFrom[k], true);
//         //     break;
//         //   } else {
//         //     console.log("first index can be used: " + k);
//         //     newArr[j].push(deckToDealFrom[k]);
//         //     picked(deckToDealFrom[k], true);
//         //   }
//         // }
//       console.log('cards....');
//       console.log(deckToDealFrom[k]);
//       // newArr[j].push(deckToDealFrom[k]);
//       // newArr[j].push('a card');
//       newArr[0].push(deckToDealFrom[k]);
//     }
//     if (j > playersToDealTo - 1) {
//       j = 0;
//       // console.log("J J J ");
//     }
//     // console.log(i)
//     console.log(j);
//     // newArr[j].push(deckToDealFrom[i])
//     j++;
//     // this.picked(deckToDealFrom[i], true)
//   }
//   // console.log(newArr);
//   return newArr;
// }

// assigned passed name to a player id.
function assignPlayers(...args) {
  const playerArr = [];
  for (let i = 0; i < args.length; i++) {
    const element = {
      id: i,
      name: args[i],
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

// exports
module.exports = {
  setupGame,
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
  playerCards,
};
