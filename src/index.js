import 'phaser'
import { Well } from './scenes/well'

const gameConfig = {
  width: 680,
  height: 400,
  scene: Well,
}

const game = new Phaser.Game(gameConfig)
