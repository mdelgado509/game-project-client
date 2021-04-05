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

const addToken = function (index) {
  if (store.isTeamX) {
    // store player info in game cell array
    store.game.cells[index] = {
      index: index,
      value: 'x'
    }
    // log array information
    console.log(store.game.cells)
    // add X to the board
    document.getElementById(index).innerHTML = 'x'
    // check for winner
    checkWinner(store.game.cells)
    // rotate player from X to O
    store.isTeamX = false
    // notify user of turn change
    $('#message').text("It's now team O's turn")
  } else {
    // store player info in game cell array
    store.game.cells[index] = {
      token: index,
      value: 'o'
    }
    // log array information
    console.log(store.game.cells)
    // add O to the board
    document.getElementById(index).innerHTML = 'o'
    // check for winner
    checkWinner(store.game.cells)
    // rotate player from X to O
    store.isTeamX = true
    // notify user of turn change
    $('#message').text("It's now team X's turn")
  }
}

const checkWinner = function (arr) {
  // create array to represent 9 different empty spaces
  const winnerArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  // create array to represent filled in spaces
  const teamArray = arr.map(element => element.value)
  // modify array to include boolean values of filled spaces
  // skip over undefined spaces
  for (let i = 0; i < arr.length; i++) {
    if (teamArray[i] !== undefined) {
      winnerArray[i] = teamArray[i]
    }
  }
  // create a conditional test if winning spaces have been filled
  if (winnerArray[0] === winnerArray[1] && winnerArray[1] === winnerArray[2]) {
    console.log('game over')
  } else if (winnerArray[0] === winnerArray[3] && winnerArray[3] === winnerArray[6]) {
    console.log('game over')
  } else if (winnerArray[0] === winnerArray[4] && winnerArray[4] === winnerArray[8]) {
    console.log('game over')
  } else if (winnerArray[2] === winnerArray[4] && winnerArray[4] === winnerArray[6]) {
    console.log('game over')
  } else if (winnerArray[1] === winnerArray[4] && winnerArray[4] === winnerArray[7]) {
    console.log('game over')
  } else if (winnerArray[2] === winnerArray[5] && winnerArray[5] === winnerArray[8]) {
    console.log('game over')
  } else if (winnerArray[3] === winnerArray[4] && winnerArray[4] === winnerArray[5]) {
    console.log('game over')
  } else if (winnerArray[6] === winnerArray[7] && winnerArray[7] === winnerArray[8]) {
    console.log('game over')
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
