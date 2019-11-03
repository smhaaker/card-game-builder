// player 1 Defs:
let healthPlayer1 = 100;
let actionsPlayer1 = 15;
let dealCardsPlayer1 = true; // if true, you are allowed to have cards dealt. Turns false on use up of actions.
let cardsLeftInDeckPlayer1 = 0;
let cardsInHandPlayer1 = 0;
const maxCardsInHandPlayer1 = 7;
let totalCardsBlockPlayer1 = 0;


// player 2 Defs:
let healthPlayer2 = 100;
let actionsPlayer2   = 15;
let dealCardsPlayer2 = true; // if true, you are allowed to have cards dealt. Turns false on use up of actions.
let cardsLeftInDeckPlayer2 = 0;
let cardsInHandPlayer2 = 0;
const maxCardsInHandPlayer2 = 7;
let totalCardsBlockPlayer2 = 0;

let currentPlayer = 0;


// Player 1 define deck
// need to set url as standard in framework. 
// also need to set health,,.. or at least swap out HP for health on display
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
let jupiter = createCardSet(2, "jupiter", 50, "red", ['thunderbolt'], 'Zeus is the king of the gods', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Jupiter-The-King-of-Gods.jpg')
let apollo = createCardSet(4, "apollo", 5, "red", ['predict'], 'Cassandra predicts the future')
let mars = createCardSet(4, "mars", 15, "red", ['Mean'], 'Hera is so mean', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Mars-The-God-of-War.jpg')
let pluto = createCardSet(4, "pluto", 25, "red", ['what does he do?'], 'of the underworld', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Pluto-The-God-of-Underworld.jpg')
let neptune = createCardSet(4, "neptune", 69, "red", ['what does he do?'], 'God of the party', 'https://www.ancienthistorylists.com/wp-content/uploads/2017/09/Neptune-The-Roman-God-of-Sea.jpg')
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
        </div>`
        cardsInHandPlayer1++
        // cardsOutput.innerHTML += cardsDealt[i][0].cardName
        // <div id="descSmall">Desc: ${cardsDealt[i][0].description}</div>
        // <div id="abilitiesSmall">Abilities: ${cardsDealt[i][0].abilities}</div>
    }

}


// this function works but deals the first card of the complete deck instead of the new deck... Need to fix this
function drawCardPlayer1() {
    let cardsOutput = document.getElementById('cardsInHandPlayer1')
    if (actionsPlayer1 <= 0){
        console.log('no moves left!')
        // statusbarPlayer1.innerHTML = `No Moves Left, Please End Turn`
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
            </div>`
        }
        actionsPlayer1--
        cardsInHandPlayer1++
        let playerMovesInfo = document.getElementById('player1Moves')
        playerMovesInfo.innerHTML = `Actions: ${actionsPlayer1}`
    }
}


function placeCardPlayer1(id){
    // let statusbarPlayer1 = document.getElementById('player1StatusBarText') // fix this to a general status update
    
    if (actionsPlayer1 <= 0){
        console.log('no moves left!')
        // statusbarPlayer1.innerHTML = `No Moves Left, Please End Turn`
        updateStatus(`No Moves Left, Please End Turn`, 1)
    }
    // else if (cardElement) {
    //     console.log('do nothing')
    // }
    else {
        console.log(id)
        $(`#cardShowPlayer1-${id}`).appendTo("#player1Board");
        let cardId = document.getElementById(`#cardShowPlayer1-${id}`)
        $(`#cardShowPlayer1-${id}`).attr('id',`id_new${id}`);
        // cardsInHand
        actionsPlayer1--;
        cardsInHandPlayer1--;
        let playerMovesInfo = document.getElementById('player1Moves')
        let totalBlock = document.getElementById('blockPlayer1')
        console.log(shuffledPlayer1[id].energy)
        totalCardsBlockPlayer1 += shuffledPlayer1[id].energy
        totalBlock.innerHTML = `Total Block: ${totalCardsBlockPlayer1}`
        playerMovesInfo.innerHTML = `Actions: ${actionsPlayer1}`
    }
}

// Combine these two into one function parameters playerNumber, Message
function updateStatusP1(message) {
    let statusbarPlayer1 = document.getElementById('player1StatusBarText') // fix this to a general status update
    statusbarPlayer1.innerHTML = message
}

function updateStatusP2(message) {
    let statusbarPlayer2 = document.getElementById('player2StatusBarText') // fix this to a general status update
    statusbarPlayer2.innerHTML = message
}

function updateStatus(message, playerNumber){
    let statusbarPlayer = document.getElementById(`player${playerNumber}StatusBarText`)
    statusbarPlayer.innerHTML = message
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
        <div class="cardShow" id="cardShowPlayer2-${i}" onclick=placeCardPlayer2(${i})>
            <div id="nameCenterSmall">${cardsDealt[i][0].cardName}</div>
            <div class="cardImgDivSmallContainer">
                <img class="cardImgDivSmall" src='${cardsDealt[i][0].additional[0]}' alt="image">
            </div>
            <div class="valueSmall" id="valueSmall${i}">
                ${cardsDealt[i][0].energy} <br/>
            </div>
        </div>`
        cardsInHandPlayer2++
        // cardsOutput.innerHTML += cardsDealt[i][0].cardName
        // <div id="descSmall">Desc: ${cardsDealt[i][0].description}</div>
        // <div id="abilitiesSmall">Abilities: ${cardsDealt[i][0].abilities}</div>
    }
}


function placeCardPlayer2(id){
    let statusbarPlayer2 = document.getElementById('player2StatusBarText') // fix this to a general status update
    if (actionsPlayer2 <= 0){
        console.log('no moves left!')
        statusbarPlayer2.innerHTML = `No Moves Left, Please End Turn`
    }
    else {
        console.log(id)
        $(`#cardShowPlayer2-${id}`).appendTo("#player2Board");
        let cardId = document.getElementById(`#cardShowPlayer2-${id}`)
        $(`#cardShowPlayer2-${id}`).attr('id',`id_new${id}`);
        // document.getElementById(`#id_new${id}`).onclick = function() { console.log('updated card onlickc');HideError(id); }
        // document.getElementById(`#id_new${id}`).onclick = playCardPlayer2(id)
        // $(`#id_new${id}`).prop('onclick',null).off('click');
        $(`#id_new${id}`).attr("onclick",`playCardPlayer2("${id}")`);
        // cardsInHand
        actionsPlayer2--
        cardsInHandPlayer2--
        let playerMovesInfo = document.getElementById('player2Moves')
        playerMovesInfo.innerHTML = `Actions: ${actionsPlayer2}`
    }
}

function playCardPlayer2(id){
    console.log('playing card ' + id)
    if (actionsPlayer2 <= 0){
        console.log('no moves left!')
        // statusbarPlayer1.innerHTML = `No Moves Left, Please End Turn`
        updateStatus(`No Moves Left, Please End Turn`, 2)
    }
    else if (healthPlayer1 <= 0) {
        console.log('How about that, you won')
        updateStatus(`How about that, you won`, 2)
    } 
    else {
        console.log(shuffledPlayer2[id])
        healthPlayer1 -= shuffledPlayer2[id].energy 
        actionsPlayer2--
        if (healthPlayer1 <= 0){
            console.log('How about that, you won')
            healthPlayer1 = 0;
            updateStatus(`How about that, you won`, 2)
        }
        let playerMovesInfo = document.getElementById('player2Moves')
        playerMovesInfo.innerHTML = `Actions: ${actionsPlayer2}`
        let player1HealthInfo = document.getElementById('player1Health')
        player1HealthInfo.innerHTML = `Health: ${healthPlayer1} <br/> `
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
            <div class="cardShow" id="cardShowPlayer2-${i}" onclick=placeCardPlayer2(${i})>
                <div id="nameCenterSmall">${cardsDealt[i][0].cardName}</div>
                <div class="cardImgDivSmallContainer">
                    <img class="cardImgDivSmall" src='${cardsDealt[i][0].additional[0]}' alt="image">
                </div>
                  <div class="valueSmall" id="valueSmall${i}">
                    ${cardsDealt[i][0].energy} <br/>
                </div>
            </div>`
        }
        actionsPlayer2--
        cardsInHandPlayer2++
        let playerMovesInfo = document.getElementById('player2Moves')
        playerMovesInfo.innerHTML = `Actions: ${actionsPlayer2}`
    }
}


function dealCards() {
    dealAndShowPlayer1()
    dealAndShowPlayer2()
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}


function endTurn() {
    // resets next users actions to 3. Leaves current to 0. 
    // works on button end turn... 
    if (currentPlayer === 0) {
        console.log(`Current player is ${currentPlayer}`)
        currentPlayer = 1
    }
    else {
        console.log(`Current player is ${currentPlayer}`)
        currentPlayer = 0
    }
    console.log(`Ending turn. ${currentPlayer} is up next`)
} 

// modal
// Get the modal

function modalStart() {
    let modal = document.getElementById("myModal");

    // Get the button that opens the modal
    let btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    // let span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
      modal.style.display = "block";
    // }
    
    // When the user clicks on <span> (x), close the modal
    //   modal.style.display = "none";
    // }    span.onclick = function() {

    
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }

}


window.onload = function() {
    console.log('window load')
    modalStart()
  };