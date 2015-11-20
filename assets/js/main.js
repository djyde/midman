const Clipboard = require('clipboard')
const notie = require('notie')

const cb = new Clipboard(document.querySelectorAll('.btn'))

cb.on('success', function(){
  notie.alert(1, 'Copy success!', 1.5)
})