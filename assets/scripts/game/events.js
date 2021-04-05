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
  // if game is over message the user and stop function call
  if (store.game.over) {
    $('#message').text('Game is over! Start a new game to continue.')
  } else {
    // check click handler functionality
    console.log('the game board was clicked')

    // store cell index information
    const index = $(event.target).data('cell-index')
    console.log(index)

    // create conditional to check if space contains HTML text or not
    if (event.target.innerHTML === '') {
      // log space is empty
      console.log('space is empty')
      // add token to the board
      ui.addToken(index)

      // get player value
      const player = $(event.target).text()
      console.log(player)

      // store game status
      const over = store.game.over
      // log game status
      console.log(over)

      // make API request to update game
      api.updateGame(player, index, over)
        .then(ui.onUpdateSuccess)
        .catch(ui.onError)
    } else {
      console.log('space is taken')
      ui.onError()
    }
  }
}

module.exports = {
  onNewGame,
  onBoardClick
}
