
    let config;
    let deckArr = [];
    let newCard;

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
                <img src='${newCard[0].additional[0]}' width=100% alt="image">
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
        document.getElementById("generatedCardToAdd").style.backgroundColor = color;
    }

    function finalizeDeck() {
        // fix the bug where if you readd cards it generates new numbers. Must check for ID. Probably in the array setup
        let finaldeck
        finaldeck = mergeSets(...deckArr)
        console.log(finaldeck)
        let deckOutput = document.getElementById('completeDeck')
        
        deckOutput.innerHTML = ''
        for(let i = 0; i<finaldeck.length; i++){
            deckOutput.innerHTML += `
            CardName: ${finaldeck[i].cardName} <br/>
            CardID: ${finaldeck[i].id} <br/>`
        }

    }

    function populate () {
        let h1Title = document.getElementById('title')
        h1Title.innerHTML = config.nameOfGame;
        let h2Desc = document.getElementById('desc')
        h2Desc.innerHTML = config.description;
    }

