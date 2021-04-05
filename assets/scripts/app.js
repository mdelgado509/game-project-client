'use strict'

// this file contains event listeners for authentication

// import authentication event handler callbacks

const authEvents = require('./auth/events')

// import game event handler callbacks

const gameEvents = require('./game/events')

$(() => {
  // hide the elements we don't want to see at first
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#view-games').hide()
  $('.game-board').hide()

  // create event listener for submit events (sign-up, sign-in, change-pw)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // create event listener for click events (sign-out, new-game, view-games)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#view-games').on('click', gameEvents.onViewGames)

  // create event listener for game click events
  $('.game-board').on('click', gameEvents.onBoardClick)
})
