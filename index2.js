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
// console.log(config)
// console.log('====================================')

// Define a list of colors to use. Passes as an array
let colors = cardframe.createColors(['red', 'white', 'blue'])

// Creating sets of cards from our options.
// Amoung of cards, name, value, color / faction, powers, more stuff
let zeus = cardframe.createCardSet(2, "Zeus", 5, colors[1], ['thunderbolt'], 'Zeus is the king of the gods')
let cassandra = cardframe.createCardSet(4, "Cassandra", 5, colors[1], ['predict'], 'Cassandra predicts the future')
let hera = cardframe.createCardSet(4, "Hera", 5, colors[1], ['Mean'], 'Hera is so mean')
let hades = cardframe.createCardSet(4, "Hades", 5, colors[1], ['what does he do?'], 'of the underworld')
let dionysius = cardframe.createCardSet(4, "Dionysius", 5, colors[1], ['what does he do?'], 'God of the party')
// We merge all the generated 
let deck = cardframe.mergeSets(zeus, cassandra, hera, hades, dionysius)
console.log(deck)

console.log('====================================')


// then we shuffled the cards
let shuffled = cardframe.shuffle(deck);
// console.log(shuffled)

// dealing cards from deck shuffled to 4 players and two cards each
let cardsDealt = cardframe.deal(shuffled, 4, 8)

// console.log("dealt cards: " + JSON.stringify(cardsDealt))
// console.log(cardsDealt)

console.log('player1 / card 2: ' + JSON.stringify(cardsDealt[0][1]))
console.log('player2 / card 2: ' + JSON.stringify(cardsDealt[1][1]))
console.log('player3 / card 2: ' + JSON.stringify(cardsDealt[2][1]))
console.log('player4 / card 2: ' + JSON.stringify(cardsDealt[3][1]))


    if (cardsDealt[0][1].value > cardsDealt[1][1].value)
        {
        console.log("player one wins!")
        }
    else {
        console.log("player 2 wins")
    }


    console.log(shuffled[10])