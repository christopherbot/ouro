import 'phaser'
import Loading from './scenes/loading'
import Title from './scenes/title'
import Menu from './scenes/menu'
import OnlineMenu from './scenes/onlineMenu'
import Game from './scenes/game'

import './index.css'

const gameConfig = {
  width: 800,
  height: 560,
  backgroundColor: '#072C40',
  physics: {
    default: 'arcade'
  },
  scene: [Loading, Title, Menu, Game, OnlineMenu],
}

const game = new Phaser.Game(gameConfig)
