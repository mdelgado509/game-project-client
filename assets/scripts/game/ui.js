// this file contains API response handler functions for the game
// it will update the DOM to change the user interface

// import object to store API response data

const store = require('../store')

const onNewGameSuccess = function (response) {
  // store game information (game cells)
  store.game = response.game

  // assign team X
  store.isTeamX = true

  // display game board
  $('.game-board').show()
  // notify user of a new game
  $('#message').text('New game was created you start as X')
  // hide change password and new game fields/button
  $('#change-password').hide()
  $('#new-game').hide()
}

const addToken = function (spaceID) {
  if (store.isTeamX) {
    // store player info in game cell array
    store.game.cells[spaceID] = {
      token: store.user.token,
      isTeamX: true
    }
    // log array information
    console.log(store.game.cells)
    // add X to the board
    document.getElementById(spaceID).innerHTML = 'X'
    // rotate player from X to O
    store.isTeamX = false
  } else {
    // store player info in game cell array
    store.game.cells[spaceID] = {
      token: store.user.token,
      isTeamX: false
    }
    // log array information
    console.log(store.game.cells)
    // add 0 to the board
    document.getElementById(spaceID).innerHTML = 'O'
    // rotate player from X to O
    store.isTeamX = true
  }
}

const onError = function () {
  // display error
  $('#message').text('Try again!')
}

module.exports = {
  onNewGameSuccess,
  addToken,
  onError
}
