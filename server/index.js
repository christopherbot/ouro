// import http from 'http'
// import { Server } from 'colyseus'
// import gameRoom from './gameRoom'
const http = require('http')
const colyseus = require('colyseus')
const GameRoom = require('./gameRoom')

const port = Number(process.env.PORT || 2657)

const gameServer = new colyseus.Server({
  server: http.createServer(),
})

gameServer.register('game', GameRoom)

gameServer.listen(port)
console.log(`Listening on ws://localhost: ${port}`)

