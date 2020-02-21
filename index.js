// import the library
let cardframe = require('./src/cardframe');
console.log('====================================')
// output cardFrame api functions
console.log(cardframe)
console.log('====================================')

let userCardName = 'cardname'
let description = 'power'
let power = 'spikes'

const create = (amountOfCards, ...args) => {
  const arr = []
    for (let i =0; i< amountOfCards; i++) {

      // some default arguments 
      let card = {
        inplay: false,
        removed: false,
        groupID: null 
      }

      for (let j = 0; j < args.length; j+=2){
        card[args[j]] = args[j+1]
      }
      card.id = i
      arr.push(card)
    }

  return arr
}

// sets card to played
const played = (card, input = true) => {
  return card.inplay = input 
}

const removed = (card, input = true) => {
  return card.inplay = input 
}


// let createed = create(5, userCardName, 'masterCard', description, power)
// console.log(createed)
// played(createed[2])
// console.log(createed)

// let passArr = ['name', 'steffen', 'color', 'blue', 'hp', 12]
// let created3 = create(3, ...passArr)
// played(created3[2])
// console.log(created3)

let created2 = create(2, 'name', 'zeus', 'color', 'white', 'hp', 10)
console.log(created2)
played(created2[1])
removed(created2[0])
console.log(created2)
