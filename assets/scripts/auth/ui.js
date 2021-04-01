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
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#message').text('You succesfully changed your password ' + store.user.email)
  $('#change-password').trigger('reset')
}

const onError = function () {
  $('#message').text('Try again!')
}

//
// const onSignOutSuccess = function () {
//   $('#message').text('You succesfully logged out of ' + store.user.email)
//   $('#sign-up').show()
//   $('#sign-in').show()
//   $('#change-password').hide()
//   $('#sign-out').hide()
//   store.user = null
// }
//

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onError
}
