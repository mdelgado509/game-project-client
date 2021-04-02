// this file contains API response handler functions for the game
// it will update the DOM to change the user interface

// import object to store API response data

const store = require('../store')

const onNewGameSuccess = function (response) {
  // create player object in store
  store.player = {}
  // assign player token
  store.player.token = store.user.token
  // assign player X
  store.player.isTeamX = true
  // log player
  console.log(store.player)

  // log API response
  console.log(response)
  // store api response data
  store.game = response.game

  // display game board
  $('.game-board').show()
  // notify user of a new game
  $('#message').text('New game was created you start as X')
  // hide change password and new game fields/button
  $('#change-password').hide()
  $('#new-game').hide()
}

const addToken = function (spaceID) {
  if (store.player.isTeamX) {
    // add player token and team to the game cell array
    store.game.cells[spaceID] = store.player
    // log array information
    console.log(store.game.cells)
    // add X to the board
    document.getElementById(spaceID).innerHTML = 'X'
  } else {
    // add O to the board
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
