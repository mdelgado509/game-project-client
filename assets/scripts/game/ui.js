// this file contains API response handler functions for the game
// it will update the DOM to change the user interface

// import object to store API response data

const store = require('../store')

const onNewGameSuccess = function (response) {
  // log API response
  console.log(response)
  // store api response data
  store.game = response.game
  // display game board
  $('#game-board').show()
  // notify user of a new game
  $('#message').text('New game was created you start as X')
  // hide change password and new game fields/button
  $('#change-password').hide()
  $('#new-game').hide()
}

const onError = function () {
  // display error
  $('#message').text('Try again!')
}

module.exports = {
  onNewGameSuccess,
  onError
}
