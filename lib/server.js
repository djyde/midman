const express = require('express')
const app = express()
const config = require('../config')

module.exports = (args) => {
  let dir = args.dir || config.staticPath
  let port = args.port || config.port
  
  app.use(express.static(dir))
  app.listen(port, () => {
    console.log('Hosting on port', port)
    console.log('Hosting folder', dir)
    console.log('🐬')
  })
}