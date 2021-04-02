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
  $('#message').text('New game was created. You begin the game as team X')
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
    // check for winner
    checkWinner(store.game.cells)
    // rotate player from X to O
    store.isTeamX = false
    // notify user of turn change
    $('#message').text("It's now team O's turn")
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
    // check for winner
    checkWinner(store.game.cells)
    // rotate player from X to O
    store.isTeamX = true
    // notify user of turn change
    $('#message').text("It's now team X's turn")
  }
}

const checkWinner = function (arr) {
  // create array to represent filled in spaces x = true
  const teamArray = arr.map(element => element.isTeamX)
  console.log(teamArray)
  // create a conditional test to check for winning 012 X's
  if ((teamArray[0] && teamArray[1] && teamArray[2])) {
    console.log('game over')
  // create a conditional test to check for winning 036 X's
  } else if (teamArray[0] && teamArray[3] && teamArray[6]) {
    console.log('game over')
  // create a conditional test to check for winning 048 X's
  } else if (teamArray[0] && teamArray[4] && teamArray[8]) {
    console.log('game over')
  // create a conditional test to check for winning 147 X's
  } else if (teamArray[0] && teamArray[4] && teamArray[8]) {
    console.log('game over')
  // create a conditional test to check for winning 246 X's
  } else if (teamArray[2] && teamArray[4] && teamArray[6]) {
    console.log('game over')
  // create a conditional test to check for winning 258 X's
  } else if (teamArray[2] && teamArray[5] && teamArray[8]) {
    console.log('game over')
  // create a conditional test to check for winning 258 X's
  } else if (teamArray[3] && teamArray[4] && teamArray[5]) {
    console.log('game over')
  // create a conditional test to check for winning 345 X's
  } else if (teamArray[6] && teamArray[7] && teamArray[8]) {
    console.log('game over')
  // create a conditional test to check for winning 678 X's
  } else {
    console.log('game on')
  }
}

const onError = function () {
  // display error
  $('#message').text('Try again!')
}

module.exports = {
  onNewGameSuccess,
  addToken,
  checkWinner,
  onError
}
