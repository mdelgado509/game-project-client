'use strict'

// this file contains API request functions

// import apiUrl from config file

const config = require('../config')

// make an AJAX call request function to create a new user

const signUp = function (formData) {
  console.log(formData)
  return $.ajax({
    // set method to create a user
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    // send the data along to update our user with
    data: formData
  })
}

// // this file contains the functions that make requests to the API
// // import our apiUrl from the config file
// const config = require('../config')
//
// // store our object that stores user info values
// const store = require('../store')
//
// const signUp = function (formData) {
//   return $.ajax({
//     // set method to create a user
//     method: 'POST',
//     url: config.apiUrl + '/sign-up',
//     // send the formData along to update our user with
//     data: formData
//   })
// }
//
// const signIn = function (formData) {
//   return $.ajax({
//     // set method to create a user
//     method: 'POST',
//     url: config.apiUrl + '/sign-in',
//     // send the formData along to update our user with
//     data: formData
//   })
// }
//
// const changePassword = function (formData) {
//   return $.ajax({
//     // set method to create a user
//     method: 'PATCH',
//     url: config.apiUrl + '/change-password',
//     // send the formData along to update our user with
//     data: formData,
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }
//
// const signOut = function () {
//   return $.ajax({
//     // set method to create a user
//     method: 'DELETE',
//     url: config.apiUrl + '/sign-out',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp
}
