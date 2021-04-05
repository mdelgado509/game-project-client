'use strict'

// this file contains event handler callbacks for authentication events

// import api request functions
const api = require('./api')
// import functions that update user interface on client request
const ui = require('./ui')

// import getFormFields function for sending JSON data to API
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // create a variable to store the form
  const form = event.target
  // extract data from form and store in a variable
  const formData = getFormFields(form)

  // call function that will send data along with request to create a new user
  api.signUp(formData)
    // import success and failure callback to event handler
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // create a variable to store the form
  const form = event.target
  // extract data from form and store in a variable
  const formData = getFormFields(form)

  // call function that will send data along with request to sign in a registered user
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onChangePassword = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // event.target is our form, store it in a better named variable
  const form = event.target
  // get the data from our form
  const formData = getFormFields(form)

  // api call that will send data to update user info
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  // prevent the default action of refreshing the page when a form is submitted
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
