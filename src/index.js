import 'phaser'
import { SimpleScene } from './scenes/simpleScene'

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene,
}

const game = new Phaser.Game(gameConfig)
