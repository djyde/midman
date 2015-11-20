'use strict'

const express = require('express')
const app = express()
const config = require('./config')
const fs = require('fs')

app.set('view engine', 'jade')
app.use('/assets', express.static('./assets'))

app.use(express.static(config.dir))

app.get('/', (req,res) => {

  res.render('index', {
    files: fs.readdirSync(config.dir)
  })
})

app.listen(config.port, () => {
  console.log('Hosting on port', config.port)
  console.log('Hosting folder', config.dir)
  console.log('🐬')
})