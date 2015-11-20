const express = require('express')
const app = express()

const methods = {
  start(hi){
    console.log(hi)
  },

  restart(){
    console.log('restart')
  },

  stop(){
    console.log('stop')
  }
}

module.exports = methods