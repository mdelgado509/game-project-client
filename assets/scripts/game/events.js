'use strict'

const onNewGame = function (event) {
  // prevent default refresh page
  event.preventDefault()
  // test event handler callback by logging a message in the console
  console.log('new game button works')
}

module.exports = {
  onNewGame
}
