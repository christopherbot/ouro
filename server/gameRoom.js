// import { Room, Client } from 'colyseus'
const colyseus = require('colyseus')

class GameRoom extends colyseus.Room {
  constructor() {
    super()
    this.maxClients = 4
  }

  onInit(options) {
    this.clock.setTimeout(() => this.broadcast("Oh sheet!"), 100)
    this.setState({
      players: {}
    })
  }

  onJoin(client, options) {
    this.state.players[ client.sessionId ] = {
      x: 0,
      y: 0
    }
  }

  onMessage(client, message) {
    if (message.action === "mousemove") {
      this.state.players[ client.sessionId ].x = message.x
      this.state.players[ client.sessionId ].y = message.y
    }
  }

  onLeave(client, consented) {
    delete this.state.players[ client.sessionId ]
  }

  onDispose() {
    console.log("Dispose BasicRoom")
  }
}

module.exports = GameRoom
