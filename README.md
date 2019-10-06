# Card Game Builder
Very early commit to get going.
Intent is to create a framework to prototype card-builder games such as netrunner / star realms
index.js is just an example file of usage

## usage:
Import however you need.

## functions:
* setupGame: sets up a game with name / amount of decks / players and description
* createCardSet: create a set of cards with all its attributes
* mergeSets: merges given sets of cards
* shuffle: shuffles the merged set
* deal: deals amount of cards to given players
* checkCardPlayable: returns true if the card has status of playable
* playerCards: checks cards of specific player

## Todo / requests
* Documentation
* Reactive UI
* Folder structure

### Todo Functions:
* Amount of cards to play
* Amount of decks per player
* Amount of cards per player hand
* Discard / play deck

## Examples
* test.html -- simple html / js implementation
* setupgame.html -- simple generator to show how to use
* index.js -- old example
* index2.js -- new example of usage