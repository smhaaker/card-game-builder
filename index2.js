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
let set1 = cardframe.createAttributes(0, 4, "Zeus", 5, colors[1], powers, "base card, goof for something", "upgrades"+[4])
let set2 = cardframe.createAttributes(4, 8, "Hera", 2, "red", "not a very good card", "falcon fury", "cool stuff")

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

let set3 = cardframe.createAttributes(8, 12, "Cassandra", 10, colors[2], powers2, "really strong card", additional)




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


let shuffled = cardframe.shuffle(deck);
// console.log("These cards are shuffled: " + shuffled)

let cardsDealt = cardframe.deal(shuffled, 4, 8)

// console.log("dealt cards: " + JSON.stringify(cardsDealt))
console.log('player1 / card 2: ' + JSON.stringify(cardsDealt[0][1]))
console.log('player2 / card 2: ' + JSON.stringify(cardsDealt[1][1]))
// console.log('player3 / card 2: ' + JSON.stringify(cardsDealt[2][1]))
// console.log('player4 / card 2: ' + JSON.stringify(cardsDealt[3][1]))


    if (cardsDealt[0][1].value > cardsDealt[1][1].value)
        {
        console.log("player one wins!")
        }
    else {
        console.log("player 2 wins")
    }
