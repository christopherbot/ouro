import 'phaser'
import Title from './scenes/title'
import Menu from './scenes/menu'
import Game from './scenes/game'

const gameConfig = {
  width: 720,
  height: 560,
  // scene: [Title, Menu, Game],
  scene: [Menu, Game], // skip Title for development
}

const game = new Phaser.Game(gameConfig)
