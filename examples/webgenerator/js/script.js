
    let config;
    let deckArr = [];
    let newCard;
    let finaldeck

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
        generated.innerHTML= `<div id="generatedCardToAdd"> 
            Name: ${newCard[0].cardName} <br>
            <div class="cardImgDiv">
                <img class="cardImg" src='${newCard[0].additional[0]}' alt="image">
            </div>
            Value: ${newCard[0].value} <br>
            Color: ${newCard[0].color} <br>
            Abilities: ${newCard[0].abilities} <br>
            Description: ${newCard[0].description} <br>
            Amount: ${cardAmount} </div>`
        this.cardColor(newCard[0].color)
    }

    function addToDeck(){
        console.log(newCard)
        deckArr.push(newCard)
        console.log(deckArr)
    }

    function cardColor(color) {
        document.getElementById("generatedCardToAdd").style.borderColor = color;
    }

    // currently only adds to last added. Need to generate ID's
    function cardColorSmall(id, color) {
        document.getElementById(`generatedCardToAddSmall${id}`).style.borderColor = color;
    }

    function finalizeDeck() {
        // fix the bug where if you readd cards it generates new numbers. Must check for ID. Probably in the array setup
        
        console.log(finaldeck)
        finaldeck = mergeSets(...deckArr)
        console.log(finaldeck)
        let deckOutput = document.getElementById('completeDeck')
        
        deckOutput.innerHTML = ''
        for(let i = 0; i<finaldeck.length; i++){
            deckOutput.innerHTML += `
            <div class="generatedCardToAddSmall" id="generatedCardToAddSmall${i}">
            ${finaldeck[i].cardName} <br/>
            <div class="cardImgDivSmallContainer">
                <img class="cardImgDivSmall" src='${finaldeck[i].additional[0]}' alt="image">
            </div>
            CardID: ${finaldeck[i].id} <br/>
            Color: ${finaldeck[i].color} <br/>
            Desc: ${finaldeck[i].description} <br/>
            Value: ${finaldeck[i].value} <br/>
            </div>`
            this.cardColorSmall(i, finaldeck[i].color)
        }
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

    // function showDiv(div) {
    //     let x = document.getElementById(div);
    //     if (x != null) {
    //         if (x.style.display == "block") {
    //             x.style.display = 'none';
    //         }
    //         else {
    //             x.style.display = 'block';
    //         }
    //         return false;
    //     }
    // }