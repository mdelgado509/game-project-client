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
  // create sign-up event listener that listens for the form submit event
  $('#sign-up').on('submit', authEvents.onSignUp)
  // create sign-in event listener that listens for the form submit event
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create change-password event listener that listens for the submit event
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create sign-out event listener that listens for click event
  $('#sign-out').on('click', authEvents.onSignOut)
  // add event listener for new game button click events
  $('#new-game').on('click', gameEvents.onNewGame)
})
