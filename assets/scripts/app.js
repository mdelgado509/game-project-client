'use strict'

// this file contains event listeners for authentication

// import event handler callbacks

const authEvents = require('./auth/events')

$(() => {
  // create sign-up event listener that listens for the form submit event
  $('#sign-up').on('submit', authEvents.onSignUp)
  // create sign-in event listener that listens for the form submit event
  $('#sign-in').on('submit', authEvents.onSignIn)
})

// $(() => {
//   // hide the elements we don't want to see at first
//   $('#change-password').hide()
//   $('#sign-out').hide()
//   // select the button with the id of 'sign-up'
//   // when a 'submit' event occurs, run the 'authEvents.onSignUp' function
//   $('#sign-up').on('submit', authEvents.onSignUp)
//   // select the button with the id of 'sign-in'
//   // when a 'submit' event occurs, run the 'authEvents.onSignIn' function
//   $('#sign-in').on('submit', authEvents.onSignIn)
//   // select the button with the id of 'change-password'
//   // when a 'submit' event occurs, run the 'authEvents.onChangePassword' function
//   $('#change-password').on('submit', authEvents.onChangePassword)
//   $('#sign-out').on('click', authEvents.onSignOut)
// })
