const express = require('express')
const app = express()

const server

const methods = {
  start(args){

  },

  restart(){
    console.log('restart')
  },

  stop(){
    console.log('stop')
  }
}

module.exports = methods