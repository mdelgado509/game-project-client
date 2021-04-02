'use strict'

// this file contains event handler callbacks for game events

// import api request functions
const api = require('./api')
// // import functions that update user interface on client request
// const ui = require('./ui')

const onNewGame = function (event) {
  // prevent default refresh page
  event.preventDefault()
  // test event handler callback by logging a message in the console
  console.log('new game button works')

  // import api call to create a new game
  api.newGame()
    .then(() => console.log('newGame created'))
    .catch(() => console.log('newGame not created'))
}

module.exports = {
  onNewGame
}
