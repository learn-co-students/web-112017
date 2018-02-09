var WebSocket = require('ws')
var key = require('./key')
var fetch = require('node-fetch')
//var JSON = require('JSON')

var web112017ID = 'C7VPBUB2Q'

fetch('https://slack.com/api/rtm.connect?token=' + key.slack + '&pretty=1')
  .then(r => r.json()).then(j => openSocket(j.url))

openSocket = (url) => {

  const ws = new WebSocket(url);

  ws.on('message', messageString => {
    const message = JSON.parse(messageString)
    if (message.type == 'message' && message.channel === web112017ID) {

      console.log(message.text + " " + message.user)
      sendDMToUser(message.user, message.text)
    }
  })

  const sendDMToUser = (user, message) => {
    fetch('https://slack.com/api/im.list?token=' + key.slack).then(r => r.json()).then(response => {
      const channelId = response.ims.find(im => im.user === user).id
      console.log("channel: " + channelId)
      ws.send(JSON.stringify({
        "id": 1,
        "type": "message",
        "channel": channelId,
        "text": message
      }))
    })
  }

  ws.on('error', event => {
    console.log("ERROR ALERT: " + event)
  })
}
