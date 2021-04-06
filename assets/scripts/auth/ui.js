'use strict'

// this file contains API response handler functions
// it will update the DOM to change the user interface

// import object to store API sign in response data (token)

const store = require('../store')

const onSignUpSuccess = function () {
  // log success message for sign up
  $('#message').text('You succesfully signed up! Sign in to continue.')
  // clear fields
  $('#sign-up').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').hide()
}

const onSignInSuccess = function (response) {
  // extract user information from API response data
  store.user = response.user
  $('#message').text('You succesfully signed in ' + store.user.email)
  // reset field
  $('#sign-in').trigger('reset')

  // set user-name on game header
  $('#user-name').text(store.user.email)

  // show game header
  $('#game-header').show()
  // // show fields change password and sign out
  // $('#change-password').show()
  // $('#sign-out').show()
  // $('#new-game').show()
  // $('#view-games').show()
  // hide sign up and sign in fields
  // $('#sign-up').hide()
  $('#sign-in').hide()
}

const onChangePasswordSuccess = function () {
  // notify user of succesful password change
  $('#message').text('You succesfully changed your password ' + store.user.email)
  // reset field
  $('#change-password').trigger('reset')

  // hide change password
  $('#change-password').hide()

  // show game header options
  $('#game-header').show()
}

const onSignOutSuccess = function () {
  // message user of sign out success
  $('#message').text('You succesfully logged out ' + store.user.email)
  // erase user info
  store.user = null
  // show sign up and sign in
  $('#sign-up').show()

  // hide game-header
  $('#game-header').hide()

  // hide sign out and change password fields
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#view-games').hide()
  $('.game').hide()
}

const onError = function () {
  // message user of error
  $('#message').text('Try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
