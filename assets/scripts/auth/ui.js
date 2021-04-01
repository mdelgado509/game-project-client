'use strict'

// this file contains API response handler functions
// it will update the DOM to change the user interface

// import object to store API sign in response data (token)

const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').text('You succesfully signed up! Sign in to continue.')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  // check for API response data
  console.log(response)
  // extract user information from API response data
  store.user = response.user
  $('#message').text('You succesfully signed in ' + store.user.email)
  // reset field
  $('#sign-in').trigger('reset')
  // show fields change password and sign out
  $('#change-password').show()
  $('#sign-out').show()
  // hide sign up and sign in fields
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onChangePasswordSuccess = function () {
  // notify user of succesful password change
  $('#message').text('You succesfully changed your password ' + store.user.email)
  // reset field
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  // message user of sign out success
  $('#message').text('You succesfully logged out ' + store.user.email)
  // erase user info
  store.user = null
  // show sign up and sign in
  $('#sign-up').show()
  $('#sign-in').show()
  // high sign out and change password fields
  $('#change-password').hide()
  $('#sign-out').hide()
}

const onError = function () {
  // messahe user of error
  $('#message').text('Try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
