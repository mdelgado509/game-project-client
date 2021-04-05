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

// make ajax call to view game data

const viewGames = function () {
  return $.ajax({
    // define GET method
    method: 'GET',
    // call url
    url: config.apiUrl + '/games',
    // verify user with token
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make AJAX call to update game data

const updateGame = function (player, index, over) {
  // check data API is receiving
  console.log(`
    This is the API data:
      id: ${player},
      index: ${index},
      over: ${over}`)
  console.log()
  return $.ajax({
    // define PATCH method
    method: 'PATCH',
    // call url with id
    url: config.apiUrl + '/games/' + store.game._id,
    // verify user login with token
    data: {
      game: {
        cell: {
          index: index,
          value: player
        },
        over: over
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  viewGames,
  updateGame
}
