const path = require('path')
const os = require('os')

// default config
module.exports = {
  dir: path.resolve(os.homedir(), 'Midman'),
  port: '1024'
}