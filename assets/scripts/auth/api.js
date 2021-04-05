'use strict'

// this file contains API request functions

// import apiUrl from config file

const config = require('../config')

// import object to extract API sign in response data (token)
const store = require('../store')

// make an AJAX call request function to create a new user

const signUp = function (formData) {
  return $.ajax({
    // set method to create a user
    method: 'POST',
    // call URL
    url: config.apiUrl + '/sign-up',
    // send the data along to create our user
    data: formData
  })
}

// make an AJAX call request function to sign in a registered user

const signIn = function (formData) {
  return $.ajax({
    // set method to sign in a registered user
    method: 'POST',
    // call URL
    url: config.apiUrl + '/sign-in',
    // send the formData along to verify our user
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    // set method to change password
    method: 'PATCH',
    // Call URL to change password
    url: config.apiUrl + '/change-password',
    // send the formData along to update user password
    data: formData,
    // verify user login with token
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    // set method to create a user
    method: 'DELETE',
    // call URL to change password
    url: config.apiUrl + '/sign-out',
    // verify user login with token
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
