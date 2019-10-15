
    let config;
    let deckArr = [];
    let newCard;
    let finaldeck
    let previewDeck = []
    let count = 0;

    function generate() {

        let name = document.getElementById("gameName").value
        let decks = document.getElementById("decksAmount").value
        let players = document.getElementById("playerAmount").value

        // console.log(name)
        // console.log(decks)
        // console.log(players)
        config = new setupGame(name, parseInt(decks), 1, parseInt(players), 'desc')
        console.log(config)
        this.populate()
    }

    function addCards() {
        let cardName = document.getElementById("cardName").value
        let cardValue = document.getElementById("cardValue").value
        let cardAmount = document.getElementById("cardAmount").value
        let cardColor = document.getElementById("cardColor").value
        let cardAbility = document.getElementById("cardAbility").value
        let cardDesc = document.getElementById("cardDesc").value
        let cardUrl = document.getElementById("cardUrl").value // img/sprite6_0.png

        newCard = new createCardSet(cardAmount, cardName, cardValue, cardColor, cardAbility, cardDesc, cardUrl)
        console.log(newCard)
        let generated = document.getElementById('newCard')
        let amountOfCards = document.getElementById('amountOfCards')
        amountOfCards.innerHTML = `${cardAmount} cards to add`    
        generated.innerHTML= `
            <div id="generatedCardToAdd"> 
                <div id="nameCenter">${newCard[0].cardName}</div>
                <div class="cardImgDiv">
                    <img class="cardImg" src='${newCard[0].additional[0]}' alt="image">
                </div>
                <div class="desc">
                    ${newCard[0].description}    
                </div>
                <div class="abilities">
                    Abilities: ${newCard[0].abilities}
                </div>
                <div id="value">
                    ${newCard[0].value} <br/>
                </div>
            </div>`
        this.cardColor(newCard[0].color)
    }

    function addToDeck(){
        console.log(newCard)
        deckArr.push(newCard)
        console.log(deckArr)
    }

    function cardColor(color) {
        document.getElementById("generatedCardToAdd").style.borderColor = color;
        document.getElementById("value").style.borderColor = color;
    }

    // currently only adds to last added. Need to generate ID's
    function cardColorSmall(id, color) {
        document.getElementById(`generatedCardToAddSmall${id}`).style.borderColor = color;
        document.getElementById(`valueSmall${id}`).style.borderColor = color;
    }


    function finalizeDeck() {
        count = 0;
        // console.log(finaldeck)
        finaldeck = mergeSets(...deckArr)
        console.log(finaldeck)
        let deckOutput = document.getElementById('completeDeck')
        
        deckOutput.innerHTML = ''

        for(let id in finaldeck) {
            console.log(`key:${id}`, `name:${finaldeck[id].cardName}`);
            deckOutput.innerHTML += `
            <div class="generatedCardToAddSmall" id="generatedCardToAddSmall${id}">
            ${finaldeck[id].cardName} <br/>
            <div class="cardImgDivSmallContainer">
                <img class="cardImgDivSmall" src='${finaldeck[id].additional[0]}' alt="image">
            </div>
            CardID: ${finaldeck[id].id} <br/>
            Abilities: ${finaldeck[id].abilities} <br/>

            Desc: ${finaldeck[id].description} <br/>
            <div class="valueSmall" id="valueSmall${id}">
                ${finaldeck[id].value} <br/>
            </div>
            </div>`
            this.cardColorSmall(id, finaldeck[id].color)
        }

        // deckOutput.innerHTML = ''
        // for(let i = 0; i<finaldeck.length; i++){
        //     deckOutput.innerHTML += `
        //     <div class="generatedCardToAddSmall" id="generatedCardToAddSmall${i}">
        //     ${finaldeck[i].cardName} <br/>
        //     <div class="cardImgDivSmallContainer">
        //         <img class="cardImgDivSmall" src='${finaldeck[i].additional[0]}' alt="image">
        //     </div>
        //     CardID: ${finaldeck[i].id} <br/>
        //     Abilities: ${finaldeck[i].abilities} <br/>

        //     Desc: ${finaldeck[i].description} <br/>
        //     <div class="valueSmall" id="valueSmall${i}">
        //         ${finaldeck[i].value} <br/>
        //     </div>
        //     </div>`
        //     this.cardColorSmall(i, finaldeck[i].color)
        // }
        document.getElementById('cardsIndDeck').innerHTML = finaldeck.length
    }

    function populate () {
        let h1Title = document.getElementById('title')
        h1Title.innerHTML = config.nameOfGame;
        let h2Desc = document.getElementById('desc')
        h2Desc.innerHTML = config.description;
    }

    let divState = {};
    function showDiv(id) {
        console.log('testing')
        if (document.getElementById) {
            let divid = document.getElementById(id);
            divState[id] = (divState[id]) ? false : true;
            for (let div in divState){
                if (divState[div] && div != id){
                    document.getElementById(div).style.display = 'none';
                    divState[div] = false;
                }
            }
            divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
        }
    }
