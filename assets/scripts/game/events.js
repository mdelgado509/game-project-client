'use strict'

// this file contains event handler callbacks for game events

// import api request functions
const api = require('./api')
// import functions that update user interface on client request
const ui = require('./ui')

const onNewGame = function (event) {
  // prevent default refresh page
  event.preventDefault()
  // test event handler callback by logging a message in the console
  console.log('new game button works')

  // import api call to create a new game
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

const onBoardClick = function (event) {
  // check click handler functionality
  console.log('the game board was clicked')

  // store innerHTML in a named varaible
  const innerHTML = event.target.innerHTML

  // create conditional to check if space contains HTML text or not
  if (innerHTML === '') {
    console.log('space is empty')
  } else {
    console.log('space is taken')
  }
}

module.exports = {
  onNewGame,
  onBoardClick
}
