'use strict'

const express = require('express')
const app = express()
const config = require('../config')
const fs = require('fs')

module.exports = (args) => {

  let dir = args.dir || config.staticPath
  let port = args.port || config.port

  app.set('view engine', 'jade')
  app.use(express.static(dir))

  app.get('/', (req,res) => {
    res.render('index', {
      files: fs.readdirSync(dir)
    })
  })

  app.listen(port, () => {
    console.log('Hosting on port', port)
    console.log('Hosting folder', dir)
    console.log('🐬')
  })
}