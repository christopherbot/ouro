const colyseus = require('colyseus')
const { Schema, type, MapSchema } = require('@colyseus/schema')

const log = (...args) => console.log('[Room]', ...args)

class Player extends Schema {
  constructor(x, y) {
    super()

    this.x = x
    this.y = y
  }
}

type('number')(Player.prototype, 'x')
type('number')(Player.prototype, 'y')


class State extends Schema {
  constructor() {
    super()

    this.players = new MapSchema()
  }
}

type({ map: Player })(State.prototype, 'players')


class Room extends colyseus.Room {
  onInit(options) {
    log('~~~ onInit', options)
    this.maxClients = 2
    this.setState(new State())
  }

  logPlayers() {
    console.log(this.state.players)
  }

  onJoin(client, options) {
    log('~~~ onJoin with client=', client.id, 'options=', options)
    this.state.players[client.sessionId] = new Player(0, 0)
    this.logPlayers()

    // if (this.clients.length === this.maxClients) {
    //   this.lock()
    // }
  }

  onMessage(client, message) {
    log('~~~ onMessage with client=', client.id, 'message=', message)
  }

  onLeave(client, consented) {
    log('~~~ onLeave with client=', client.id, 'consented=', consented)
    delete this.state.players[client.sessionId]
    this.logPlayers()
  }

  onDispose() {
    log('~~~ onDispose')
  }
}

type('string')(Room.prototype)

module.exports = Room