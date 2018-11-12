import 'phaser'
import Title from './scenes/title'
import Menu from './scenes/menu'

const gameConfig = {
  width: 680,
  height: 400,
  scene: [Title, Menu],
}

const game = new Phaser.Game(gameConfig)
