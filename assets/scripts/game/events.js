'use strict'

// this file contains event handler callbacks for game events

// import api request functions
const api = require('./api')

// import functions that update user interface on client request
const ui = require('./ui')

// import object to extract API sign in response data (token)
const store = require('../store')

// import getFormFields function for sending JSON data to API
const getFormFields = require('../../../lib/get-form-fields')

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
  const index = event.target.id

  // store game ID in a variable
  const id = store.game._id

  console.log(id)

  // create conditional to check if space contains HTML text or not
  if (event.target.innerHTML === '') {
    // log space is empty
    console.log('space is empty')
    // add token to the board
    ui.addToken(index)

    // what is this?
    const cell = $(event.target)
    console.log(cell)
    // what is this?
    const cellData = $(event.target).data('cell-index')
    console.log(cellData)
    // what is this?
    const player = cell.text()
    console.log(player)

    // make API request to update game
    api.updateGame(player, cellData)
  } else {
    console.log('space is taken')
    ui.onError()
  }
}

module.exports = {
  onNewGame,
  onBoardClick
}
