'use strict'

// this file contains event handler callbacks for game events

// import api request functions
const api = require('./api')

// import functions that update user interface on client request
const ui = require('./ui')

// import object to extract API sign in response data (token)
const store = require('../store')

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

  // store space ID in variable
  const spaceID = event.target.id

  // create conditional to check if space contains HTML text or not
  if (event.target.innerHTML === '') {
    console.log('space is empty')
    ui.addToken(spaceID)
  } else {
    ui.onError()
  }
}

module.exports = {
  onNewGame,
  onBoardClick
}
