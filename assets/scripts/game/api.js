'use strict'

// this file contains API request functions

// import apiUrl from config file

const config = require('../config')

// import object to extract API sign in response data (token)

const store = require('../store')

// make an AJAX call request function to create a new game

const newGame = function () {
  return $.ajax({
    // define POST method
    method: 'POST',
    // call url
    url: config.apiUrl + '/games',
    // verify user login with token
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newGame
}
