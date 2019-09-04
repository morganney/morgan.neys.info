// Would be better to use event delegation, but the "toggle" event does not bubble
document.querySelector('#eighties details').addEventListener('toggle', function(evt) {
  console.log('toggle', evt)
}, false)
