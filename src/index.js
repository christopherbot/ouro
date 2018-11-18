import 'phaser'
import Title from './scenes/title'
import Menu from './scenes/menu'
import Game from './scenes/game'

const gameConfig = {
  width: 680,
  height: 400,
  // scene: [Title, Menu, Game],
  scene: [Menu, Game], // skip Title for development
}

const game = new Phaser.Game(gameConfig)
