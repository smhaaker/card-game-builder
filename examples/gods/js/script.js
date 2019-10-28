// player 1 Defs:
let healthPlayer1 = 100;
let actionsPlayer1 = 3;

// player 2 Defs:
let healthPlayer2 = 100;
let actionsPlayer2   = 3;

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

// Player 2 define deck
let jupiter = createCardSet(2, "Zeus", 50, "red", ['thunderbolt'], 'Zeus is the king of the gods', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Jupiter-The-King-of-Gods.jpg')
let apollo = createCardSet(4, "Cassandra", 5, "red", ['predict'], 'Cassandra predicts the future')
let mars = createCardSet(4, "Hera", 15, "red", ['Mean'], 'Hera is so mean', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Mars-The-God-of-War.jpg')
let pluto = createCardSet(4, "Hades", 25, "red", ['what does he do?'], 'of the underworld', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Pluto-The-God-of-Underworld.jpg')
let neptune = createCardSet(4, "Dionysius", 69, "red", ['what does he do?'], 'God of the party', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Neptune-The-Roman-God-of-Sea.jpg')
// We merge all the generated 
let deckPlayer2 = mergeSets(jupiter, apollo, mars, pluto, neptune)
console.log(deckPlayer2)

let shuffledPlayer2 = shuffle(deckPlayer2);


// dealAndShowPlayer1()
// console.log(shuffled)

function dealAndShowPlayer1() {
    let cardsDealt = deal(shuffledPlayer1, 5, 1)
    console.log(cardsDealt)

    
    let playerHealthInfo = document.getElementById('player1Health')
    playerHealthInfo.innerHTML = `Health ${healthPlayer1}`
    let playerMovesInfo = document.getElementById('player1Moves')
    playerMovesInfo.innerHTML = `Actions: ${actionsPlayer1}`
    let cardsOutput = document.getElementById('cardsInHand')
    let cardsLeftInDeck = document.getElementById('player1deckcards')
    cardsLeftInDeck.innerHTML = shuffledPlayer1.length - cardsDealt.length

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
              <div class="valueSmall" id="valueSmall${i}">
                ${cardsDealt[i][0].value} <br/>
            </div>
        </div>`
        // cardsOutput.innerHTML += cardsDealt[i][0].cardName
    }

}

function playCard(id){
    if (actionsPlayer1 <= 0){
        console.log('no moves left!')
    }
    else {
        console.log(id)
        $(`#cardShow${id}`).appendTo("#player1Board");
        let cardId = document.getElementById(`#cardShow${id}`)
        $(`#cardShow${id}`).attr('id',`id_new${id}`);
        // cardsInHand
        actionsPlayer1--;
        let playerMovesInfo = document.getElementById('player1Moves')
        playerMovesInfo.innerHTML = `Actions: ${actionsPlayer1}`
    }
}

function dealAndShowPlayer2() {
    let cardsDealt = deal(shuffledPlayer2, 5, 1)
    console.log(cardsDealt)
    
        
    let playerHealthInfo = document.getElementById('player2Health')
    playerHealthInfo.innerHTML = `Health: ${healthPlayer2}`
    let playerMovesInfo = document.getElementById('player2Moves')
    playerMovesInfo.innerHTML = `Actions: ${actionsPlayer2}`
    let cardsOutput = document.getElementById('cardsInHandPlayer2')
    let cardsLeftInDeck = document.getElementById('player2deckcards')
    cardsLeftInDeck.innerHTML = shuffledPlayer2.length - cardsDealt.length
    cardsOutput.innerHTML = ''
    for (let i = 0; i < cardsDealt.length; i++)
    {
        cardsOutput.innerHTML += `
        <div class="cardShow" id="cardShowPlayer2${i}" onclick=playCardPlayer2(${i})>
            <div id="nameCenterSmall">${cardsDealt[i][0].cardName}</div>
            <div class="cardImgDivSmallContainer">
                <img class="cardImgDivSmall" src='${cardsDealt[i][0].additional[0]}' alt="image">
            </div>
            <div id="descSmall">Desc: ${cardsDealt[i][0].description}</div>
            <div id="abilitiesSmall">Abilities: ${cardsDealt[i][0].abilities}</div>
            <div class="valueSmall" id="valueSmall${i}">
                ${cardsDealt[i][0].value} <br/>
            </div>
        </div>`
        // cardsOutput.innerHTML += cardsDealt[i][0].cardName
    }
}

function playCardPlayer2(id){
    if (actionsPlayer2 <= 0){
        console.log('no moves left!')
    }
    else {
        console.log(id)
        $(`#cardShowPlayer2${id}`).appendTo("#player2Board");
        let cardId = document.getElementById(`#cardShowPlayer2${id}`)
        $(`#cardShowPlayer2${id}`).attr('id',`id_new${id}`);
        // cardsInHand
        actionsPlayer2--;
        let playerMovesInfo = document.getElementById('player2Moves')
        playerMovesInfo.innerHTML = `Actions: ${actionsPlayer2}`
    }
}

function dealCards() {
    dealAndShowPlayer1()
    dealAndShowPlayer2()
}


