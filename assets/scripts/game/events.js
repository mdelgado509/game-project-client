'use strict'

// this file contains event handler callbacks for game events

// import API request functions
const api = require('./api')

// import functions that update user interface on client request
const ui = require('./ui')

// import object that handles user and game information
const store = require('../store')

// event handler function called when new game button is clicked
const onNewGame = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // import api call to create a new game
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

// event handler function called when view games button is clicked
const onViewGames = function (event) {
  // prevent defaul refresh page
  event.preventDefault()
  // call API function to get games and update user on success or failure
  api.viewGames()
    .then(ui.onViewGamesSuccess)
    .catch(ui.onError)
}

// event handler function called when the game board is clicked
const onBoardClick = function (event) {
  // defined in onNewGameSuccess in ui.js
  // if game is over message the user don't execute rest of code
  if (store.game.over) {
    $('#message').text('Game is over! Start a new game to continue.')
    // otherwise execute code as follows to handle board clicks
  } else {
    // create conditional to check if space contains HTML text or not
    if (event.target.innerHTML === '') {
      // store clicked cell index information
      const index = $(event.target).data('cell-index')
      // update the DOM and user view
      ui.addToken(index)

      // get player value
      const player = $(event.target).text()

      // store game status
      const over = store.game.over

      // make API request to update game
      api.updateGame(player, index, over)
        .then(ui.onUpdateSuccess)
        .catch(ui.onError)
    } else {
      // notify user of error when taken space is clicked
      $('#message').text('That space is taken!')
    }
  }
}

module.exports = {
  onNewGame,
  onBoardClick,
  onViewGames
}
