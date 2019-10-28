// Player 1 define deck
let zeus = createCardSet(2, "Zeus", 50, "red", ['thunderbolt'], 'Zeus is the king of the gods', 'https://www.ancient-origins.net/sites/default/files/field/image/Unshakeable-Power-of-Zeus.jpg')
let cassandra = createCardSet(4, "Cassandra", 5, "red", ['predict'], 'Cassandra predicts the future')
let hera = createCardSet(4, "Hera", 15, "red", ['Mean'], 'Hera is so mean')
let hades = createCardSet(4, "Hades", 25, "red", ['what does he do?'], 'of the underworld')
let dionysius = createCardSet(4, "Dionysius", 69, "red", ['what does he do?'], 'God of the party')
// We merge all the generated 
let deckPlayer1 = mergeSets(zeus, cassandra, hera, hades, dionysius)
console.log(deckPlayer1)

let shuffledPlayer1 = shuffle(deckPlayer1);




// dealAndShowPlayer1()
// console.log(shuffled)

function dealAndShowPlayer1() {
    let cardsDealt = deal(shuffledPlayer1, 5, 1)
    console.log(cardsDealt)
    
    let cardsOutput = document.getElementById('cardsInHand')
    
    cardsOutput.innerHTML = ''
    for (let i = 0; i < cardsDealt.length; i++)
    {
        cardsOutput.innerHTML += `
        <div class="cardShow" id="cardShow${i}" onclick=playCard(${i})>
            <div id="nameCenterSmall">${cardsDealt[i][0].cardName}</div>
            <div class="cardImgDivSmallContainer">
                <img class="cardImgDivSmall" src='${cardsDealt[i][0].additional[0]}' alt="image">
            </div>
            <div id="descSmall">Desc: ${cardsDealt[i][0].description}</div>
            <div id="abilitiesSmall">Abilities: ${cardsDealt[i][0].abilities}</div>
            CardID: ${cardsDealt[i][0].id}

            <div class="valueSmall" id="valueSmall${i}">
                ${cardsDealt[i][0].value} <br/>
            </div>
        </div>`
    

        // cardsOutput.innerHTML += cardsDealt[i][0].cardName
    }
    
}

function playCard(id){
    console.log(id)
    $(`#cardShow${id}`).appendTo("#player1Board");
    let cardId = document.getElementById(`#cardShow${id}`)
    $(`#cardShow${id}`).attr('id',`id_new${id}`);
    // cardsInHand
}




