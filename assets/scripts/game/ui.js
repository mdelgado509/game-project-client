// this file contains API response handler functions for the game
// it will update the DOM to change the user interface

// import object to store API response data

const store = require('../store')

// display player preference options
const isPlayerSelf = function () {
  // ask user their preference
  // idea: have the self and computer as anchortags # that you can assign an event listener to for clicks.
  $('#message').html('Would you like to play against <a href=# id="self-game">yourself</a> or the <a href=# id="computer-game">computer</a>?')
}

// const onPlayerPreferenceSuccess = function (event) {
//
// }

// update the DOM when the API sends new game data
const onNewGameSuccess = function (response) {
  // clear game board if it exists
  $('.box').text('')

  // store API game information
  store.game = response.game

  // assign team X
  store.isTeamX = true

  // game winner reset
  store.winner = ''

  // display game board
  $('.game').show()

  // notify user of a new game
  $('#message').text('New game was created. You start as team X')

  // hide change password and new game fields/button
  $('#show-change-password').hide()
  $('#new-game').hide()
  $('#view-games').hide()
}

// update the DOM when the API sends game data
const onViewGamesSuccess = function (response) {
  // display number of games played
  $('#message').text('You played ' + response.games.length + ' game(s)')
}

// update the DOM when the API succefully updates game data
const onUpdateSuccess = function () {
  // if true then show game options and display result
  if (store.game.over) {
    // show buttons
    $('#new-game').show()
    $('#view-games').show()
    $('#show-change-password').show()
    if (store.winner) {
      // display result
      $('#message').text('Game over! Team ' + store.winner + ' won.')
    } else {
      $('#message').text('Game over! Looks like a tie.')
    }
  }
}

// update DOM when user adds token to board
const addToken = function (index) {
  // if team X
  if (store.isTeamX) {
    // store player value and space index in temporary game cell array
    store.game.cells[index] = {
      index: index,
      value: 'X'
    }

    // add X to the board
    document.getElementById(index).innerHTML = 'X'

    // check for winner
    checkWinner(store.game.cells)

    // check for tie
    checkTie(store.game.cells)

    // check if game is over
    const over = store.game.over
    // if game is over do not rotate teams or message user
    if (!over) {
      // otherwise rotate player from X to O
      store.isTeamX = false
      // and notify user of turn change
      $('#message').text("It's now team O's turn")
    }
  // if player is team O
  } else {
    // store player info in game cell array
    store.game.cells[index] = {
      index: index,
      value: 'O'
    }

    // add O to the board
    document.getElementById(index).innerHTML = 'O'

    // check for winner
    checkWinner(store.game.cells)

    // check for tie
    checkTie(store.game.cells)

    // check if game is over
    const over = store.game.over
    // if game is over do not rotate teams or message user
    if (!over) {
      // otherwise rotate player from X to O
      store.isTeamX = true
      // and notify user of turn change
      $('#message').text("It's now team X's turn")
    }
  }
}

// check for winner
const checkWinner = function (arr) {
  // create array with 9 different spaces
  const winnerArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  // map the game cell values to an array
  const gameArray = arr.map(element => element.value)
  // the winnerArray is updated with values from the gameArray
  for (let i = 0; i < arr.length; i++) {
    // undefined values are ignored
    if (gameArray[i] !== undefined) {
      // winnerArray is replaced with 'X' or 'O' values
      winnerArray[i] = gameArray[i]
    }
  }
  // create a conditional test if winning spaces have been filled with
  // identical values
  if (winnerArray[0] === winnerArray[1] && winnerArray[1] === winnerArray[2]) {
    // end the game
    store.game.over = true
    // store player value as winner
    store.winner = $(event.target).text()
  } else if (winnerArray[0] === winnerArray[3] && winnerArray[3] === winnerArray[6]) {
    store.game.over = true
    store.winner = $(event.target).text()
  } else if (winnerArray[0] === winnerArray[4] && winnerArray[4] === winnerArray[8]) {
    store.game.over = true
    store.winner = $(event.target).text()
  } else if (winnerArray[2] === winnerArray[4] && winnerArray[4] === winnerArray[6]) {
    store.game.over = true
    store.winner = $(event.target).text()
  } else if (winnerArray[1] === winnerArray[4] && winnerArray[4] === winnerArray[7]) {
    store.game.over = true
    store.winner = $(event.target).text()
  } else if (winnerArray[2] === winnerArray[5] && winnerArray[5] === winnerArray[8]) {
    store.game.over = true
    store.winner = $(event.target).text()
  } else if (winnerArray[3] === winnerArray[4] && winnerArray[4] === winnerArray[5]) {
    store.game.over = true
    store.winner = $(event.target).text()
  } else if (winnerArray[6] === winnerArray[7] && winnerArray[7] === winnerArray[8]) {
    store.game.over = true
    store.winner = $(event.target).text()
  }
}

// check for tie
const checkTie = function (arr) {
  // define predicate function to test if spaces have been filled
  const spaceTaken = function (space) {
    // if space isn't the default empty string return true
    if (space !== '') {
      return true
    }
  }
  // itirate over the store.game.cells array to see if all spaces have gone
  // from empty strings to occupied and store that boolean result
  const result = arr.every(spaceTaken)
  // if result is true and every space is taken
  if (result) {
    // then end the game
    store.game.over = true
  }
}

// update the DOM for unsuccessful user requests
const onError = function () {
  // display error
  $('#message').text('Something went wrong!')
}

module.exports = {
  isPlayerSelf,
  onNewGameSuccess,
  onViewGamesSuccess,
  onUpdateSuccess,
  addToken,
  onError
}
