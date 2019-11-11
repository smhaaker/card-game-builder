// player 1 Defs:
let healthPlayer1 = 100;
let actionsPlayer1 = 15;
let dealCardsPlayer1 = true; // if true, you are allowed to have cards dealt. Turns false on use up of actions.
let cardsLeftInDeckPlayer1 = 0;
let cardsInHandPlayer1 = 0;
const maxCardsInHandPlayer1 = 7;
let totalCardsBlockPlayer1 = 0;
let cardBorderPlayer1 = '#39CCCC'
let cardsDrawnPlayer1 = 0;

// player 2 Defs:
let healthPlayer2 = 100;
let actionsPlayer2   = 15;
let dealCardsPlayer2 = true; // if true, you are allowed to have cards dealt. Turns false on use up of actions.
let cardsLeftInDeckPlayer2 = 0;
let cardsInHandPlayer2 = 0;
const maxCardsInHandPlayer2 = 7;
let totalCardsBlockPlayer2 = 0;
let cardBorderPlayer2 = '#FF851B'
let cardsDrawnPlayer2 = 0;

let currentPlayer = 1;


// Player 1 define deck
// need to set url as standard in framework. 
// also need to set health,,.. or at least swap out HP for health on display
let zeus = createCardSet(2, "Zeus", 50, cardBorderPlayer1, ['thunderbolt'], 'Zeus is the king of the gods', 'https://www.ancient-origins.net/sites/default/files/field/image/Unshakeable-Power-of-Zeus.jpg')
let cassandra = createCardSet(4, "Cassandra", 5, cardBorderPlayer1, ['predict'], 'Cassandra predicts the future')
let hera = createCardSet(4, "Hera", 15, cardBorderPlayer1, ['Mean'], 'Hera is so mean')
let hades = createCardSet(4, "Hades", 25, cardBorderPlayer1, ['what does he do?'], 'of the underworld')
let dionysius = createCardSet(4, "Dionysius", 69, cardBorderPlayer1, ['what does he do?'], 'God of the party')
// healing god
let asclepius  = createCardSet(4, "Asclepius", 5, cardBorderPlayer1, ['what does he do?'], 'God of healing', 'Urlgoeshere', 'health: +5')

// We merge all the generated 
let deckPlayer1 = mergeSets(zeus, cassandra, hera, hades, dionysius, asclepius)
console.log(deckPlayer1)

let shuffledPlayer1 = shuffle(deckPlayer1);

// Player 2 define deck
let jupiter = createCardSet(2, "jupiter", 50, cardBorderPlayer2, ['thunderbolt'], 'Zeus is the king of the gods', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Jupiter-The-King-of-Gods.jpg')
let apollo = createCardSet(4, "apollo", 5, cardBorderPlayer2, ['predict'], 'Cassandra predicts the future')
let mars = createCardSet(4, "mars", 15, cardBorderPlayer2, ['Mean'], 'Hera is so mean', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Mars-The-God-of-War.jpg')
let pluto = createCardSet(4, "pluto", 25, cardBorderPlayer2, ['what does he do?'], 'of the underworld', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Pluto-The-God-of-Underworld.jpg')
let neptune = createCardSet(4, "neptune", 69, cardBorderPlayer2, ['what does he do?'], 'God of the party', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Neptune-The-Roman-God-of-Sea.jpg')
// healing god
let vejovis  = createCardSet(4, "Vejovis", 5, cardBorderPlayer1, ['what does he do?'], 'God of healing', 'Urlgoeshere', 'health: +5')


// We merge all the generated 
let deckPlayer2 = mergeSets(jupiter, apollo, mars, pluto, neptune, vejovis)
console.log(deckPlayer2)

let shuffledPlayer2 = shuffle(deckPlayer2);

function cardDealLoop(playerNumber) {

}

function dealAndShowPlayer1() {
    let cardsDealt = deal(shuffledPlayer1, 5, 1)
    console.log(cardsDealt)

    updatePlayerStats(1, healthPlayer1, actionsPlayer1) 

    let cardsOutput = document.getElementById('cardsInHandPlayer1')
    let cardsLeftInDeck = document.getElementById('player1deckcards')
    cardsLeftInDeck.innerHTML = shuffledPlayer1.length - cardsDealt.length
    cardsOutput.innerHTML = ''

    for (let i = 0; i < cardsDealt.length; i++)
    {
        cardsOutput.innerHTML += `
        <div class="cardShow" id="cardShowPlayer1-${i}" onclick=placeCardPlayer1(${i})>
            
            <div id="nameCenterSmall">${cardsDealt[i][0].cardName}</div>
            <div class="cardImgDivSmallContainer">
                <img class="cardImgDivSmall" src='${cardsDealt[i][0].additional[0]}' alt="image">
            </div>
              <div class="valueSmall" id="valueSmall${i}">
                ${cardsDealt[i][0].energy} <br/>
            </div>

            <div class="cardInfo">
                ${cardsDealt[i][0].cardName}<br/>
                ${cardsDealt[i][0].description}<br/>
                Deals ${cardsDealt[i][0].energy} damage<br/>
                ${cardsDealt[i][0].abilities} </br>
            </div>

        </div>`
        cardsInHandPlayer1++
    }
    // sets color for card from defined defaults... But this sets it for the entire class
    let className = document.getElementsByClassName('cardShow');
    let valueSmallP1 = document.getElementsByClassName('valueSmall');
    for(let i=0; i<className.length; i++) { 
        className[i].style.borderColor = cardBorderPlayer1;
        valueSmallP1[i].style.borderColor = cardBorderPlayer1;
        // console.log(cardsDealt[i][0].color)
    }

}


function placeCardPlayer1(id){
    if (actionsPlayer1 <= 0){
        updateStatus(`No Moves Left, Please End Turn`, 1)
    }
    else {
        console.log("placing card: " + id)
        // console.log(shuffledPlayer2[id])
        // console.log('playing card: ' + JSON.stringify(shuffledPlayer2[id].id))
        $(`#cardShowPlayer1-${id}`).appendTo("#player1Board");
        // let cardId = document.getElementById(`#cardShowPlayer2-${id}`)
        $(`#cardShowPlayer1-${id}`).attr('id',`id_new${id}`);
        $(`#id_new${id}`).attr("onclick",`playCardPlayer1("${id}")`);
        actionsPlayer1--
        cardsInHandPlayer1--
        updatePlayerStats(1, healthPlayer1, actionsPlayer1)


        // console.log(id)
        // $(`#cardShowPlayer1-${id}`).appendTo("#player1Board");
        // let cardId = document.getElementById(`#cardShowPlayer1-${id}`)
        // $(`#cardShowPlayer1-${id}`).attr('id',`id_new${id}`);
        // // cardsInHand
        // actionsPlayer1--;
        // cardsInHandPlayer1--;
        // let playerMovesInfo = document.getElementById('player1Moves')
        // let totalBlock = document.getElementById('blockPlayer1')
        // console.log(shuffledPlayer1[id].energy)
        // totalCardsBlockPlayer1 += shuffledPlayer1[id].energy
        // totalBlock.innerHTML = `Total Block: ${totalCardsBlockPlayer1}`
        // playerMovesInfo.innerHTML = `Actions: ${actionsPlayer1}`
    }
}

function placeCardPlayer2(id){
    if (actionsPlayer2 <= 0){
        updateStatus(`No Moves Left, Please End Turn`, 2)
    }
    else {
        console.log("placing card: " + id)
        // console.log(shuffledPlayer2[id])
        // console.log('playing card: ' + JSON.stringify(shuffledPlayer2[id].id))
        $(`#cardShowPlayer2-${id}`).appendTo("#player2Board");
        // let cardId = document.getElementById(`#cardShowPlayer2-${id}`)
        $(`#cardShowPlayer2-${id}`).attr('id',`id_new${id}`);
        $(`#id_new${id}`).attr("onclick",`playCardPlayer2("${id}")`);
        actionsPlayer2--
        cardsInHandPlayer2--
        updatePlayerStats(2, healthPlayer2, actionsPlayer2)
    }
}

function dealAndShowPlayer2() {
    let cardsDealt = deal(shuffledPlayer2, 5, 1)
    console.log(cardsDealt)   
        
    updatePlayerStats(2, healthPlayer2, actionsPlayer2)

    // make this a function to reuse
    let cardsLeftInDeck = document.getElementById('player2deckcards')
    cardsLeftInDeckPlayer1 = shuffledPlayer1.length - cardsDealt.length
    cardsLeftInDeck.innerHTML = cardsLeftInDeckPlayer1
    
    let cardsOutput = document.getElementById('cardsInHandPlayer2')
    cardsOutput.innerHTML = ''

    for (let i = 0; i < cardsDealt.length; i++)
    {
        console.log(cardsOutput[i])
        cardsOutput.innerHTML += `
        <div class="cardShowPlayer2" id="cardShowPlayer2-${cardsDrawnPlayer2}" onclick=placeCardPlayer2(${cardsDrawnPlayer2})>
            <div id="nameCenterSmall">${cardsDealt[i][0].cardName}</div>
            <div class="cardImgDivSmallContainer">
                <img class="cardImgDivSmall" src='${cardsDealt[i][0].additional[0]}' alt="image">
            </div>
            <div class="valueSmallP2" id="valueSmall${i}">
                ${cardsDealt[i][0].energy} <br/>
            </div>

            <div class="cardInfoPlayer2">
                ${cardsDealt[i][0].cardName}<br/>
                ${cardsDealt[i][0].description}<br/>
                Deals ${cardsDealt[i][0].energy} damage<br/>
                ${cardsDealt[i][0].abilities} </br>
            </div>

        </div>`
        cardsInHandPlayer2++
        cardsDrawnPlayer2++
    }
    let className = document.getElementsByClassName('cardShowPlayer2');
    let valueSmallP2 = document.getElementsByClassName('valueSmallP2');
    for(let i=0; i<className.length; i++) { 
        className[i].style.borderColor = cardBorderPlayer2;
        valueSmallP2[i].style.borderColor = cardBorderPlayer2;
        // console.log(cardsDealt[i][0].color)
    }
}

function playCardPlayer1(id){
    console.log('playing card: ' + id)
    if (actionsPlayer1 <= 0){
        updateStatus(`No Moves Left, Please End Turn`, 1)
    }
    else if (healthPlayer2 <= 0) {
        updateStatus(`How about that, you won`, 1)
    } 
    else {
        console.log(shuffledPlayer1[id])
        healthPlayer2 -= shuffledPlayer1[id].energy
        actionsPlayer1--
        if (healthPlayer2 <= 0){
            healthPlayer2 = 0;
            updateStatus(`How about that, you won`, 2)
        }
        updatePlayerStats(2, healthPlayer2, actionsPlayer2)
        updatePlayerStats(1, healthPlayer1, actionsPlayer1)
    }
}

function playCardPlayer2(id){
    console.log('playing card: ' + id)
    if (actionsPlayer2 <= 0){
        updateStatus(`No Moves Left, Please End Turn`, 2)
    }
    else if (healthPlayer1 <= 0) {
        updateStatus(`How about that, you won`, 2)
    } 
    else {
        console.log(shuffledPlayer2[id])
        healthPlayer1 -= shuffledPlayer2[id].energy
        actionsPlayer2--
        if (healthPlayer1 <= 0){
            healthPlayer1 = 0;
            updateStatus(`How about that, you won`, 2)
        }
        updatePlayerStats(2, healthPlayer2, actionsPlayer2)
        updatePlayerStats(1, healthPlayer1, actionsPlayer1)
    }
}

// this function works but deals the first card of the complete deck instead of the new deck... Need to fix this
function drawCardPlayer1() {
    let cardsOutput = document.getElementById('cardsInHandPlayer1')
    if (actionsPlayer1 <= 0){
        console.log('no moves left!')
        updateStatus(`No Moves Left, Please End Turn`, 1)
    }
    else if (cardsInHandPlayer1 >= maxCardsInHandPlayer1){
        updateStatus(`Max Cards In Hand`,1)
    }
    else {
        let cardsDealt = deal(shuffledPlayer1, 1, 1)
        console.log(cardsDealt)

        for (let i = 0; i < cardsDealt.length; i++)
        {
            cardsOutput.innerHTML += `
            <div class="cardShow" id="cardShowPlayer1-${i}" onclick=placeCardPlayer1(${i})>
                <div id="nameCenterSmall">${cardsDealt[i][0].cardName}</div>
                <div class="cardImgDivSmallContainer">
                    <img class="cardImgDivSmall" src='${cardsDealt[i][0].additional[0]}' alt="image">
                </div>
                  <div class="valueSmall" id="valueSmall${i}">
                    ${cardsDealt[i][0].energy} <br/>
                </div>
                <div class="cardInfo">
                    ${cardsDealt[i][0].cardName}<br/>
                    ${cardsDealt[i][0].description}<br/>
                    Deals ${cardsDealt[i][0].energy} damage<br/>
                </div>
            </div>`
        }
        actionsPlayer1--
        cardsInHandPlayer1++
        updatePlayerStats(1, healthPlayer1, actionsPlayer1)

        let className = document.getElementsByClassName('cardShow');
        let valueSmallP1 = document.getElementsByClassName('valueSmall');
        let cardsLeftInDeck = document.getElementById('player1deckcards')
        cardsLeftInDeckPlayer1 = cardsLeftInDeckPlayer1 - cardsDealt.length
        cardsLeftInDeck.innerHTML = cardsLeftInDeckPlayer1
        for(let i=0; i<className.length; i++) { 
            className[i].style.borderColor = cardBorderPlayer1;
            valueSmallP1[i].style.borderColor = cardBorderPlayer1;
            // console.log(cardsDealt[i][0].color)
        }
    }
}

function drawCardPlayer2() {
    let cardsOutput = document.getElementById('cardsInHandPlayer2')
    console.log(cardsInHandPlayer2)
    if (actionsPlayer2 <= 0){
        console.log('no moves left!')
        // statusbarPlayer1.innerHTML = `No Moves Left, Please End Turn`
        updateStatus(`No Moves Left, Please End Turn`, 2)
    }
    else if (cardsInHandPlayer2 >= maxCardsInHandPlayer2){
        updateStatus(`Max Cards In Hand`, 2)
    }
    else {
        let cardsDealt = deal(shuffledPlayer2, 1, 1)
        console.log(cardsDealt)
        for (let i = 0; i < cardsDealt.length; i++)
        {
            cardsOutput.innerHTML += `
            <div class="cardShowPlayer2" id="cardShowPlayer2-${cardsDrawnPlayer2}" onclick=placeCardPlayer2(${cardsDrawnPlayer2})>
                <div id="nameCenterSmall">${cardsDealt[i][0].cardName}</div>
                <div class="cardImgDivSmallContainer">
                    <img class="cardImgDivSmall" src='${cardsDealt[i][0].additional[0]}' alt="image">
                </div>
                  <div class="valueSmallP2" id="valueSmall${i}">
                    ${cardsDealt[i][0].energy} <br/>
                </div>
                <div class="cardInfoPlayer2">
                    ${cardsDealt[i][0].cardName}<br/>
                    ${cardsDealt[i][0].description}<br/>
                    Deals ${cardsDealt[i][0].energy} damage<br/>
                </div>
            </div>`
        }
        cardsDrawnPlayer2++ 
        actionsPlayer2--
        cardsInHandPlayer2++

        updatePlayerStats(2, healthPlayer2, actionsPlayer2)

        let className = document.getElementsByClassName('cardShowPlayer2');
        let valueSmallP2 = document.getElementsByClassName('valueSmallP2');
        for(let i=0; i<className.length; i++) { 
            className[i].style.borderColor = cardBorderPlayer2;
            valueSmallP2[i].style.borderColor = cardBorderPlayer2;
            // console.log(cardsDealt[i][0].color)
        }
    }
}

function dealCards() {
    dealAndShowPlayer1()
    dealAndShowPlayer2()
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function endTurn() {
    if (currentPlayer === 1) {
        console.log(`Current player is ${currentPlayer}`)
        currentPlayer = 2
        updateStatus('Your turn there buddy', 1)
        updateStatus('Turn Ended', 2)
        actionsPlayer1 = 5
    }
    else {
        console.log(`Current player is ${currentPlayer}`)
        currentPlayer = 1
        updateStatus('Your turn there buddy', 2)
        updateStatus('Turn Ended', 1)
        actionsPlayer2 = 5
    }
    updatePlayerStats(1, healthPlayer1, actionsPlayer1)
    updatePlayerStats(2, healthPlayer2, actionsPlayer2)
    console.log(`Ending turn. ${currentPlayer} is up next`)
} 

// UpdateFunctions
function updateStatus(message, playerNumber){
    let statusbarPlayer = document.getElementById(`player${playerNumber}StatusBarText`)
    statusbarPlayer.innerHTML = message
}

//, player2Moves, playerBlock
function updatePlayerStats(playerNumber, playerHealth, playerMoves) {
    let playerHealthInfo = document.getElementById(`player${playerNumber}Health`)
    playerHealthInfo.innerHTML = `Health: ${playerHealth}`
    let playerMovesInfo = document.getElementById(`player${playerNumber}Moves`)
    playerMovesInfo.innerHTML = `Actions: ${playerMoves}`
}

// Set up and load Modal
function modalStart() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
}

window.onload = function() {
    console.log('window load')
    modalStart()
};