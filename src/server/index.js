// import { Server } from 'colyseus'
// import http from 'http'
// import express from 'express'

const colyseus = require('colyseus')
const http = require('http')
const express = require('express')

const Room = require('./room.js')

const port = process.env.PORT || 3000

const app = express()
const gameServer = new colyseus.Server({
  server: http.createServer(app),
})

gameServer.register('room', Room)
  .then((handler) => {
    handler.
      on("create", (room) => console.log("room created:", room.roomId)).
      on("dispose", (room) => console.log("room disposed:", room.roomId)).
      on("join", (room, client) => console.log(client.id, "joined", room.roomId)).
      on("leave", (room, client) => console.log(client.id, "left", room.roomId));
  })

gameServer.listen(port)
console.log(`Listening on http://localhost:${port}`)
